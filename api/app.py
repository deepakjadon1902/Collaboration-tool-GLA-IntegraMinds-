
# from flask import Flask, request, jsonify
# from pymongo import MongoClient
# from flask_cors import CORS

# app = Flask(__name__)
# cors = CORS(app, resources={r"/*": {"origins": "*"}})
# CORS(app)  # Allow requests from all origins

# # MongoDB connection
# client = MongoClient('mongodb://localhost:27017/')
# mdb = client['pro456']  # Use 'pro456' database

# # Submit feedback route
# @app.route("/submit-feedback", methods=['POST'])
# def submit_feedback():
#     input_data = request.get_json()
#     rating = input_data.get('rating')
#     feedback = input_data.get('feedback')

#     if rating is None or feedback is None:
#         return jsonify({"status": 0, "msg": "Rating and feedback are required"}), 400

#     new_feedback = {
#         "rating": rating,
#         "feedback": feedback
#     }
#     mdb.feedback.insert_one(new_feedback)

#     return jsonify({"status": 1, "msg": "Feedback submitted successfully"}), 201

# # Get all users route
# @app.route("/getdata", methods=['GET'])
# def get_data():
#     # Fetch all users from MongoDB and return fields excluding sensitive ones like passwords
#     users = list(mdb.users.find({}, {"_id": 1, "name": 1, "email": 1, "Phonenumber": 1}))
#     return jsonify(users)

# # Comment submission endpoint
# @app.route("/submit-comment", methods=['POST'])
# def submit_comment():
#     input_data = request.get_json()
#     username = input_data.get('username')
#     comment = input_data.get('comment')

#     if not username or not comment:
#         return jsonify({"status": 0, "msg": "Both fields are required"}), 400

#     # Insert new comment into MongoDB
#     new_comment = {
#         "username": username,
#         "comment": comment
#     }
#     mdb.comments.insert_one(new_comment)
#     return jsonify({"status": 1, "msg": "Comment submitted successfully"}), 201

# # Fetch all comments
# @app.route("/comments", methods=['GET'])
# def get_comments():
#     comments = list(mdb.comments.find({}, {"_id": 1, "username": 1, "comment": 1}))
#     for comment in comments:
#         comment['_id'] = str(comment['_id'])  # Convert ObjectId to string
#     return jsonify(comments)

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)
from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
from bson import ObjectId  # Import ObjectId to handle MongoDB IDs

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
CORS(app)  # Allow requests from all origins

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
mdb = client['pro456']  # Use 'pro456' database

# Submit feedback route
@app.route("/submit-feedback", methods=['POST'])
def submit_feedback():
    input_data = request.get_json()
    rating = input_data.get('rating')
    feedback = input_data.get('feedback')

    if rating is None or feedback is None:
        return jsonify({"status": 0, "msg": "Rating and feedback are required"}), 400

    new_feedback = {
        "rating": rating,
        "feedback": feedback
    }
    mdb.feedback.insert_one(new_feedback)

    return jsonify({"status": 1, "msg": "Feedback submitted successfully"}), 201

# Get all users route
@app.route("/getdata", methods=['GET'])
def get_data():
    # Fetch all users from MongoDB and return fields excluding sensitive ones like passwords
    users = list(mdb.users.find({}, {"_id": 1, "name": 1, "email": 1, "Phonenumber": 1}))
    return jsonify(users)

# Update user route
@app.route("/updateuser/<user_id>", methods=['PUT'])
def update_user(user_id):
    input_data = request.get_json()
    name = input_data.get('name')
    email = input_data.get('email')
    Phonenumber = input_data.get('Phonenumber')

    if not name or not email:
        return jsonify({"status": 0, "msg": "Name and email are required"}), 400

    # Update user data in MongoDB
    update_result = mdb.users.update_one(
        {"_id": ObjectId(user_id)},
        {"$set": {"name": name, "email": email, "Phonenumber": Phonenumber}}
    )

    if update_result.matched_count == 0:
        return jsonify({"status": 0, "msg": "User not found"}), 404

    return jsonify({"status": 1, "msg": "User updated successfully"}), 200

# Comment submission endpoint
@app.route("/submit-comment", methods=['POST'])
def submit_comment():
    input_data = request.get_json()
    username = input_data.get('username')
    comment = input_data.get('comment')

    if not username or not comment:
        return jsonify({"status": 0, "msg": "Both fields are required"}), 400

    # Insert new comment into MongoDB
    new_comment = {
        "username": username,
        "comment": comment
    }
    mdb.comments.insert_one(new_comment)
    return jsonify({"status": 1, "msg": "Comment submitted successfully"}), 201

# Fetch all comments
@app.route("/comments", methods=['GET'])
def get_comments():
    comments = list(mdb.comments.find({}, {"_id": 1, "username": 1, "comment": 1}))
    for comment in comments:
        comment['_id'] = str(comment['_id'])  # Convert ObjectId to string
    return jsonify(comments)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
