# from - http://flask.readthedocs.org/en/0.2/patterns/sqlite3/
# check this out - http://peterhudec.github.io/authomatic/examples/flask-simple.html
# great resource - http://www.fullstackpython.com/flask.html
# templates - http://flask.pocoo.org/docs/0.10/quickstart/
# more templates - http://flask.pocoo.org/docs/0.10/tutorial/templates/

import sqlite3
from flask import g

DATABASE = '/path/to/database.db'

def connect_db():
    return sqlite3.connect(DATABASE)

@app.before_request
def before_request():
    g.db = connect_db()

@app.after_request
def after_request(response):
    g.db.close()
    return response
	
def query_db(query, args=(), one=False):
    cur = g.db.execute(query, args)
    rv = [dict((cur.description[idx][0], value)
               for idx, value in enumerate(row)) for row in cur.fetchall()]
    return (rv[0] if rv else None) if one else rv
	
for user in query_db('select * from users'):
    print user['username'], 'has the id', user['user_id']