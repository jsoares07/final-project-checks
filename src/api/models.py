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
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    # first_name = db.Column(db.String(120), unique=False, nullable=False)
    # username = db.Column(db.String(120), nullable=False)
    # last_name = db.Column(db.String(120), unique=False, nullable=False)
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # "first_name": self.first_name,
            # "username": self.username,
            # "last_name": self.last_name,
            # do not serialize the password, its a security breach
        }

    def create(self):
        # este usuario existe?
        # si? retorna, error, el usuario ya existe


        # return 'error, el usuario ya existe'
        
        # no? crealo
        db.session.add(self)
        db.session.commit()
        return 'success, el usuario ha sido creado'
     
   
class Book(db.Model):
    # __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    author = db.Column(db.String(80), unique=False, nullable=False)
    
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