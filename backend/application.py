from flask import Flask, render_template, request, redirect, session
from database import engine
from sqlalchemy import text
import json

app = Flask(__name__)
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


@app.route("/posts")
def posts():
    with engine.connect() as conn:
        result = conn.execute(text("SELECT * FROM posts"))
        table = result.all()
        result_dict = [row._asdict() for row in table]

    return result_dict


@app.route("/api/message", methods=["POST"])
def message():
    dict = request.json
    username = dict['username']
    message = dict['message']
    with engine.connect() as conn:
        conn.execute(text(
            "INSERT INTO messages (username, password) VALUES ('" + username + "', '" + message + "')"))

    return "added"


@app.route("/login", methods=["POST"])
def check_login():
    dict = request.json
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
