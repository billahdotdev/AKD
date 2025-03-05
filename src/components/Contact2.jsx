"use client"

import { useState, useRef, useEffect } from "react"
import "../styles/Contact2.css"
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa6"

const Contact2 = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Initialize EmailJS with your public key
    // emailjs.init("YOUR_PUBLIC_KEY");
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Uncomment and replace with your actual EmailJS service, template, and public key
      // await emailjs.sendForm(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formRef.current,
      //   'YOUR_PUBLIC_KEY'
      // );

      // Simulate sending email for demo
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending email:", error)
      setFormStatus({
        submitted: true,
        success: false,
        message: "Failed to send message. Please try again later.",
      })
    } finally {
      setLoading(false)

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: "",
        })
      }, 5000)
    }
  }

  return (
    <div className="contact2-container">
      <div className="contact2-content">
        <div className="contact2-left">
          <div className="contact2-header">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you. Drop us a message!</p>
          </div>

          <div className="contact2-info">
            <div className="contact2-info-item">
              <div className="contact2-info-icon">
                <FaPhone />
              </div>
              <div className="contact2-info-text">
                <h3>Phone</h3>
                <p>+880 1732-641352</p>
                <p>+880 1973-103319</p>
              </div>
            </div>

            <div className="contact2-info-item">
              <div className="contact2-info-icon">
                <FaEnvelope />
              </div>
              <div className="contact2-info-text">
                <h3>Email</h3>
                <p>info@alkarimdresses.com</p>
                <p>support@alkarimdresses.com</p>
              </div>
            </div>

            <div className="contact2-info-item">
              <div className="contact2-info-icon">
                <FaLocationDot />
              </div>
              <div className="contact2-info-text">
                <h3>Location</h3>
                <p>228-229 Amaiya, Borobari, Kachkhura, Uttarkhan</p>
                <p>Dhaka - 1230, Bangladesh</p>
              </div>
            </div>

            <div className="contact2-info-item">
              <div className="contact2-info-icon">
                <FaClock />
              </div>
              <div className="contact2-info-text">
                <h3>Business Hours</h3>
                <p>Mon - Sun: 9:00 AM - 8:00 PM</p>
                
              </div>
            </div>
          </div>

          <div className="contact2-social">
            <h3>Follow Us</h3>
            <div className="contact2-social-links">
              <a href="https://www.facebook.com/brandotory" className="contact2-social-link facebook">
                <FaFacebook />
              </a>
              <a href="#" className="contact2-social-link instagram">
                <FaInstagram />
              </a>
              <a href="#" className="contact2-social-link twitter">
                <FaXTwitter />
              </a>
              <a href="#" className="contact2-social-link youtube">
                <FaYoutube />
              </a>
              <a href="#" className="contact2-social-link linkedin">
                <FaLinkedin />
              </a>
              <a href="#" className="contact2-social-link pinterest">
                <FaPinterest />
              </a>
              <a href="#" className="contact2-social-link tiktok">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        <div className="contact2-right">
          <div className="contact2-form-container">
            <h2>Send a Message</h2>

            <form ref={formRef} onSubmit={handleSubmit} className="contact2-form">
              <div className="contact2-form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact2-form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="contact2-form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of your message"
                  required
                />
              </div>

              <div className="contact2-form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className={`contact2-submit-btn ${loading ? "loading" : ""}`} disabled={loading}>
                {loading ? <span className="contact2-spinner"></span> : "Send Message"}
              </button>

              {formStatus.submitted && (
                <div className={`contact2-form-message ${formStatus.success ? "success" : "error"}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact2

