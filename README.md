# NavLogix — AI-Powered Logistics Intelligence Platform

> Predict delivery route risks before they happen. NavLogix combines machine learning, real-time weather intelligence, and driver analytics to help logistics teams make smarter decisions.

![NavLogix Platform](https://img.shields.io/badge/Status-Active%20Development-brightgreen) ![Next.js](https://img.shields.io/badge/Frontend-Next.js-black) ![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688) ![Python](https://img.shields.io/badge/ML-Scikit--learn-F7931E)

---

## What is NavLogix?

Logistics companies lose time and money due to unpredictable delivery conditions — weather disruptions, high-risk routes, and poor driver allocation. NavLogix solves this by providing a real-time intelligence layer that predicts route risk before dispatch.

**Core capabilities:**

- **Route Risk Prediction** — ML model classifies routes as Low / Medium / High risk based on weather, driver score, and distance
- **Weather Intelligence** — Live atmospheric data via Open-Meteo API influences every prediction
- **Driver Analytics** — Performance scoring, safety ratings, and on-time delivery trends
- **Interactive Route Visualization** — Map-based route display using Leaflet.js and OpenStreetMap
- **Operational Dashboard** — Charts and analytics for risk distribution, delivery trends, and driver performance

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14, React, Tailwind CSS |
| Backend | FastAPI, Python |
| Machine Learning | Scikit-learn, NumPy, Pandas |
| Maps | Leaflet.js, OpenStreetMap |
| Weather API | Open-Meteo (free, no key required) |
| Deployment | Vercel (frontend), Render (backend) |

---

## Project Structure

```
NavLogix/
├── backend/
│   ├── main.py              # FastAPI entry point
│   ├── requirements.txt
│   └── app/
│       ├── model.py         # ML prediction logic
│       ├── weather.py       # Open-Meteo API integration
│       └── model.pkl        # Trained Scikit-learn model
│
└── navlogix-frontend/
    ├── app/                 # Next.js app router
    ├── components/          # UI components
    │   ├── charts/          # Recharts analytics
    │   ├── maps/            # Leaflet route visualization
    │   └── dashboard/       # Operational dashboard
    └── context/             # Global state management
```

---

## Getting Started

### Prerequisites

- Python 3.10+
- Node.js 18+
- npm or yarn

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend runs at `http://localhost:8000`
Interactive API docs at `http://localhost:8000/docs`

### Frontend Setup

```bash
cd navlogix-frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:3000`

---

## API Reference

### `GET /api/predict`

Predict route risk based on destination weather and driver score.

| Parameter | Type | Description |
|---|---|---|
| `city` | string | Destination city for weather lookup |
| `driver_score` | float | Driver rating from 1–10 |
| `origin` | string | Origin location (for map display) |
| `destination` | string | Destination location (for map display) |

**Example Request:**
```
GET /api/predict?city=Delhi&driver_score=7&origin=Mumbai&destination=Delhi
```

**Example Response:**
```json
{
  "risk": "Medium",
  "driver_score": 7.0,
  "city": "Delhi",
  "weather": {
    "temperature": 34.2,
    "condition": "Clear",
    "humidity": 45,
    "wind_speed": 12.5
  },
  "tactical_advice": "Moderate caution advised. Monitor weather en route."
}
```

---

## ML Model

The risk prediction model is trained on logistics delivery data with the following features:

- Driver rating score
- Destination temperature
- Wind speed
- Humidity levels

Output: Risk category (`Low` / `Medium` / `High`) with confidence score

The model is built with Scikit-learn and serialized as `model.pkl` for fast inference.

---

## Roadmap

- [x] Clean backend architecture with FastAPI
- [x] ML risk prediction model
- [x] Weather API integration
- [x] Frontend UI with route input console
- [ ] Frontend ↔ Backend API connection
- [ ] Driver analytics dashboard
- [ ] Route visualization with Leaflet.js
- [ ] Deployment (Vercel + Render)

---

## Development Philosophy

NavLogix is built with a phase-by-phase approach — stability first, features second. Each phase is fully functional before the next begins. This ensures a clean, maintainable codebase rather than an overengineered prototype.

---

## Author

**Manas Mathur**
[GitHub](https://github.com/MathurManas) · [LinkedIn](https://www.linkedin.com/in/manas-mathur-007b81293/)

---

*NavLogix is an active portfolio project demonstrating full-stack development, ML integration, and real-world system design.*
