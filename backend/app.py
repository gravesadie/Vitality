
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#Test API Route
@app.route("/api/upload", methods=["GET", "POST"])
def hello_world():
    if request.method == "POST":
        return "<p>Hello, World!</p>"
    return "<p>Hello, World!</p>"

if __name__ == "__main__":
    app.run(debug=True)
