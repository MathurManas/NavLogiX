import os
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from app.weather import get_weather
from app.model import predict_risk, get_tactical_advice

load_dotenv()

app = FastAPI(
    title="NavLogix API",
    description="Predictive Logistics Routing System — Backend",
    version="1.0.0",
)

# --- CORS ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "NavLogix API is running 🚀"}

@app.get("/api/predict")
def predict(
    city: str = Query(..., description="Destination city for weather lookup"),
    driver_score: float = Query(..., ge=1, le=10, description="Driver rating from 1 to 10"),
    origin: str = Query(default="", description="Origin location (used by frontend for map)"),
    destination: str = Query(default="", description="Destination location (used by frontend for map)"),
):
    """
    Predict route risk based on city weather and driver score.
    Returns risk level, weather details, and tactical recommendations.
    """
    # 1. Fetch weather for the destination city
    weather = get_weather(city)

    # 2. Run ML prediction
    risk = predict_risk(
        driver_score=driver_score,
        temperature=weather["temperature"],
        wind_speed=weather.get("wind_speed", 10.0),
        humidity=weather.get("humidity", 60.0),
    )

    # 3. Get tactical advice
    advice = get_tactical_advice(risk, driver_score)

    return {
        "risk": risk,
        "driver_score": driver_score,
        "city": city,
        "weather": {
            "temperature": weather["temperature"],
            "condition": weather["condition"],
            "humidity": weather.get("humidity", 60),
            "wind_speed": weather.get("wind_speed", 10.0),
        },
        "tactical_advice": advice
    }

