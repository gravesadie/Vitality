
from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
cors = CORS(app, origin='*')

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route("/", methods=["GET", "POST"])
#Test API Route
@app.route('/api/upload', methods=["GET", "POST"])
def upload_file():
    if request.method == "POST":
        if 'files[]' not in request.files:
            resp = jsonify({
                "message": 'No file part in the request',
                "status": 'failed'
                })
            resp.status_code = 400
            return resp
        files = request.files.getlist('files[]')

        for file in files:
            #if file and allowed_file(file.filename):
                #filename = secure_filename(file.filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        resp = jsonify({
            "message": "Upload Successful",
            "status": "success"
        }) 
        return resp

if __name__ == "__main__":
    app.run(debug=True, port=8080)
