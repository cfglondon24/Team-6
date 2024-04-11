import json
from flask import Flask, jsonify, request


app = Flask(__name__)

symptoms = []
users = []
journal_entries = []


@app.route('/register', methods=['GET', 'POST'])
def register_user():
    user_details = json.loads(request.data)
    print(user_details)
    users.append(user_details)
    return '', 201

@app.route('/symptoms', methods=['GET', 'POST'])
def get_symptoms():
    if request.method == 'POST':
        symptom = json.loads(request.data)
        symptoms.append(symptom)
        print(symptoms)
        return '', 201
    return jsonify(symptoms)


@app.route('/journal', methods=['GET', 'POST'])
def get_journal_entries():
    if request.method == 'POST':
        entry = json.loads(request.data)
        journal_entries.append(entry)
        return '', 201
    return jsonify(journal_entries)

if __name__ == '__main__':
    app.run(port=4000, debug=True)

