"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Book, UsersBooks
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_jwt_extended import create_access_token
# from models import User, Book
from werkzeug.security import generate_password_hash



api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def signup():

    request_body = request.get_json(force=True)

    # hashed_password = generate_password_hash(data['password'], method='dfgdhjkg54654dsfd788gfhgf')

    email = request.json.get('email', None)
    password = request.json.get('password', None)
    name = request.json.get('name', None)
    city = request.json.get('city', None)
    # user_name = request.json.get('user_name', None)
    # first_name = request.json.get('first_name', None)


    # hashed_password = generate_password_hash(password)

    access_token = create_access_token(identity=email)
    print('hola me estan llamando', request_body, access_token)

    user = User(
        email = email,
        password = password,
        name = name,
        city = city,
        # password = hashed_password,
        # user_name = user_name,
        # first_name = first_name,
    )

    answer = user.create()

    response_body = {
         "message": answer,
         "user": user.serialize()
     }

    return jsonify(response_body), 200
    
    
@api.route('/login', methods=['POST'])
def login():

    request_body = request.get_json(force=True)


    email = request.json.get('email', None)
    password = request.json.get('password', None)

    found_user = User.query.filter_by(email=email).first()


    if found_user and found_user.password == password:
        token = create_access_token(identity=email)
        return {
            "message": "User logged in",
            "token": token,
            "user": found_user.serialize()
            }, 200
    else:
        return {"error":"user and password not valid"}, 400


      
# We query one user
@api.route('/login/<int:id>', methods=['POST'])
def get_user(id = None):
    query_user = User.query.filter_by(id=id).first()
    if not query_user:
        return jsonify({"message": "No user found!"})

    query_a_user = query_user.serialize()


    print("####################")
    print(query_a_user)
    print("####################")

    response_body = {
        "results": query_a_user
    }


    return jsonify(response_body), 200
    
    
@api.route('/edit-profile/<int:user_id>', methods=['GET', 'PUT'])
def editprofile(user_id = None):

    # user = User.query.filter_by(id=id)
    user = User.query.filter_by(id=user_id).first()

    email = request.json.get('email', None)
    password = request.json.get('password', None)
    user_name = request.json.get('user_name', None)
    first_name = request.json.get('first_name', None)
    city = request.json.get('city', None)


    if (email or password or user_name or first_name or city):
        if email != None:
            user.email = email
        if password != None:
            user.password = password
        if  user_name  != None:  
            user.user_name = user_name 
        if first_name != None:
            user.first_name = first_name
        if city != None:
            user.city = city
        
        db.session.commit()
        # return 'success, the infromation has been updated'
        
        return jsonify({'results': user.serialize()}),200


@api.route('/offerbook', methods=['POST'])
def offerbook():

    request_body = request.get_json(force=True)


    title = request.json.get('title')
    author = request.json.get('author')
    publisher = request.json.get('publisher')
    genre = request.json.get('genre')
    language = request.json.get('language')
    description = request.json.get('description')
    owner_id = request.json.get('owner_id')
    # book_picture = request.json.get('book_picture')

    print('hola me estan llamando', request_body)

    book = Book(
        title = title,
        author = author,
        publisher= publisher,
        genre= genre,
        language= language,
        description= description,
        owner_id = owner_id
        # book_picture= book_picture,
    )

    answer = Book.addBook(book)
    
    new_book = Book.query.filter(Book.title == title).first()
    book_serealize = new_book.serialize()
    new_book_id = book_serealize['id']

    new_relation =UsersBooks(
        user_id = owner_id,
        book_id = new_book_id
    )
    db.session.add(new_relation)
    db.session.commit()
    response_body = {
         "message": answer,
        #  "book": Book.serializeABook()
     }

    return jsonify(response_body), 200


@api.route("/users", methods=["GET"])
def getUsers():
    queryUsers = User.query.all()
    queryUsers = list(map(lambda x: x.serialize(), queryUsers))
    print(queryUsers)

    response_body = {
        "results": queryUsers
    }

    return jsonify(response_body), 200


# We query one book
@api.route('/book/<int:book_id>', methods=['GET'])
def get_book(book_id = None):
    book = Book.query.filter_by(id=book_id).first()
    if not book:
        return jsonify({"message": "No book found!"})

    query_a_book = book.serializeABook()



    print("####################")
    print(query_a_book)
    print("####################")

    response_body = {
        "results": query_a_book
    }

        
    return jsonify(response_body), 200


# We query all books
@api.route("/books", methods=["GET"])
def getBooks():
    queryBooks = Book.query.all()

    queryBooks = list(map(lambda x: x.serializeABook(), queryBooks))

    print(queryBooks)

    response_body = {
        "results": queryBooks
    }

    return jsonify(response_body), 200

@api.route("/booksbyuser", methods=["GET"])
def getUserBooks():
    queryUserbooks = UsersBooks.query.all()
    userbooks = list(map(lambda x: x.serialize(), queryUserbooks))
    print(userbooks)

    response_body = {
        "results": userbooks
    }

    return jsonify(response_body), 200


# @api.route('/booksbyuser', methods=['GET'])
# def login():

#     request_body = request.get_json(force=True)


#     id = request.json.get('id', None)

#     booksByUser = UsersBooks.query.filter_by(user_id=id)


#     if booksByUser:
#             #for para recorrer booksByUser,
#             # por cada book id, 
#             #book = Book.query.filter_by(id=book_id).first() 
#             listOfBooks = []
#             return {
#                 "listOfBooks": listOfBooks
#                 }, 200
#     else:
#             return {"error":"user and password not valid"}, 400



# We query one book
# @api.route('<int:user_id>/book/<int:book_id>', methods=['GET'])
# def get_book(book_id = None, user_id = None):
#     query_book = Book.query.filter_by(id=book_id).first()
#     query_book = User.query.filter_by(id=user_id).first()
#     if not query_book:
#         return jsonify({"message": "No book found!"})

#     query_a_book = query_book.listOfBooks()


#     print("####################")
#     print(query_a_book)
#     print("####################")

#     response_body = {
#         "results": query_a_book
#     }

        
#     return jsonify(response_body), 200


