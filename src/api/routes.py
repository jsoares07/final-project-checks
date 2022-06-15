"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Book
from api.utils import generate_sitemap, APIException

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
    editor = request.json.get('editor')
    genre = request.json.get('genre')
    language = request.json.get('language')
    description = request.json.get('description')
    image = request.json.get('image')

    # access_token = create_access_token(identity=email)
    print('hola me estan llamando', request_body)

    book = Book(
        title = title,
        author = author,
        editor= editor,
        genre= genre,
        language= language,
        description= description,
        image= image,
    )

    answer = book.addBook()

    response_body = {
         "message": answer,
         "book": book.serialize()
     }

    return jsonify(response_body), 200

@api.route("/books", methods=["GET"])
def getBooks():
    queryBooks = Book.query.all()
    queryBooks = list(map(lambda x: x.listOfBooks(), queryBooks))
    print(queryBooks)

    response_body = {
        "results": queryBooks
    }


    return jsonify(response_body), 200