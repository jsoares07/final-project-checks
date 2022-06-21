from flask_sqlalchemy import SQLAlchemy

import os
import sys
from sqlalchemy import  Table, Column, ForeignKey, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine


db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=True)
    user_name = db.Column(db.String(120), unique=True, nullable=False)
    first_name = db.Column(db.String(120), unique=False, nullable=False)
    city = db.Column(db.String(120))
    # country = db.Column(db.String(120))
    # mobile = db.Column(db.Integer)
    # birthday = db.Column(db.DateTime)
    # address = db.Column(db.String(120))
    # postcode = db.Column(db.Integer)
    # state = db.Column(db.String(120))
    # profile_pic = db.Column(db.String(120), nullable=True)

    # User = db.relationship('Book', )
    # User = db.relationship('Favourites', )
    

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "user_name": self.user_name,
            "first_name": self.first_name,
            "city": self.city,
            # "country": self.country,
            # "mobile": self.mobile,
            # "birthday": self.birthday,
            # "address": self.address,
            # "postcode": self.postcode,
            # "state": self.state,
            # do not serialize the password, its a security breach
        }

    def create(self):
        # este usuario existe?
        # si? retorna, error, el usuario ya existe

        # return 'error, el usuario ya existe'
        
        # no? crealo
        db.session.add(self)
        db.session.commit()
        return 'success, the user has been created'


class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=False, nullable=False)
    author = db.Column(db.String(120), unique=False, nullable=False)
    publisher = db.Column(db.String(120), unique=False, nullable=False)
    genre = db.Column(db.String(120), unique=False, nullable=False)
    language = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(1200), unique=False, nullable=False)
    # book_picture = db.Column(db.Text, unique=False, nullable=False)  
 
    def addBook(self):
        db.session.add(self)
        db.session.commit()
        return "The book has been added"

    def listOfBooks(self):
         return {
            "id": self.id,
            "title": self.title,
            "author": self.author,
            "publisher": self.publisher,
            "genre": self.genre,
            "language": self.language,
            "description": self.description,
            # "book_picture": self.book_picture,
        }
    


# class Favourites(db.Model):
#     __tablename__ = 'favourites'
 
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.String(120), nullable=False)
#     favouritetype = db.Column(db.String(120), nullable=False)
#     favourite_book = db.Column(db.String(120), db.ForeignKey(Parent.id))
#     favourite_id = db.Column(db.String(120), nullable=False)

#     def __repr__(self):
#         return '<Favourites %r>' % self.name

#     def serialize(self):
#         return {
#             "id": self.id,
#             "user_id": self.user_id,
#             "favouritetype": self.favouritetype,
#             "favourite_id": self.favourite_id,
#             "favourite_book": self.favourite_book,
#         }

