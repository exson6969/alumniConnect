from flask import Flask, jsonify,render_template, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb://localhost:27017/alumni_connect"
mongo = PyMongo(app)

client = MongoClient("mongodb://localhost:27017/")
db = client["alumni_connect"]
user_collection = db["alumni"]

@app.route("/register", methods=["POST"])
def register():
    # Retrieve the information from the registration form
    data = request.get_json()
    password = data.get('password')
    confirm_password = data.get('cnfpassword')
    print(password)
    print(confirm_password)
    if password != confirm_password:
        print("Failed")
        return jsonify({'message': 'Password and Confirm Password do not match'}), 400
    else:
        mongo.db.alumni.insert_one(data)
        # save the data to the database
        print("Passed")
        return jsonify({'message': 'Successfully registered'})

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    user = user_collection.find_one({'email': email})
    if user and user['password'] == password:
        return jsonify({'status': 'success', 'user': user})
    else:
        return jsonify({'status': 'failed'})

@app.route("/profile")
def alumni_profile():
    data = request.get_json()
    email = data.get("email")  # get the email from the query parameters
    user = db.users.find_one({"email": email})  # find the user with the specified email
    if user is not None:
        return jsonify({'user': user})
    else:
        return "User not found"

if __name__ == "__main__":
    app.run()