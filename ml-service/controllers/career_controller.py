from flask import request, jsonify
import pickle
import numpy as np

# Load the trained model
with open('models/prediction_model.pickle', 'rb') as model_file:
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

def predict_career():
    try:
        # Get JSON data from request
        data = request.json
        features = data.get('features')
        
        if not features or len(features) != 18:
            return jsonify({"error": "Invalid input. Expected 18 features."}), 400
        
        # Convert input to numpy array and reshape
        input_data = np.array(features).reshape(1, -1)
        
        # Make prediction
        prediction = model.predict(input_data)[0]
        probabilities = model.predict_proba(input_data)[0] * 100
        
        # Map probabilities to labels
        probability_map = {career_labels[i]: round(probabilities[i], 2) for i in range(len(career_labels))}
        
        return jsonify({
            "predicted_career": career_labels[prediction],
            "probabilities": probability_map
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
