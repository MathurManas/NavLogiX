"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import AuthScreen from "@/components/AuthScreen";

export default function Documentation() {
  const { user, loading: authLoading } = useAuth();

  if (authLoading) {
    return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'var(--bg-primary)' }}><div className="spinner blue" style={{ borderWidth: '4px' }}></div></div>;
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

      <section className="hero" style={{ padding: '60px 0 40px' }}>
        <div className="container hero-content">
          <h1 className="hero-title" style={{ fontSize: '40px' }}>Platform Documentation</h1>
          <p className="hero-subtitle">Comprehensive guide to the NavLogix Predictive Logistics Routing System.</p>
        </div>
      </section>

      <main className="dashboard" style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            <section style={{ marginBottom: '60px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontFamily: "'Google Sans', sans-serif", fontSize: '28px', fontWeight: 500, marginBottom: '20px', color: 'var(--google-blue)' }}>
                    Overview
                  </h2>
                  <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '20px' }}>
                    NavLogix is a sophisticated predictive logistics platform designed to enhance delivery safety and efficiency. By synthesizing real-time atmospheric telemetry with historical driver performance data, the system identifies potential risks before a journey begins.
                  </p>
                  <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    Every route generated is evaluated against live conditions, giving logistics operators high-confidence feedback for mission-critical decision making.
                  </p>
                </div>
                <div className="img-card" style={{ height: '300px' }}>
                  <img src="/images/risk_viz.png" alt="Risk Assessment Engine" className="img-fluid" style={{ height: '100%', objectFit: 'contain', padding: '20px' }} />
                </div>
              </div>
            </section>

            <section style={{ marginBottom: '60px' }}>
              <h2 style={{ fontFamily: "'Google Sans', sans-serif", fontSize: '28px', fontWeight: 500, marginBottom: '20px', color: 'var(--google-blue)' }}>
                Core Architecture
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div className="panel">
                  <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '12px' }}>FastAPI Backend</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                    High-performance asynchronous Python backend handling weather data fetching, ML prediction logic, and API orchestration.
                  </p>
                </div>
                <div className="panel">
                  <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '12px' }}>Next.js Frontend</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                    Modern React-based interface styled with Google's design language, providing real-time data visualization and interactive mapping.
                  </p>
                </div>
              </div>
            </section>

            <section style={{ marginBottom: '60px' }}>
              <h2 style={{ fontFamily: "'Google Sans', sans-serif", fontSize: '28px', fontWeight: 500, marginBottom: '20px', color: 'var(--google-blue)' }}>
                Predictive Risk Engine
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '20px' }}>
                The risk assessment is calculated through a multi-factor analysis:
              </p>
              <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '2' }}>
                <li><strong>Driver Confidence (1-10):</strong> Integrated assessment of driver experience and historical safety metrics.</li>
                <li><strong>Atmospheric Conditions:</strong> Real-time temperature, humidity, and wind speed data from the destination.</li>
                <li><strong>Route Complexity:</strong> Dynamic evaluation of the path between origin and destination via Google Maps.</li>
              </ul>
              
              <div style={{ marginTop: '30px', display: 'flex', gap: '16px' }}>
                <div className="risk-banner risk-high" style={{ padding: '16px', flex: 1, textAlign: 'center' }}>
                  <div style={{ fontWeight: 600 }}>High Risk</div>
                  <div style={{ fontSize: '12px', opacity: 0.8 }}>Extreme weather or inexperienced operator</div>
                </div>
                <div className="risk-banner risk-moderate" style={{ padding: '16px', flex: 1, textAlign: 'center' }}>
                  <div style={{ fontWeight: 600 }}>Moderate Risk</div>
                  <div style={{ fontSize: '12px', opacity: 0.8 }}>Mild weather variants or average scoring</div>
                </div>
                <div className="risk-banner risk-low" style={{ padding: '16px', flex: 1, textAlign: 'center' }}>
                  <div style={{ fontWeight: 600 }}>Optimal</div>
                  <div style={{ fontSize: '12px', opacity: 0.8 }}>Ideal conditions and certified operators</div>
                </div>
              </div>
            </section>

            <section>
              <h2 style={{ fontFamily: "'Google Sans', sans-serif", fontSize: '28px', fontWeight: 500, marginBottom: '20px', color: 'var(--google-blue)' }}>
                Third-Party Integrations
              </h2>
              <div className="panel" style={{ padding: '0' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead style={{ borderBottom: '1px solid var(--border)' }}>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '16px', fontSize: '14px' }}>Service</th>
                      <th style={{ textAlign: 'left', padding: '16px', fontSize: '14px' }}>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '16px', fontSize: '14px', fontWeight: 500 }}>Firebase</td>
                      <td style={{ padding: '16px', fontSize: '14px', color: 'var(--text-secondary)' }}>Authentication and User State Management</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '16px', fontSize: '14px', fontWeight: 500 }}>OpenWeather</td>
                      <td style={{ padding: '16px', fontSize: '14px', color: 'var(--text-secondary)' }}>Real-time destination climate telemetry</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '16px', fontSize: '14px', fontWeight: 500 }}>Google Maps</td>
                      <td style={{ padding: '16px', fontSize: '14px', color: 'var(--text-secondary)' }}>Route visualization and interactive mapping</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
