"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token


api = Blueprint('api', __name__)

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.

# @api.route("/token", methods=["POST"])
# def create_token():
#     email = request.json.get("email", None)
#     password = request.json.get("password", None)
#     if email != "test" or password != "test":
#         return jsonify({"msg": "Bad email or password"}), 401

#     access_token = create_access_token(identity=email)
#     return jsonify(access_token=access_token) 



@api.route('/signup', methods=['POST', 'GET'])
def signup():

    form = request.form 
    email = 'Olga'
    password = '123'
    access_token = create_access_token(identity=email)

    user = User(
        email = 'email',
        password = 'password',
        first_name = 'first_name',
        user_name = 'user_name',

    )

        # user.set_password('password')
        # db.session.add(user)
        # db.session.commit()
        # return "Succesfully registered"

    # user.serialize()

    # response_body = {
    #     "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    #     "access_token": access_token,
    #     "user": user.serialize()
    # }

    return jsonify(access_token), 200

    #save the user (from models.py)
    # our_user.save_user()
    
    # return jsonify(our_user.serialize())


@api.route('/login', methods=['POST'])
def login_user(email, password):

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    print('email', email, 'password', password)

    if email != "test" or password != "test":
        return {"error": "Wrong email or password"}, 400

    # access_token = create_access_token(identity=email)
    # response = {"access_token":access_token}
    return response.jsonify({"msg": "user created"}), 200



# @api.route('/signup', methods=['GET','POST'])
# def register_user(email, password):

#     email = request.json.get("email", None)
#     password = request.json.get("password", None)

#     #Now we need to create a list of information which should be passed to the DataBase
#     #We dont need to mention ID here, because its set up automatically
#     our_user = User (

#         email = email,
#         password = password,
#         is_active = False,

#     )

#     #save the user (from models.py)
#     our_user.save_user()
    
#     return jsonify(our_user.serialize())



# @api.route('/book', methods=['POST'])
# def register_book():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200

#     #save the user (from models.py)
#     our_user.save_book()
    
#     return jsonify(our_book.serialize())







