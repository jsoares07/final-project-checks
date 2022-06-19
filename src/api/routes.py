"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
# from models import User, Book

# from werkzeug.security import generate_password_hash, check_password_hash


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



# @api.route('/edit-profile/<int:id>', methods=['PUT'])
# def edit_user():

#     id = get_jwt_identity()
#     userId = User.query.get(id)


#     email = request.json.get('email', None)
#     password = request.json.get('password', None)
#     user_name = request.json.get('user_name', None)
#     first_name = request.json.get('first_name', None)
#     city = request.json.get('city', None)
#     country = request.json.get('country', None)
#     mobile = request.json.get('mobile', None)
#     birthday = request.json.get('birthday', None)
#     address = request.json.get('address', None)
#     postcode = request.json.get('postcode', None)
#     state = request.json.get('state', None)


#     if found_user and found_user.password == password:
#         token = create_access_token(identity=email)

#     if  (email or password or user_name or first_name or city or country or mobile or birthday or address or postcode or state ):
#             if email != None:
#                 userId.email = email
#             if password != None:  
#                 userId.password = password
#             if user_name != None:
#                 userId.user_name = user_name
#             if first_name != None:
#                 userId.first_name = first_name
#             if country !=None:
#                 userId.country = country
#             if mobile != None:
#                 userId.mobile = mobile
#             if birthday != None:
#                 userId.birthday = birthday
#             if address != None:
#                 userId.address = address
#             if postcode != None:
#                 userId.postcode = postcode   
#             if state != None:
#                 userId.state = state  

#             db.session.commit()
            
#             return jsonify({'results': userId.serialize()}),200