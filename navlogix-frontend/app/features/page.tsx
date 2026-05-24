"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import AuthScreen from "@/components/AuthScreen";

export default function Features() {
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

      <section className="hero" style={{ padding: '80px 0 60px', background: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container hero-content" style={{ margin: '0 auto' }}>
          <h1 className="hero-title">Platform Capabilities</h1>
          <p className="hero-subtitle" style={{ margin: '0 auto 32px' }}>Explore the advanced machine learning and geospatial features that power the NavLogix predictive logistics engine.</p>
        </div>
      </section>

      <main className="dashboard" style={{ padding: '80px 0' }}>
        <div className="container">
          
          {/* Feature 1: Real-time Routing */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '120px' }}>
            <div className="img-card" style={{ height: '400px' }}>
              <img src="/images/routing.png" alt="Real-time Routing" className="img-fluid" style={{ height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ color: 'var(--google-blue)', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Dynamic Geospatial Intelligence</div>
              <h2 style={{ fontFamily: "'Google Sans', sans-serif", fontSize: '36px', fontWeight: 500, marginBottom: '24px' }}>Real-time Route Optimization</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '24px' }}>
                NavLogix calculates the most efficient paths by analyzing millions of data points across the global road network. Our engine doesn't just find the shortest path; it finds the safest path.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center', fontSize: '15px' }}>
                  <span style={{ color: 'var(--google-green)', fontWeight: 'bold' }}>✓</span> Multi-waypoint sequencing
                </li>
                <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center', fontSize: '15px' }}>
                  <span style={{ color: 'var(--google-green)', fontWeight: 'bold' }}>✓</span> Traffic-aware time estimation
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '15px' }}>
                  <span style={{ color: 'var(--google-green)', fontWeight: 'bold' }}>✓</span> Infrastructure constraint detection
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2: Weather Analytics */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '120px' }}>
            <div>
              <div style={{ color: 'var(--google-red)', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Atmospheric Integration</div>
              <h2 style={{ fontFamily: "'Google Sans', sans-serif", fontSize: '36px', fontWeight: 500, marginBottom: '24px' }}>Precision Weather Forecasting</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '24px' }}>
                Integrated directly with global meteorological APIs, NavLogix overlays real-time weather alerts, precipitation intensity, and wind speed data directly onto your logistics routes.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center', fontSize: '15px' }}>
                  <span style={{ color: 'var(--google-blue)', fontWeight: 'bold' }}>✓</span> Severe weather hazard alerts
                </li>
                <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center', fontSize: '15px' }}>
                  <span style={{ color: 'var(--google-blue)', fontWeight: 'bold' }}>✓</span> Historical pattern analysis
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '15px' }}>
                  <span style={{ color: 'var(--google-blue)', fontWeight: 'bold' }}>✓</span> Visibility and friction coefficient modeling
                </li>
              </ul>
            </div>
            <div className="img-card" style={{ height: '400px' }}>
              <img src="/images/weather.png" alt="Weather Integration" className="img-fluid" style={{ height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* Feature 3: Driver Performance */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div className="img-card" style={{ height: '400px' }}>
              <img src="/images/analytics.png" alt="Driver Performance" className="img-fluid" style={{ height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ color: 'var(--google-yellow)', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Operator Insight</div>
              <h2 style={{ fontFamily: "'Google Sans', sans-serif", fontSize: '36px', fontWeight: 500, marginBottom: '24px' }}>Advanced Driver Analytics</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '24px' }}>
                Leverage behavior-based safety metrics to assign the right routes to the right drivers. Our telemetry engine tracks braking, acceleration, and fatigue patterns to provide a normalized safety score.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center', fontSize: '15px' }}>
                  <span style={{ color: 'var(--google-yellow)', fontWeight: 'bold' }}>✓</span> Real-time behavior monitoring
                </li>
                <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center', fontSize: '15px' }}>
                  <span style={{ color: 'var(--google-yellow)', fontWeight: 'bold' }}>✓</span> Risk-adjusted driver profiles
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '15px' }}>
                  <span style={{ color: 'var(--google-yellow)', fontWeight: 'bold' }}>✓</span> Automated safety coaching reports
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
