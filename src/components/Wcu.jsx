"use client"

import { useState } from "react"
import "../styles/Wcu.css"

const Wcu = () => {
  const [activeCard, setActiveCard] = useState(null)

  const stats = [
    {
      number: "12+",
      label: "Years of Excellence",
      icon: "🏆",
    },
    {
      number: "100+",
      label: "Global Clients",
      icon: "🌍",
    },
    {
      number: "8M+",
      label: "Products Delivered",
      icon: "📦",
    },
    {
      number: "100%",
      label: "Quality Assured",
      icon: "✨",
    },
  ]

  const features = [
    {
      id: 1,
      title: "Innovative Approach",
      description: "Pushing boundaries with cutting-edge denim technology",
      gradient: "innovative",
    },
    {
      id: 2,
      title: "Sustainable Future",
      description: "Eco-friendly practices for a better tomorrow",
      gradient: "sustainable",
    },
    {
      id: 3,
      title: "Global Network",
      description: "Connected worldwide, delivering excellence",
      gradient: "global",
    },
    {
      id: 4,
      title: "Customer Success",
      description: "Your satisfaction is our priority",
      gradient: "success",
    },
  ]

  const milestones = [
    { year: "2015", achievement: "Founded with a Vision" },
    { year: "2017", achievement: "Global Expansion" },
    { year: "2018", achievement: "Factory Expansion" },
    { year: "2023", achievement: "Sustainability Initiative" },
    { year: "2024", achievement: "Industry Leader" },
  ]

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/8801732641352", "_blank")
  }

  return (
    <section className="wcu-modern">
      <div className="floating-bubbles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              "--delay": `${i * 1.5}s`,
              "--size": `${Math.random() * 60 + 20}px`,
              "--left": `${Math.random() * 100}%`,
              "--duration": `${Math.random() * 5 + 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="wcu-container">
        <div className="wcu-header-modern">
          <div className="title-box">
            <h2 className="modern-title">Why Choose</h2>
            <div className="highlight-box">
              <span className="highlight">AL KARIM DRESSES</span>
              <div className="floating-elements">
                <span className="floating-dot"></span>
                <span className="floating-dot"></span>
                <span className="floating-dot"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
              <div className="stat-backdrop"></div>
            </div>
          ))}
        </div>

        <div className="features-modern">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`feature-card-modern ${feature.gradient} ${activeCard === feature.id ? "active" : ""}`}
              onMouseEnter={() => setActiveCard(feature.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="card-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <div className="card-backdrop"></div>
            </div>
          ))}
        </div>

        <div className="timeline-section">
          <div className="timeline-header">
            <h3>Our Journey</h3>
            <p>Growing stronger with each milestone</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="year">{milestone.year}</span>
                  <p>{milestone.achievement}</p>
                </div>
              </div>
            ))}
            <div className="timeline-line"></div>
          </div>
        </div>

        <div className="contact-bubble">
          <div className="bubble-content">
            <h3>Ready to Transform Your Ideas?</h3>
            <p>Let's create something extraordinary together</p>
            <button className="modern-button" onClick={handleWhatsAppClick}>
              Contact Us Today
              <span className="button-glow"></span>
            </button>
          </div>
          <div className="bubble-decoration">
            <div className="bubble-ring"></div>
            <div className="bubble-ring"></div>
            <div className="bubble-ring"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wcu

