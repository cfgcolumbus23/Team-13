from flask import Flask, render_template, request, redirect, session
from database import engine
from sqlalchemy import text
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.secret_key = 'your_secret_key'


@app.route("/testing")
def testing():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM testing2"))
        table = result.all()
        result_dict = [row._asdict() for row in table]
        for row in result_dict:
            print(row)

    return "works"


@app.route("/posts", methods=["GET", "POST"])
def posts():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM posts"))
        table = result.all()
        result_dict = [row._asdict() for row in table]

    return result_dict


@app.route("/addposts", methods=["GET", "POST"])
def add_posts():
    dict = request.json
    username = dict['username']
    content = dict['content']
    likes = dict['likes']
    print("here")
    print(content)
    print(username)
    with engine.connect() as conn:
        conn.execute(text(
            'INSERT INTO posts (username, content, likes) VALUES ("' + username + '", "' + content + '", 0)'))

    return "added"


@app.route("/jobs", methods=["GET", "POST"])
def jobs():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM jobs"))
        table = result.all()
        result_dict = [row._asdict() for row in table]
    print(result_dict)
    return result_dict


@app.route("/messages", methods=["GET", "POST"])
def get_messages():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM messages"))
        table = result.all()
        result_dict = [row._asdict() for row in table]
    print(result_dict)
    return result_dict


@app.route("/texts", methods=["GET", "POST"])
def texts():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM texts"))
        table = result.all()
        result_dict = [row._asdict() for row in table]
    print(result_dict)


@app.route("/insert", methods=["GET", "POST"])
def insert():
    print("here")
    dict = request.json
    username = dict['username']
    message = dict['message']
    rec = dict['rec']
    with engine.connect() as conn:
        conn.execute(text(
            'INSERT INTO posts (username, content, likes) VALUES ("' + str(username) + '", "' + str(message) + '", "' + str(rec) + '")'))

    return "added"


@app.route("/addmessage", methods=["POST"])
def message():
    print("came here")
    dict = request.json
    username = dict['username']
    message = dict['content']
    with engine.connect() as conn:
        conn.execute(text(
            'INSERT INTO messages (username, content) VALUES ("' + username + '", "' + message + '")'))

    return "added"


@app.route("/login", methods=["POST"])
def check_login():
    dict = request.json
    print(dict)
    username = dict['username']
    password = dict['password']
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM users"))
        table = result.all()
        result_dict = [row._asdict() for row in table]
        for row in result_dict:
            if (row['username'] == username and row['password'] == password):
                return "True"

    return "False"


if __name__ == "__main__":
    app.run(debug=True, port=5000)
