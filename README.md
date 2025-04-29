# Tech Career Path Predictor

A machine learning-powered web application designed to predict suitable technology career paths for users based on their skills, education, and experience. The system uses a Flask backend to serve trained ML models and a modern, responsive Next.js frontend for user interaction.

![image](https://github.com/user-attachments/assets/18388630-194e-4971-bf46-8dfeae1331ee)

🌐 [Live Demo](https://devpath-app.vercel.app/)

## 🚀 Project Overview

Tech Career Path Predictor assists individuals in identifying potential tech career trajectories by analyzing user-inputted information through trained machine learning models. The backend implements Decision Tree, Random Forest, and XGBoost classifiers, trained on structured datasets, while the frontend delivers a seamless and interactive experience for users to input their data and view predictions.

## 🛠️ Technology Stack

**Frontend:**
- Next.js (React framework)
- Tailwind CSS (for styling)
- Axios (for API requests)

**Backend:**
- Flask (Python web framework)
- Scikit-learn (ML algorithms: Decision Tree, Random Forest)
- XGBoost (for gradient boosting models)
- Pandas, NumPy (data preprocessing)
- Flask-CORS (for cross-origin API handling)

**Machine Learning:**
- Label Encoding of categorical features
- Feature selection using Mutual Information
- Hyperparameter tuning and model evaluation with cross-validation
- Sample weighting to address class imbalance

---

## 📦 Project Structure

```
career-path-predictor/
│
├── ml-service/
│   ├── main.py              # Flask API endpoints
│   ├── model/              # Saved ML models (pickle or joblib format)
│   ├── utils.py            # Preprocessing and prediction utilities
│   └── requirements.txt    # Python dependencies
│
├── frontend/
│   ├── pages/
│   │   ├── index.js         # Main input form
│   │   ├── result.js        # Prediction result page
│   ├── components/          # Reusable UI components
│
├── README.md
└── .gitignore
```

## ⚙️ Setup Instructions

### 1. Backend (Flask)

1. Navigate to the `ml-service/` directory:
   ```bash
   cd ml-service
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate     # Windows
   ```

3. Install required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask server:
   ```bash
   python main.py
   ```
   By default, the API will run on `http://localhost:5000`.

### 2. Frontend (Next.js)

1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the Next.js development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`.

---

## 🔗 API Endpoints (Flask Backend)

| Method | Endpoint         | Description                   |
|:------:|:----------------- |:------------------------------|
| POST   | `/predict`         | Accepts user input JSON and returns the predicted career path |

Example JSON request:
```json
{
  "answers": {
    "willingness_to_learn": 1,
    "interest_visual_elements": 0,
    "interest_user_behavior": 1,
    "math_background": 1,
    "interest_working_with_data": 1,
    "interest_data_analysis": 1,
    "interest_data_insights": 1,
    "interest_ml_algorithms": 1,
    "interest_server_side": 0,
    "interest_innovation": 1,
    "interest_mobile_apps": 0,
    "concern_digital_security": 0,
    "interest_security_concepts": 0,
    "interest_design_thinking": 0,
    "interest_web": 0
  }
}
```

Example JSON response:
```json
{
  "predicted_career": "Data Scientist",
  "probabilities": {
    "Backend Developer": 5.32,
    "Cyber Security Engineer": 7.45,
    "Data Scientist": 68.21,
    "Frontend Developer": 4.15,
    "ML Engineer": 10.72,
    "Mobile App Developer": 2.05,
    "UI/UX Designer": 2.1
  }
}
```

---

## 📈 Model Performance

- Decision Tree Accuracy: 85.87%
- Random Forest Accuracy: 86.16%
- XGBoost Accuracy: 86.05%

Random Forest was selected as the best-performing model based on overall evaluation metrics, including macro precision, recall, and F1-score.

## 🚧 Limitations and Future Work

Although the models demonstrate strong performance, the current dataset may not fully capture the diversity of tech career paths, and dynamic industry trends are not considered. Future improvements will focus on expanding the dataset, incorporating real-time labor market data, refining the feature set, and deploying the model as part of an interactive, user-centric platform with continuous learning capabilities.

## 📜 License

This project is licensed under the [MIT License](LICENSE).
