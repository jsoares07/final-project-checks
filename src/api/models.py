from flask_sqlalchemy import SQLAlchemy
import os
import sys
from sqlalchemy import  Table, Column, ForeignKey, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
# from eralchemy import render_er

db = SQLAlchemy()

class User(db.Model):
    # __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    password = db.Column(db.String(80))
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    first_name = db.Column(db.String(120), unique=False, nullable=False)
    user_name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    profile_picture = db.Column(db.Text())
    date_of_birth = db.Column(db.Date)    
    mobile_number = db.Column(db.String(120), unique=False, nullable=False)
    address_line = db.Column(db.String(120), unique=False, nullable=False)
    postcode = db.Column(db.String(120), unique=False, nullable=False)
    state = db.Column(db.String(120), unique=False, nullable=False)
    city = db.Column(db.String(120), unique=False, nullable=False)
    country = db.Column(db.String(120), unique=False, nullable=False)


    # users = relationship('books')    

    def set_password(self,password):
        self.password_hash = generate_password_hash(password)

    def check_password(self,password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "password": self.password,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "user_name": self.user_name,           
            "date_of_birth": self.date_of_birth,          
            "profile_picture": self.profile_picture,
            "mobile_number": self.mobile_number,
            "address_line": self.address_line,
            "postcode": self.postcode,
            "state": self.state,
            "city": self.city,
            "country": self.country,
            # do not serialize the password, its a security breach
        }

#     def login_user(email, password):
#         user = User.query.filter_by(email=email, password=password).first()
#         return user
    
#     def login_user(event):
#         user = User(email=email, password=password)
#         db.session.add(user)
     
#    #this function will save the new user in the database
#     def save_user(email, password):
        
#         #lets save the user in the database
#         db.session.add(user)
#         db.session.commit()

#     def signup_user():
       
#         user = User(email=email, password=password, first_name=first_name, user_name=user_name, city=city)
#         db.session.add(user)

#     # def edit_user():
       
#     #     user = User(first_name=first_name, last_name=last_name, date_of_birth=date_of_birth, email=email, mobile_number=mobile_number, city=city, country=country, profile_picture=profile_picture)
#     #     db.session.add(user)
     
   
   
# class Book(db.Model):
#     __tablename__ = 'books'

#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(120), unique=True, nullable=False)
#     author = db.Column(db.String(80), unique=False, nullable=False)
#     editor = db.Column(db.String(120), unique=False, nullable=False)
#     genre = db.Column(db.String(120), unique=False, nullable=False)
#     language = db.Column(db.String(120), unique=False, nullable=False)
#     description = db.Column(db.String(120), unique=False, nullable=False)  
#     book_picture = db.Column(db.Text())

#     # books = relationship('users')    

#     def __repr__(self):
#         return f'<Book {self.email}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "title": self.title,
#             "author": self.author,
#             "editor": self.editor,
#             "genre": self.genre,          
#             "language": self.language,
#             "description": self.description,
#             "book_picture": self.book_picture,
#             # do not serialize the password, its a security breach
#         }


# # render_er(db.Model, 'diagram.png')