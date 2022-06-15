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
        # id = id,
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
    


 

# @api.route('/edit-profile', methods=['PUT', 'GET', 'POST'])
# def editprofile():

#     request_body = request.get_json(force=True)

#     form = UseForm()
#     id = current_user.id
#     name_to_update = User.query.get_or_404

#     if request.method == 'PUT':

#     # name_to_update.email = request.form['email']
#     # name_to_update.password = request.form['password']
#     # name_to_update.first_name = request.form['first_name']
#     # name_to_update.user_name = request.form['user_name']
#     # name_to_update.mobile = request.form['mobile']
#     # name_to_update.birthday = request.form['birthday']
#     # name_to_update.address = request.form['address']
#     # name_to_update.postcode = request.form['postcode']
#     # name_to_update.state = request.form['state']
#     # name_to_update.city = request.form['city']
#     # name_to_update.country = request.form['country']
#     # name_to_update.profile_pic = request.files['profile_pic']

#     access_token = create_access_token(identity=email)
#     print('hola me estan llamando', request_body, access_token)

#     user = User(
#         email = email,
#         password = password,
#         first_name = first_name,
#         user_name = user_name,
#         mobile = mobile,
#         birthday = birthday,
#         address = address,
#         postcode = postcode,
#         state = state,
#         city = city,
#         country = country,
#         profile_pic = profile_pic,
#     )

#     answer = user.update()

#     response_body = {
#          "message": answer,
#          "user": user.serialize()
#      }

#     return jsonify(response_body), 200
    





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



# @app.route('/user/<int:id>', methods = ['GET'])
# def get_user(id):
   
#     return jsonify(user), 200

# def get_user(id):
#     user = user.get_user(uid)
#     if user is None:
#         return jsonify({"msg":"This user doesnt exist"})
#     return jsonify(character),200




# @api.route('/book', methods=['POST'])
# def register_book():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200

#     #save the user (from models.py)
#     our_user.save_book()
    
#     return jsonify(our_book.serialize())







