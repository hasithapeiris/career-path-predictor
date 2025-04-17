from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app) 

# Load the trained model
with open('models/prediction_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

# Define career labels
career_labels = {
    0: "Backend Developer",
    1: "Cyber Security Engineer",
    2: "Data Scientist",
    3: "Frontend Developer",
    4: "ML Engineer",
    5: "Mobile App Developer",
    6: "UI/UX Designer"
}

@app.route('/predict', methods=['POST'])
def predict_career():
    try:
        data = request.json
        answers = data.get('answers', {})

        # Define the expected order of features
        expected_keys = [
            "expertise_level",
            "working_frequency",
            "tech_news_frequency",
            "willingness_to_learn",
            "interest_visual_elements",
            "interest_user_behavior",
            "math_background",
            "interest_working_with_data",
            "interest_data_analysis",
            "interest_data_insights",
            "interest_ml_algorithms",
            "interest_server_side",
            "interest_innovation",
            "interest_mobile_apps",
            "concern_digital_security",
            "interest_security_concepts",
            "interest_design_thinking",
            "interest_web"
        ]

        # Extract features in correct order
        features = [answers.get(key) for key in expected_keys]

        if None in features or len(features) != 18:
            return jsonify({"error": "Invalid or missing answers for all 18 features."}), 400

        # Prepare data for prediction
        input_data = np.array(features).reshape(1, -1)

        prediction = model.predict(input_data)[0]
        probabilities = model.predict_proba(input_data)[0] * 100

        # Map probabilities to labels and cast to Python float
        probability_map = {
            career_labels[i]: float(round(probabilities[i], 2)) for i in range(len(career_labels))
        }


        return jsonify({
            "predicted_career": career_labels[prediction],
            "probabilities": probability_map
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run()
