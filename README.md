![Python](https://img.shields.io/badge/python-3.8%2B-blue.svg)
![Build Passing](https://img.shields.io/badge/build-passing-brightgreen.svg)
![License](https://img.shields.io/badge/license-proprietary-lightgrey.svg)

---

# Breast Cancer Prediction

A comprehensive, cross-platform web application utilizing state-of-the-art machine learning techniques to predict breast cancer malignancy based on diagnostic input data. This project features a Python-based backend for model inference and a modern JavaScript frontend for user interaction, packaged together for a seamless predictive experience.

---

## Table of Contents

- [Demo](#demo)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [License](#license)

---

## Demo

The Breast Cancer Prediction app allows users to input diagnostic measurements and receive an instant prediction indicating whether the tumor is benign or malignant, along with a confidence score and risk factor explanations.

<img width="1646" height="880" alt="Screenshot 2025-07-15 162859" src="https://github.com/user-attachments/assets/2aef0d5c-ebf0-47fb-8034-91f545e5ab7a" />
<img width="1642" height="834" alt="Screenshot 2025-07-15 162823" src="https://github.com/user-attachments/assets/add3a88a-fc97-47ea-a530-f1d3a1e65aae" />

---

## Project Structure

```
Breast-Cancer-Prediction/
├── backend/
│   ├── app.py                          # Flask API serving the ML model
│   ├── scaler.pkl                      # Scikit-learn scaler for data normalization
│   ├── lda.pkl                         # Linear Discriminant Analysis transformer
│   └── logistic_regression_best.pkl    # Trained logistic regression model
│
├── frontend/
│   ├── public/                         # Static files
│   ├── src/                            # React.js source code (components, styles, logic)
│   └── package.json                    # Frontend dependencies
│
├── dataset/                            # Data used for model training and testing
│
├── .gitignore
```

---

## Technology Stack

- **Backend:**  
  - Python 3.x  
  - Flask (RESTful API development)  
  - Flask-CORS (enabling cross-origin requests)  
  - scikit-learn (machine learning model serialization and inference)  
  - pickle (model persistence)

- **Frontend:**  
  - JavaScript (ES6+)  
  - React.js (UI framework)  
  - HTML5, CSS3 (styling and markup)  

- **Other:**  
  - Jupyter Notebook (exploratory data analysis and model development)
  - GitHub Actions (optional: CI/CD pipeline)

---

## Features

- **Accurate Predictions:** Utilizes a pre-trained logistic regression model with LDA dimensionality reduction for robust prediction.
- **Confidence Score:** Each prediction is accompanied by a probability/confidence metric.
- **Risk Factor Explanation:** Highlights significant contributing features for transparency.
- **Actionable Recommendation:** Provides next-step suggestions based on prediction results.
- **Cross-Origin Ready:** API is CORS-enabled for easy integration with various frontends.
- **Modern UI:** Intuitive React-based interface for seamless data entry and result visualization.

---

## Setup Instructions

### Backend

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rasika1205/Breast-Cancer-Prediction.git
   cd Breast-Cancer-Prediction/backend
   ```
2. **Install dependencies:**
   ```
   pip install -r requirements.txt
   ```
3. **Install dependencies:**
   ```bash
   pip install flask flask-cors scikit-learn numpy
   ```

4. **Ensure model files are present:**  
   Place `scaler.pkl`, `lda.pkl`, and `logistic_regression_best.pkl` in the `backend/` directory.

5. **Run the Flask server:**
   ```bash
   python app.py
   ```

### Frontend

1. **Install dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

2. **Start the frontend app:**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Usage

- Access the frontend and input patient diagnostic features as prompted.
- Alternatively, make a POST request to `/predict` on the backend with a JSON body containing all required features.
- The API responds with a JSON object containing prediction, confidence score, risk factors, and recommendations.

---

## 🚀 Future Enhancements

Here are some ideas for future improvements to enhance this project further:

* **🧠 Add More Models:**
  Integrate additional classifiers (e.g., Random Forest, SVM, XGBoost) and allow users to choose the model or compare results.

* **📊 Model Performance Dashboard:**
  Display model evaluation metrics (accuracy, precision, recall, confusion matrix, ROC curve) interactively in the frontend.

* **📈 Real-Time Visualization:**
  Visualize how each feature contributes to the prediction with SHAP or LIME interpretability tools.

* **💾 Save Patient Reports:**
  Add a database (like MongoDB or PostgreSQL) to store historical predictions, with timestamps and patient IDs.

* **🔐 User Authentication:**
  Secure the app with login/signup functionality so users can track their history and results.

* **🌐 API Hosting:**
  Host the backend on a cloud platform (e.g., Render, Railway, or AWS) for public usage without needing to clone locally.

* **📱 Mobile Responsiveness:**
  Optimize the frontend for mobile view to make it accessible on smartphones and tablets.

* **🗣️ Multi-language Support:**
  Add internationalization (i18n) to support non-English-speaking users.

* **📤 File Upload Option:**
  Extend the UI to accept CSV uploads instead of manual input.

---

## License

This project is **proprietary** and protected by copyright © 2025 Rasika Gautam.

You are welcome to view the code for educational or evaluation purposes (e.g., portfolio review by recruiters).  
However, you may **not copy, modify, redistribute, or claim this project as your own** under any circumstances — including in interviews or job applications — without written permission.

---

## 🧑‍💻 Author

**Rasika Gautam**
*Data Science & AI Enthusiast* | B.Tech MAC, NSUT
[GitHub](https://github.com/rasika1205)
