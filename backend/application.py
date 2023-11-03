from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'your_secret_key'


@app.route("/")
def home():
    return "home"


@app.route("/message", methods=["POST"])
def message():
    print(request.json)
    return request.json


if __name__ == "__main__":
    app.run(debug=True, port=3000)
