from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from app.model import predict_delay

app = FastAPI(
    title="NavLogix",
    docs_url=None,
    redoc_url=None,
    openapi_url=None
)

@app.get("/api/predict")
def predict(
    traffic: float,
    cost: float,
    risk: float,
    lead_time: float,
    driver_score: float,
):
    delay = predict_delay(traffic, cost, risk, lead_time, driver_score)

    if delay > 0.7:
        level = "High Risk"
    elif delay > 0.4:
        level = "Moderate Risk"
    else:
        level = "Low Risk"

    return {
        "delay_probability": delay,
        "risk_level": level
    }

app.mount("/", StaticFiles(directory="frontend", html=True), name="frontend")
