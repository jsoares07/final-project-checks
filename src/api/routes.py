"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
# from models import User, Book

from werkzeug.security import generate_password_hash


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



@api.route('/edit-profile/<int:id>', methods=['PUT'])
def editprofile(id):

    user = User.query.filter_by(id=id)

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
            return 'success, the infromation has been updated'
            
            return jsonify({'results': user.serialize()}),200


    # request_body = request.get_json(force=True)

    # email = request.json.get('email', None)
    # password = request.json.get('password', None)
    # first_name = request.json.get('first_name', None)
    # user_name = request.json.get('user_name', None)
    # city = request.json.get('city', None)


    # user = User(
    #     email = email,
    #     first_name = first_name,
    #     user_name = user_name,
    #     city = city,
    # )

    # answer = user.update()

    # response_body = {
    #      "message": answer,
    #      "user": user.serialize()
    #     }

    # return jsonify(response_body), 200