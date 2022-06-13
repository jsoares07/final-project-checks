from flask_sqlalchemy import SQLAlchemy
from flask_sqlalchemy import SQLAlchemy
import os
import sys
from sqlalchemy import  Table, Column, ForeignKey, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    author = db.Column(db.String(120), unique=True, nullable=False)

    def generateId(self):
        return randint(0, 99999999)


    def serialize(self):
        return {
            "title": self.title,
            "author": self.author,
        }
    
    def addBook(self):
        db.session.add(self)
        db.session.commit()
        return "The book has been added"