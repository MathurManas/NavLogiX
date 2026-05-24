import os
import json

MODEL_PATH = os.path.join(os.path.dirname(__file__), "..", "ml-model", "model_params.json")

def load_model():
    """Fallback simple logic simulating ML model to avoid scikit-learn freeze issues."""
    return {}

def predict_risk(driver_score: float, temperature: float, wind_speed: float = 10.0, humidity: float = 60.0) -> str:
    """Predict route risk using rule-based ML simulation."""
    risk_score = 0
    if driver_score < 4:
        risk_score += 3
    elif driver_score < 7:
        risk_score += 1

    if temperature < 0 or temperature > 40:
        risk_score += 3
    elif temperature < 5 or temperature > 35:
        risk_score += 1

    if wind_speed > 60:
        risk_score += 3
    elif wind_speed > 40:
        risk_score += 1

    if humidity > 90:
        risk_score += 1

    if risk_score >= 4:
        return "High"
    elif risk_score >= 2:
        return "Moderate"
    else:
        return "Low"

def get_tactical_advice(risk: str, driver_score: float):
    """Generate tactical recommendations based on risk and driver capabilities."""
    advice = {
        "preferred_route": "Direct Express Path",
        "driver_guidance": "Standard dispatch authorized.",
        "optimization": "Speed-optimized routing active."
    }

    if risk == "High":
        advice["preferred_route"] = "Climate-Shielded / Major Highway Only"
        advice["optimization"] = "Safety-weighted traversal (Estimated +20% arrival time)"
        if driver_score < 6:
            advice["driver_guidance"] = "CRITICAL: Require Senior/Lead driver for this route due to low performance-to-risk ratio."
        else:
            advice["driver_guidance"] = "Proceed with extreme caution. Mandatory check-ins every 2 hours."
    
    elif risk == "Moderate":
        advice["preferred_route"] = "Primary Logistics Arteries"
        advice["optimization"] = "Balanced safety and efficiency."
        if driver_score < 5:
            advice["driver_guidance"] = "Recommend safety briefing before departure."
        else:
            advice["driver_guidance"] = "Standard caution. Monitor weather telemetry."
    
    else: # Low risk
        if driver_score > 8:
            advice["driver_guidance"] = "Optimal conditions. Ideal for trainee pairing or express delivery."
        
    return advice

