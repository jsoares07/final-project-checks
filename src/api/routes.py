"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
# from models import User, Book




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


@api.route('/hello', methods=['GET'])
def hello():
    print('hello world')
    return 'valid response'

@api.route('/signup', methods=['POST'])
def signup():

    request_body = request.get_json(force=True)


    email = request.json.get('email', None)
    password = request.json.get('password', None)

    access_token = create_access_token(identity=email)
    print('hola me estan llamando', request_body, access_token)

    user = User(
        email = email,
        password = password,
    )

    answer = user.create()

    response_body = {
         "message": answer,
         "user": user.serialize()
     }

    return jsonify(response_body), 200
    
@api.route('/login', methods=['POST'])
def loginn():

    request_body = request.get_json(force=True)


    email = request.json.get('email', None)
    password = request.json.get('password', None)

    access_token = create_access_token(identity=email)
    print('hola me estan llamando', request_body, access_token)

    user = User(
        email = email,
        password = password,
    )


    response_body = {
         "message": "User logged in",
         "access_token": access_token,
         "user": user.serialize()
     }

    return jsonify(response_body), 200
    


@api.route('/login_malo', methods=['POST'])
def login_user(email, password):

    # email = request.json.get("email", None)
    # password = request.json.get("password", None)

    # print('email', email, 'password', password)

    # if email != "test" or password != "test":
    #     return {"error": "Wrong email or password"}, 400

    # # access_token = create_access_token(identity=email)
    # # response = {"access_token":access_token}
    # return response.jsonify({"msg": "user logged in"}), 200

    request_body = request.get_json(force=True)


    email = request.json.get('email', None)
    password = request.json.get('password', None)

    access_token = create_access_token(identity=email)
    print('hola me estan llamando', request_body, access_token)

    user = User(
        email = email,
        password = password,
    )

    user.create()

    response_body = {
         "message": "User created",
         "access_token": access_token,
         "user": user.serialize()
     }

    return jsonify(response_body), 200
    

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







