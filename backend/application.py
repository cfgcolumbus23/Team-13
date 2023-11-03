from flask import Flask, render_template, request, redirect, session
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.secret_key = 'your_secret_key'


@app.route("/test")
@cross_origin()
def home():
    return {"test": ["test1","test2"]}

if __name__ == "__main__":
    app.run(debug=True)
