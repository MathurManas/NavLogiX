import os
import requests
from dotenv import load_dotenv

load_dotenv()

WEATHER_API_KEY = os.getenv("WEATHER_API_KEY")
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"


def get_weather(city: str) -> dict:
    """Fetch current weather for a given city using OpenWeatherMap API."""
    if not WEATHER_API_KEY or WEATHER_API_KEY == "your_openweather_api_key_here":
        # Return mock data if no API key is set
        return {
            "temperature": 22.0,
            "condition": "Clear",
            "humidity": 60,
            "wind_speed": 5.0,
        }

    try:
        params = {
            "q": city,
            "appid": WEATHER_API_KEY,
            "units": "metric",
        }
        response = requests.get(BASE_URL, params=params, timeout=10)
        response.raise_for_status()
        data = response.json()

        return {
            "temperature": round(data["main"]["temp"], 1),
            "condition": data["weather"][0]["main"],
            "humidity": data["main"]["humidity"],
            "wind_speed": round(data["wind"]["speed"], 1),
        }
    except requests.RequestException as e:
        print(f"Weather API error: {e}")
        # Fallback to mock data on error
        return {
            "temperature": 22.0,
            "condition": "Unknown",
            "humidity": 60,
            "wind_speed": 5.0,
        }
