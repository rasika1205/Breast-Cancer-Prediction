"use client"

import { useState } from "react"
import "./App.css"
import SplitText from "./SplitText";
import Threads from './Threads';
import BlurText from "./BlurText";
import ShinyText from './ShinyText';
import GlareHover from './GlareHover'
const BreastCancerPredictor = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  

  // const handleAnimationComplete = () => {
  //   console.log('Animation completed!');
  // };
  const formFields = [
    // Mean values
    { name: "radius_mean", label: "Radius (Mean)", placeholder: "14.13" },
    { name: "texture_mean", label: "Texture (Mean)", placeholder: "19.26" },
    { name: "perimeter_mean", label: "Perimeter (Mean)", placeholder: "91.97" },
    { name: "area_mean", label: "Area (Mean)", placeholder: "654.89" },
    { name: "smoothness_mean", label: "Smoothness (Mean)", placeholder: "0.096" },
    { name: "compactness_mean", label: "Compactness (Mean)", placeholder: "0.104" },
    { name: "concavity_mean", label: "Concavity (Mean)", placeholder: "0.089" },
    { name: "concave_points_mean", label: "Concave Points (Mean)", placeholder: "0.048" },
    { name: "symmetry_mean", label: "Symmetry (Mean)", placeholder: "0.181" },
    { name: "fractal_dimension_mean", label: "Fractal Dimension (Mean)", placeholder: "0.063" },

    // Standard error values
    { name: "radius_se", label: "Radius (SE)", placeholder: "0.406" },
    { name: "texture_se", label: "Texture (SE)", placeholder: "1.216" },
    { name: "perimeter_se", label: "Perimeter (SE)", placeholder: "2.866" },
    { name: "area_se", label: "Area (SE)", placeholder: "40.34" },
    { name: "smoothness_se", label: "Smoothness (SE)", placeholder: "0.007" },
    { name: "compactness_se", label: "Compactness (SE)", placeholder: "0.025" },
    { name: "concavity_se", label: "Concavity (SE)", placeholder: "0.032" },
    { name: "concave_points_se", label: "Concave Points (SE)", placeholder: "0.012" },
    { name: "symmetry_se", label: "Symmetry (SE)", placeholder: "0.020" },
    { name: "fractal_dimension_se", label: "Fractal Dimension (SE)", placeholder: "0.004" },

    // Worst values
    { name: "radius_worst", label: "Radius (Worst)", placeholder: "16.27" },
    { name: "texture_worst", label: "Texture (Worst)", placeholder: "25.68" },
    { name: "perimeter_worst", label: "Perimeter (Worst)", placeholder: "108.89" },
    { name: "area_worst", label: "Area (Worst)", placeholder: "858.10" },
    { name: "smoothness_worst", label: "Smoothness (Worst)", placeholder: "0.132" },
    { name: "compactness_worst", label: "Compactness (Worst)", placeholder: "0.254" },
    { name: "concavity_worst", label: "Concavity (Worst)", placeholder: "0.273" },
    { name: "concave_points_worst", label: "Concave Points (Worst)", placeholder: "0.114" },
    { name: "symmetry_worst", label: "Symmetry (Worst)", placeholder: "0.290" },
    { name: "fractal_dimension_worst", label: "Fractal Dimension (Worst)", placeholder: "0.084" },
  ];

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: Number.parseFloat(value) || 0,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Prediction request failed");
      }

      const data = await response.json();
      setResult(data);

    } catch (error) {
      console.error("Error submitting prediction:", error);
      alert("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  const resetForm = () => {
    setShowForm(false);
    setFormData({});
    setResult(null);
  };

  return (
    <div className="app">
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />

        <div className="container">
          {!showForm && !result && (
            <div className="main-content">
              <div className="content-left">
                <div className="header-section">
                  <div className="title-container">
                    <span className="heart-icon">❤️</span>
                    <SplitText
                      text="Breast Cancer Predictor"
                      className="text-2xl font-semibold text-center"
                      delay={100}
                      duration={0.6}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                      onLetterAnimationComplete={handleAnimationComplete}
                    />
                  </div>
                  <div className="title-line"></div>
                  {/* <h2 className="subtitle">AI-Powered Early Detection System</h2> */}
                  <p style={{ fontSize: '30px', fontWeight: 600 ,textShadow: '0 2px 10px rgba(139, 92, 246, 0.3)', background: 'linear-gradient(90deg, #ec4899, #8b5cf6)', WebkitBackgroundClip: 'text', color: 'pink'}}>
                  <BlurText
                  text="AI-Powered Early Detection System"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-6xl font-semibold text-white mb-8"
                  
                /></p>
                  <div className="subtitle-line"></div>
                </div>

                <div className="description-section">
                  <p className="description">
                    Our advanced machine learning model analyzes cellular characteristics to provide preliminary breast
                    cancer risk assessment. This tool assists healthcare professionals in early detection and diagnosis.
                  </p>
                  <div className="desc-line"></div>

                  <div className="features">
                    <div className="feature">
                      <span className="feature-icon">📊</span>
                      {/* <span>Real-time analysis of 30 cellular features</span> */}
                      <ShinyText text="Real-time analysis of 30 cellular features" disabled={false} speed={3} className='custom-class' />
                    </div>
                    <div className="feature">
                      <span className="feature-icon">🛡️</span>
                      {/* <span>95%+ accuracy in clinical studies</span> */}
                      <ShinyText text="95%+ accuracy in clinical studies" disabled={false} speed={3} className='custom-class' />
                    </div>
                    <div className="feature">
                      <span className="feature-icon">💖</span>
                      {/* <span>Supporting early intervention</span> */}
                      <ShinyText text="Supporting early intervention" disabled={false} speed={3} className='custom-class' />
                    </div>
                  </div>

                  <div className="feature-line"></div>
                </div>
                  <div className="notice">
                    <h3 className="notice-title">Important Notice</h3>
                    <p className="notice-text">
                      This tool is for educational and research purposes only. Always consult with qualified healthcare
                      professionals for medical diagnosis and treatment decisions.
                    </p>
                  </div>
                

                <button onClick={() => setShowForm(true)} className="start-button">
                  <span>Start Analysis 📊</span>
                </button>
              </div>
            </div>
          )}

          {showForm && !result && (
            <div className="form-container">
              <div className="form-header">
                <h2 className="form-title">Medical Data Input</h2>
                <p className="form-subtitle">Please enter the cellular measurement values</p>
                <div className="form-title-line"></div>
              </div>

              <form onSubmit={handleSubmit} className="medical-form">
                <div className="form-grid">
                  {formFields.map((field) => (
                    <div key={field.name} className="form-field">
                      <label htmlFor={field.name} className="field-label">
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        type="number"
                        step="any"
                        placeholder={field.placeholder}
                        value={formData[field.name] ?? ""}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        className="field-input"
                      />
                    </div>
                  ))}
                </div>

                <div className="form-buttons">
                  <button type="submit" disabled={isSubmitting} className="analyze-button">
                    {isSubmitting ? "Analyzing..." : "Analyze"}
                  </button>
                  <button type="button" onClick={resetForm} className="cancel-button">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {result && (
            <div style={{ display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            width: '100%',
            padding: '2rem',
            boxSizing: 'border-box', }}>
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
              playOnce={false}
              style={{
              width: '100%',
              maxWidth: '600px',
            }}>
            <div className="result-container">
              
            
              <div className="result-card">
                <div className="result-header">
                  <h2 className={`result-title ${result.prediction === "Malignant" ? "malignant" : "benign"}`}>
                    Prediction Result
                  </h2>
                  <p className="result-subtitle">Analysis based on provided cellular measurements</p>
                </div>

                <div className="result-content">
                  <div className="prediction-badge">
                    <span className={`badge ${result.prediction === "Malignant" ? "badge-malignant" : "badge-benign"}`}>
                      {result.prediction}
                    </span>
                    <p className="confidence">Confidence: {(result.confidence * 100).toFixed(1)}%</p>
                  </div>

                  <div className="result-section">
                    <h4 className="section-title risk-factors">Risk Factors:</h4>
                    <ul className="factor-list">
                      {result.risk_factors.map((factor, index) => (
                        <li key={index} className="factor-item">
                          • {factor}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="result-section">
                    <h4 className="section-title recommendation">Recommendation:</h4>
                    <p className="recommendation-text">{result.recommendation}</p>
                  </div>

                  {/* <div className="result-section">
                    <h4 className="section-title input-data">Input Data (JSON):</h4>
                    <pre className="json-display">{JSON.stringify(formData, null, 2)}</pre>
                  </div>

                  <div className="result-section">
                    <h4 className="section-title result-data">Result Data (JSON):</h4>
                    <pre className="json-display">{JSON.stringify(result, null, 2)}</pre>
                  </div> */}

                  <button onClick={resetForm} className="new-analysis-button">
                    New Analysis
                  </button>
                </div>
              </div>
              
            </div>
            </GlareHover>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BreastCancerPredictor;
