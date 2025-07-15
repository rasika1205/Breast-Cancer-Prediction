from flask import Flask, request, jsonify
import numpy as np
import pickle
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load saved artifacts
with open("scaler.pkl", "rb") as f:
    scaler = pickle.load(f)

with open("lda.pkl", "rb") as f:
    lda = pickle.load(f)

with open("logistic_regression_best.pkl", "rb") as f:
    model = pickle.load(f)

@app.route("/")
def index():
    return "✅ Breast Cancer Prediction API is running."

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    # Extract all expected 30 features
    expected_features = [
        "radius_mean", "texture_mean", "perimeter_mean", "area_mean", "smoothness_mean",
        "compactness_mean", "concavity_mean", "concave_points_mean", "symmetry_mean", "fractal_dimension_mean",
        "radius_se", "texture_se", "perimeter_se", "area_se", "smoothness_se",
        "compactness_se", "concavity_se", "concave_points_se", "symmetry_se", "fractal_dimension_se",
        "radius_worst", "texture_worst", "perimeter_worst", "area_worst", "smoothness_worst",
        "compactness_worst", "concavity_worst", "concave_points_worst", "symmetry_worst", "fractal_dimension_worst"
    ]
    input_data = [data.get(f, 0) for f in expected_features]
    input_array = np.array(input_data).reshape(1, -1)
    input_array = scaler.transform(input_array)
    input_array = lda.transform(input_array)
    prediction = model.predict(input_array)[0]
    probability = model.predict_proba(input_array)[0].max()

    result = {
        "prediction": "Malignant" if prediction == 1 else "Benign",
        "confidence": float(probability),
        "risk_factors": [
            "High radius measurement" if data.get("radius_mean",0) > 15 else "Normal radius",
            "Large area" if data.get("area_mean",0) > 700 else "Normal area",
            "Irregular texture" if data.get("texture_mean",0) > 20 else "Regular texture"
        ],
        "recommendation": "Immediate consultation recommended" if prediction == 1 else "Regular monitoring advised"
    }

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
