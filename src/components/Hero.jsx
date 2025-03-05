"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import bgImage from "../assets/hero-bg.jpg"
import "../styles/Hero.module.css"

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-overlay"></div>
      <div className={`hero-content ${isLoaded ? "loaded" : ""}`}>
        <div className="decorative-element left"></div>
        <div className="decorative-element right"></div>

        <h1 className="hero-title">
          Every Stitch Tells a Story
          <span className="hero-subtitle">Bangladesh's Denim & Knitwear Artisans.</span>
        </h1>

        <div className="button-wrapper">
          <Link to="/products" className="hero-button">
            Explore Our Creations
            <span className="button-decoration">✨</span>
          </Link>
        </div>

        <div className="floating-elements">
          <div className="floating-circle c1"></div>
          <div className="floating-circle c2"></div>
          <div className="floating-circle c3"></div>
          <div className="floating-thread t1"></div>
          <div className="floating-thread t2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

