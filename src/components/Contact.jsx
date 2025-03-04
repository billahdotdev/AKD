"use client"

import { useState } from "react"
import "../styles/Contact.css"
import SocialMedia from './SocialMedia';
import Contact2 from './Contact2';



const Contact = () => {
  const [message, setMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const phoneNumber = "+8801732641352" 
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappLink, "_blank")
    setIsSubmitted(true)
    setMessage("")

    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  const handleCloseMessage = () => {
    setIsSubmitted(false)
  }

  return (
    <>
    <div className="contact">
      <div className="contact-content">
        <div className="contact-body">
          <h2>Get in Touch with Al Karim Dresses</h2>
          <p className="contact-text-main">
            We're here to assist you with any inquiries about our denim and knitwear products.
          </p>
          <p className="contact-text-secondary">
            For quicker responses, please write your message below. We'll get back to you as soon as possible!
          </p>
          {isSubmitted ? (
            <div className="thank-you-message-container">
              <p className="thank-you-message">Thank you! Your message has been sent.</p>
              <button className="close-message-button" onClick={handleCloseMessage}>
                ✖
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <textarea
                placeholder="Type your message here..."
                className="contact-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" className="send-button">
                Send via WhatsApp
                <span className="whatsapp-icon">📲</span>
              </button>
              <SocialMedia />
            </form>
          )}
        </div>
      </div>
    </div>
  <Contact2 />
    </>
    
  )
}

export default Contact

