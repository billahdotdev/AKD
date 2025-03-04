"use client"

import { useState } from "react"
import "../styles/Asked.css"

const Asked = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/8801732641352", "_blank")
  }

  const faqData = [
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer:
        "Our standard MOQ is 1,000 pieces per style. However, we can discuss flexibility based on your specific requirements and order value.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "We typically require a 30% deposit to begin production, with the remaining 70% due before shipment. We accept various payment methods including T/T, L/C, and other international payment options.",
    },
    {
      question: "What is your standard production lead time?",
      answer:
        "Our standard production lead time is 45-60 days after order confirmation and deposit receipt. This may vary based on order quantity and complexity.",
    },
    {
      question: "Do you provide samples before production?",
      answer:
        "Yes, we provide pre-production samples for approval. Sample costs and timing will be discussed based on your requirements.",
    },
    {
      question: "What quality control measures do you have in place?",
      answer:
        "We have a comprehensive quality control system that includes incoming material inspection, in-process quality checks, and final inspection before shipment. We also welcome third-party inspections.",
    },
    {
      question: "Can you handle custom designs and specifications?",
      answer:
        "Yes, we specialize in custom manufacturing. Our experienced team can work with your designs and specifications to create exactly what you need.",
    },
    {
      question: "What types of denim products do you manufacture?",
      answer:
        "We manufacture a wide range of denim products including jeans, jackets, shirts, and various types of denim fabrics. We can also develop custom products based on your requirements.",
    },
    {
      question: "Do you offer washing and finishing services?",
      answer:
        "Yes, we offer comprehensive washing and finishing services including stone wash, acid wash, enzyme wash, bleaching, and various other special effects.",
    },
   
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">
          Frequently Asked Questions
          <span className="faq-subtitle">Everything you need to know about our services</span>
        </h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                {item.question}
                <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* New Contact Card */}
        <div className="contact-card">
          <div className="card-content">
            <h3>Didn't get your answer?</h3>
            <button className="whatsapp-button" onClick={handleWhatsAppClick}>
              <span className="button-icon">💬</span>
              Chat with us
              <span className="button-shine"></span>
            </button>
          </div>
          <div className="card-decoration">
            <div className="decoration-dot dot1"></div>
            <div className="decoration-dot dot2"></div>
            <div className="decoration-dot dot3"></div>
          </div>
        </div>
      </div>

      <div className="decoration-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </div>
  )
}

export default Asked

