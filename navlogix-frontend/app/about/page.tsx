"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import AuthScreen from "@/components/AuthScreen";

export default function About() {
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

      <section className="hero" style={{ padding: '60px 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div className="hero-content">
            <h1 className="hero-title" style={{ fontSize: '40px' }}>Our Mission: Safe & Smart Logistics</h1>
            <p className="hero-subtitle">NavLogix is dedicated to bringing cutting-edge predictive intelligence to the global supply chain, ensuring every delivery is backed by data-driven safety assessments.</p>
          </div>
          <div className="img-card" style={{ height: '350px' }}>
            <img src="/images/mission.png" alt="Mission Logistics" className="img-fluid" style={{ height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <main className="dashboard" style={{ padding: '60px 0 100px' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', marginBottom: '80px' }}>
              <div>
                <h2 style={{ fontFamily: "'Google Sans', sans-serif", fontSize: '32px', fontWeight: 500, marginBottom: '24px', color: 'var(--text-primary)' }}>
                  The NavLogix Story
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '20px' }}>
                  Founded in 2024, NavLogix emerged from a simple observation: while logistics technology has advanced rapidly, safety assessment remains largely reactive.
                </p>
                <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  Our team of machine learning engineers and logistics veterans joined forces to build a platform that anticipates risks before they happen, combining environmental telemetry with real-time operator analytics.
                </p>
              </div>
              <div style={{ background: 'var(--google-blue-light)', borderRadius: '24px', padding: '40px', textAlign: 'center' }}>
                <div style={{ fontSize: '64px', marginBottom: '16px' }}>🛡️</div>
                <div style={{ fontFamily: "'Google Sans', sans-serif", fontSize: '24px', fontWeight: 500, color: 'var(--google-blue)' }}>Safety First</div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>Predictive intelligence at scale.</p>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Google Sans', sans-serif", fontSize: '32px', fontWeight: 500, textAlign: 'center', marginBottom: '48px' }}>
              Our Core Values
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              <div className="panel" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>🚀</div>
                <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '12px' }}>Innovation</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Leveraging modern ML architectures to solve age-old logistical challenges.
                </p>
              </div>
              <div className="panel" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>🤝</div>
                <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '12px' }}>Integrity</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Transparency in our data models and ethical handling of driver analytics.
                </p>
              </div>
              <div className="panel" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>📊</div>
                <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '12px' }}>Reliability</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Consistent, real-time telemetry you can trust in critical situations.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '100px', padding: '60px', background: 'var(--bg-secondary)', borderRadius: '32px', textAlign: 'center', border: '1px solid var(--border)' }}>
              <h2 style={{ fontFamily: "'Google Sans', sans-serif", fontSize: '28px', fontWeight: 500, marginBottom: '16px' }}>Join Our Journey</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 32px', fontSize: '16px' }}>
                We're always looking for passionate people to help us redefine the future of logistics safety.
              </p>
              <button className="btn btn-primary" style={{ padding: '0 40px' }}>Contact Us</button>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
