from flask import Flask, render_template, request, redirect, session
from database import engine
from sqlalchemy import text

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


@app.route("/message", methods=["POST"])
def message():
    print(request.json)
    return request.json


@app.route("/login", methods=["GET", "POST"])
def check_login():

    return "True"


if __name__ == "__main__":
    app.run(debug=True, port=5000)
