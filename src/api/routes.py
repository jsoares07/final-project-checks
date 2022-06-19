"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
# from models import User, Book




api = Blueprint('api', __name__)



@api.route('/signup', methods=['POST'])
def signup():

    request_body = request.get_json(force=True)


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





