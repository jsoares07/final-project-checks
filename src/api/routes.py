"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Book
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
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