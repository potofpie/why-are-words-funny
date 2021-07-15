from flask_cors import CORS
from flask import Flask

def createApp():
    app = Flask(__name__)
    CORS(app)
    return app
