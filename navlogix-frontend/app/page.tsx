"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import AuthScreen from "@/components/AuthScreen";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const { user, loading: authLoading } = useAuth();

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [driverScore, setDriverScore] = useState<number>(5);
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  } as const;

  const handleAnalyze = async () => {
    if (!origin || !destination) {
      setError("Please enter both origin and destination capabilities.");
      return;
    }
    
    setError("");
    setLoading(true);
    setResult(null);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const params = new URLSearchParams({
        city: destination,
        driver_score: driverScore.toString(),
        origin: origin,
        destination: destination,
      });

      const response = await fetch(`${baseUrl}/api/predict?${params}`);
      if (!response.ok) {
        throw new Error("Backend connection failed. Please ensure the FastAPI server is running.");
      }
      
      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || "An error occurred fetching the prediction data.");
    } finally {
      setLoading(false);
    }
  };

  const getMapUrl = (origin: string, destination: string) => {
    if (!origin || !destination) return undefined;
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
    const encodedOrigin = encodeURIComponent(origin);
    const encodedDest = encodeURIComponent(destination);
    
    if (key) {
      return `https://www.google.com/maps/embed/v1/directions?key=${key}&origin=${encodedOrigin}&destination=${encodedDest}`;
    }
    // Fallback: search query with directions markers
    return `https://www.google.com/maps?q=${encodedOrigin} to ${encodedDest}&output=embed`;
  };

  const riskProps = {
    High: {
      title: "High Risk Route",
      icon: "🛑",
      message: "This route indicates a higher probability of delays or safety issues based on current telemetry and environment data."
    },
    Moderate: {
      title: "Moderate Risk Route",
      icon: "⚠️",
      message: "Standard caution advised. Certain environmental or driver parameters indicate potential friction."
    },
    Low: {
      title: "Optimal Route",
      icon: "✅",
      message: "This route meets all optimization criteria. Environmental and operational telemetry are nominal."
    }
  };

  if (authLoading) {
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'var(--bg-primary)' }}><div className="spinner blue" style={{borderWidth:'4px'}}></div></div>;
  }

  if (!user) {
    return (
      <div className="app-wrapper">
        <Header isTransparent />
        <AuthScreen />
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <Header />

      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '64px', alignItems: 'center' }}>
          <motion.div 
            className="hero-content"
            {...fadeInUp}
          >
            <h1 className="hero-title">Predictive Logistics Routing and Risk Intelligence</h1>
            <p className="hero-subtitle">Optimize your supply chain safety with machine learning powered real-time telemetry and atmospheric analytics, fully integrated with Google Maps.</p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="btn btn-primary" onClick={() => document.getElementById('analyze-dashboard')?.scrollIntoView({ behavior: 'smooth' })}>Get Started</button>
              <Link href="/features" className="btn" style={{ background: 'white', border: '1px solid var(--border)' }}>View Features</Link>
            </div>
          </motion.div>
          <motion.div 
            className="img-card" 
            style={{ height: '400px' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img src="/images/hero.png" alt="Logistics Mosaic" className="img-fluid" style={{ height: '100%', objectFit: 'cover' }} />
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="container" 
        style={{ padding: '80px 0' }}
        {...fadeInUp}
      >
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Service Tiers Tailored for Your Scale</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>Mix and match across 3 product categories to get the precision your supply chain requires every month.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { title: "Essentials", color: "var(--google-green)", desc: "Integrate the best of NavLogix into your applications with entry-level telemetry.", price: "FREE for first 100 calls" },
            { title: "Pro", color: "var(--google-blue)", desc: "Build more dynamic and differentiated experiences with enhanced risk logic.", price: "SCALABLE usage pricing", border: true },
            { title: "Enterprise", color: "var(--google-yellow)", desc: "Transform your business with maximum flexibility and control for large fleets.", price: "CUSTOM fleet solutions" }
          ].map((tier, idx) => (
            <motion.div 
              key={tier.title}
              className="panel" 
              style={{ textAlign: 'center', padding: '40px 24px', borderTop: tier.border ? `4px solid ${tier.color}` : 'none' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 style={{ color: tier.color, fontSize: '24px', marginBottom: '16px' }}>{tier.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>{tier.desc}</p>
              <div style={{ fontWeight: 600, fontSize: '14px' }}>{tier.price}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.main 
        className="dashboard" 
        id="analyze-dashboard"
        {...fadeInUp}
      >
        <div className="container">
          <h2 className="dashboard-title">
             <span style={{color: 'var(--google-blue)'}}>✦</span> Routing Analysis Console
          </h2>
          
          <div className="main-grid">
            {/* Left Column: Form Settings */}
            <div className="panel">
              <h3 style={{fontFamily: "'Google Sans', sans-serif", fontSize:'18px', fontWeight:500, marginBottom:'24px'}}>Route Input Parameters</h3>
              
              <div className="form-group">
                <label className="form-label">Origin Location</label>
                <div className="input-container">
                  <span className="input-icon">⚲</span>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Mumbai, India" 
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Destination Location</label>
                <div className="input-container">
                  <span className="input-icon">◎</span>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Delhi, India" 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group" style={{marginTop: '32px'}}>
                <div className="slider-val-box">
                  <label className="form-label" style={{margin:0}}>Driver Confidence Score</label>
                  <div className="slider-score">{driverScore} <span style={{fontSize:'14px', color:'var(--text-muted)'}}>/ 10</span></div>
                </div>
                <div className="slider-wrap">
                  <input 
                    type="range" 
                    min="1" max="10" step="0.1"
                    value={driverScore}
                    onChange={(e) => setDriverScore(parseFloat(e.target.value))}
                    className="slider"
                  />
                  <div style={{display:'flex', justifyContent:'space-between', marginTop:'8px', fontSize:'12px', color:'var(--text-muted)'}}>
                    <span>Novice</span>
                    <span>Experienced</span>
                  </div>
                </div>
              </div>

              {error && (
                <div className="error-msg">
                  <span style={{fontWeight:'bold'}}>!</span> {error}
                </div>
              )}

              <button 
                className="btn btn-primary btn-full" 
                onClick={handleAnalyze} 
                disabled={loading}
              >
                {loading ? (
                  <><div className="spinner"></div> Analyzing...</>
                ) : (
                  "Generate Route Analysis"
                )}
              </button>
            </div>

            {/* Right Column: Intelligent Output */}
            <div className="output-section">
              {!result && !loading && (
                <>
                  <div className="empty-box" style={{marginBottom: '0', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div className="empty-hero">
                      <img src="/images/risk_viz.png" alt="Risk Visualization Engine" />
                    </div>
                    <h3 className="empty-title">Awaiting Telemetry Input</h3>
                    <p className="empty-subtitle">Initialize the predictive engine by configuring route coordinates and driver performance metrics on the dashboard terminal.</p>
                    <div className="feature-chips">
                      <span className="chip">Atmospheric Analytics</span>
                      <span className="chip">Driver Fatigue Modeling</span>
                      <span className="chip">Route Optimization</span>
                      <span className="chip">Real-time Telemetry</span>
                    </div>
                  </div>
                  
                  <div className="map-container">
                    <div className="map-header">
                      <span style={{color: 'var(--google-blue)'}}>⚲</span> 
                      {origin && destination ? `${origin} to ${destination}` : "Global Network Active — Awaiting Coordinates"}
                    </div>
                    {origin && destination ? (
                      <iframe
                        className="map-iframe"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={getMapUrl(origin, destination)}
                      ></iframe>
                    ) : (
                      <div style={{width:'100%', height:'450px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', background:'#f8f9fa', color:'#5f6368', padding:'24px', textAlign:'center'}}>
                        <div style={{fontSize:'36px', marginBottom:'16px'}}>📍</div>
                        <h4 style={{fontFamily:"'Google Sans', sans-serif", fontSize:'18px', color:'#202124', marginBottom:'8px'}}>Interactive Map Preview</h4>
                        <p style={{maxWidth:'300px'}}>Enter origin and destination coordinates on the left to securely visualize the route.</p>
                      </div>
                    )}
                  </div>
                </>
              )}

              {loading && (
                <div className="empty-box" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight: '400px'}}>
                  <div className="spinner blue" style={{width:'48px', height:'48px', borderTopColor:'var(--google-blue)', borderWidth:'4px', marginBottom:'24px'}}></div>
                  <h3 className="empty-title">Synthesizing Data Points</h3>
                  <p className="empty-subtitle">Contacting OpenWeather API and resolving Google Maps waypoints while running risk simulation...</p>
                </div>
              )}

              {result && !loading && (
                <>
                  <div className={`risk-banner risk-${result.risk?.toLowerCase()}`}>
                    <div className="risk-icon">
                      {riskProps[result.risk as keyof typeof riskProps]?.icon}
                    </div>
                    <div className="risk-info">
                      <div className="risk-label">ML Risk Assessment</div>
                      <h3 className="risk-title">{riskProps[result.risk as keyof typeof riskProps]?.title}</h3>
                      <p className="risk-desc">{riskProps[result.risk as keyof typeof riskProps]?.message}</p>
                    </div>
                  </div>

                  {/* Tactical Advisory Section */}
                  <div className="advice-container">
                    <div className="advice-card">
                      <div className="advice-header">
                        <span>🛣️</span> Preferred Route
                      </div>
                      <div className="advice-value">{result.tactical_advice?.preferred_route}</div>
                    </div>
                    <div className="advice-card">
                      <div className="advice-header" style={{color: 'var(--google-green)'}}>
                        <span>⚡</span> Optimization
                      </div>
                      <div className="advice-value">{result.tactical_advice?.optimization}</div>
                    </div>
                    <div className="advice-card" style={{gridColumn: '1 / -1', borderLeft: '4px solid var(--google-blue)'}}>
                      <div className="advice-header">
                        <span>👤</span> Driver Selection Guidance
                      </div>
                      <div className="advice-value" style={{fontSize: '14px', fontWeight: 400}}>
                        {result.tactical_advice?.driver_guidance}
                      </div>
                    </div>
                  </div>

                  <div className="weather-cards">
                    <div className="weather-card">
                      <div className="weather-lbl">Temp</div>
                      <div className="weather-val">{result.weather?.temperature}°C</div>
                      <div style={{fontSize:'18px'}}>🌡️</div>
                    </div>
                    <div className="weather-card">
                      <div className="weather-lbl">Atmosphere</div>
                      <div className="weather-val" style={{fontSize:'16px'}}>{result.weather?.condition}</div>
                      <div style={{fontSize:'18px'}}>🌤️</div>
                    </div>
                    <div className="weather-card">
                      <div className="weather-lbl">Wind Speed</div>
                      <div className="weather-val">{result.weather?.wind_speed}<span style={{fontSize:'12px'}}> km/h</span></div>
                      <div style={{fontSize:'18px'}}>💨</div>
                    </div>
                  </div>

                  <div className="map-container">
                    <div className="map-header">
                      <span style={{color: 'var(--google-blue)'}}>⚲</span> 
                      {origin} To {destination}
                    </div>
                    <iframe
                      className="map-iframe"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={getMapUrl(origin, destination)}
                    ></iframe>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </motion.main>
      
      <Footer />
    </div>
  );
}
