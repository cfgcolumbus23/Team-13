from flask import Flask, render_template, request, redirect, session
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.secret_key = 'your_secret_key'


@app.route("/test")
@cross_origin()
def home():
    return "home"


@app.route("/message", methods=["POST"])
def message():
    print(request.json)
    return request.json


if __name__ == "__main__":
    app.run(debug=True, port=3000)
