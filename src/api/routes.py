"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Book
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

from flask_jwt_extended import create_access_token
# from models import User, Book

from werkzeug.security import generate_password_hash
# check_password_hash


api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def signup():

    request_body = request.get_json(force=True)

    # hashed_password = generate_password_hash(data['password'], method='dfgdhjkg54654dsfd788gfhgf')

    email = request.json.get('email', None)
    password = request.json.get('password', None)
    user_name = request.json.get('user_name', None)
    first_name = request.json.get('first_name', None)
    city = request.json.get('city', None)

    access_token = create_access_token(identity=email)
    print('hola me estan llamando', request_body, access_token)

    user = User(
        email = email,
        password = password,
        user_name = user_name,
        first_name = first_name,
        city = city,
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

@api.route('/offerbook', methods=['POST'])
def offerbook():

    request_body = request.get_json(force=True)


    title = request.json.get('title')
    author = request.json.get('author')
    publisher = request.json.get('publisher')
    genre = request.json.get('genre')
    language = request.json.get('language')
    description = request.json.get('description')
    # book_picture = request.json.get('book_picture')

    print('hola me estan llamando', request_body)

    book = Book(
        title = title,
        author = author,
        publisher= publisher,
        genre= genre,
        language= language,
        description= description,
        # book_picture= book_picture,
    )

    answer = book.addBook()

    response_body = {
         "message": answer,
         "book": book.serialize()
     }

    return jsonify(response_body), 200

# We query all books
@api.route("/books", methods=["GET"])
def getBooks():
    queryBooks = Book.query.all()
    queryBooks = list(map(lambda x: x.listOfBooks(), queryBooks))
    print(queryBooks)

    response_body = {
        "results": queryBooks
    }


    return jsonify(response_body), 200

# We query one book
@api.route('/book/<int:id>', methods=['GET'])
def get_book(id = None):
    query_book = Book.query.filter_by(id=id).first()
    if not query_book:
        return jsonify({"message": "No book found!"})

    query_a_book = query_book.listOfBooks()


    print("####################")
    print(query_a_book)
    print("####################")

    response_body = {
        "results": query_a_book
    }

        
    return jsonify(response_body), 200
