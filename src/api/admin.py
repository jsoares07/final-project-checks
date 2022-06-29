  
import os
from flask_admin import Admin

from .models import db, User
from .models import db, Book
from .models import db, UsersBooks


from flask_admin.contrib.sqla import ModelView


class MyModel(ModelView):
    column_display_pk = True
    column_hide_backrefs = False

class RelationshipModel(ModelView):
    column_display_pk = True
    column_hide_backrefs = False
    column_list = ("user_id", 'book_id')


def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(MyModel(User, db.session))
    admin.add_view(MyModel(Book, db.session))
    admin.add_view(RelationshipModel(UsersBooks, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))