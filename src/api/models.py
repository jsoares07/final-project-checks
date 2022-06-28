from flask_sqlalchemy import SQLAlchemy

import os
import sys
from sqlalchemy import  Table, Column, ForeignKey, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

from flask_admin.contrib.sqla import ModelView



db = SQLAlchemy()

# user_book = db.Table("user_book",
#   db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
#   db.Column('book_id', db.Integer, db.ForeignKey('book.id'))
#  )

# favourites = db.Table("users_book",
#    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
#    db.Column('book_id', db.Integer, db.ForeignKey('book.id'), primary_key=True)
# )


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120))
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    city = db.Column(db.String(120), unique=False)
    # ownership = db.relationship('Book', secondary="users_books", lazy='subquery', backref=db.backref('books_owners', lazy=True))
    # owner_book = db.relationship("Book", backref="Owner", lazy=True)
    
    # owner_book = db.relationship("Book", backref="Owner", lazy=True)
    # users_books = db.relationship('Book', secondary="users_books", lazy='subquery', backref=db.backref('books_owners', lazy=True))

    # owner_book = db.relationship("Book", backref="Owner", lazy=True)
    favourite_book = db.relationship('Book', secondary="users_books", lazy='subquery', backref=db.backref('selected book by a user', lazy=True))

    # country = db.Column(db.String(120))
    # mobile = db.Column(db.Integer)
    # birthday = db.Column(db.DateTime)
    # address = db.Column(db.String(120))
    # postcode = db.Column(db.Integer)
    # state = db.Column(db.String(120))
    # profile_pic = db.Column(db.String(120), nullable=True)

    # User = db.relationship('Book', )
    # User = db.relationship('Favourites', )

    # def __repr__(self):
    #     return f'<User {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "city": self.city,
            "favourites": list(map(lambda book: book.serialize(), self.favourite_book)),
            # "owner_book": list(map(lambda book: book.serialize(), self.owner_book))

            # "owner_book": list(map(lambda book: book.serialize(), self.owner_book)),
            # "users_books": list(map(lambda book: book.serialize(), self.users_books))
            # "user_name": self.user_name,
            # "first_name": self.first_name,
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
        return 'success, el usuario ha sido creado'



class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=False, nullable=False)
    author = db.Column(db.String(120), unique=False, nullable=False)
    publisher = db.Column(db.String(120), unique=False, nullable=False)
    genre = db.Column(db.String(120), unique=False, nullable=False)
    language = db.Column(db.String(120), unique=False, nullable=False)
    description = db.Column(db.String(1200), unique=False, nullable=False)
    # book_picture = db.Column(db.Text, unique=False, nullable=False)
    owner_id = db.Column(db.Integer(), db.ForeignKey('user.id'), nullable=True)
    
    def __repr__(self):
        return f'<Book {self.id}>'
 
    def addBook(new_book):
        db.session.add(new_book)
        db.session.commit()
        return "The book has been added"

    def serializeABook(self):

         return {
            "id": self.id,
            "title": self.title,
            "author": self.author,
            "publisher": self.publisher,
            "genre": self.genre,
            "language": self.language,
            "description": self.description,
            "owner_id": self.owner_id,
            # "book_picture": self.book_picture,
        }
    


class UsersBooks(db.Model):
    __tablename__="users_books"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer(), db.ForeignKey('user.id'))
    book_id = db.Column(db.Integer(), db.ForeignKey('book.id'))

    def serialize(self):
         return {
            "id": self.id,
            "user_id": self.user_id,
            "book_id": self.book_id,
        }


 
# class UsersBooks(db.Model):
#     __tablename__="users_books"
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.String(120), nullable=False)
#     user_id = db.Column(db.Integer(), db.ForeignKey('book.id'))
#     book_id = db.Column(db.Integer(), db.ForeignKey('user.id'))
 


# class Favourites(db.Model):
#     __tablename__ = 'favourites'
 
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.String(120), nullable=False)
#     favouritetype = db.Column(db.String(120), nullable=False)
#     favourite_book = db.Column(db.String(120), db.ForeignKey(User.id))
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

