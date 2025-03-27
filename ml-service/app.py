from flask import Flask, request, jsonify
from flask_cors import CORS
from controllers.career_controller import predict_career

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

@app.route('/predict', methods=['POST'])
def predict():
    try:
        result = predict_career()
        return jsonify(result), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
