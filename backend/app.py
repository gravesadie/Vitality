
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origin='*')

@app.route("/", methods=["GET", "POST"])
#Test API Route
@app.route('/api/upload', methods=["GET", "POST"])
def hello_world():
    if request.method == "POST":
        if 'files[]' not in request.files:
            resp = jsonify({
                "message": 'No file part in the request',
                "status": 'failed'
                })
            resp.status_code = 400
            return resp
        resp = jsonify({
            "message": "Upload Successful",
            "status": "success"
        }) 
        return resp

if __name__ == "__main__":
    app.run(debug=True, port=8080)
