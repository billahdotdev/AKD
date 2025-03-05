import "../styles/AboutUs.module.css"
import Asked from './Asked';
import Services from './Services';



const AboutUs = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/8801724546778", "_blank")
  }

  return (
    <>
    <section className="about-section">
      <div className="about-container">
        <div className="content-wrapper">
          <div className="text-content">
            <h1 className="about-title">
              <span className="highlight">AL KARIM DRESS</span>
              <span className="subtitle">Style made simple.</span>
            </h1>
            <div className="about-description">
              <p>
                Since 2015, we've been obsessed with quality and design, crafting pieces that make your customers look
                good. From a small start, we're now your destination for on-trend, quality apparel. Partner with us and
                discover your next best-seller.
              </p>
            </div>
          </div>
          <div className="cta-wrapper">
            <button className="cta-button" onClick={handleWhatsAppClick}>
              <span className="button-text">Let's Connect</span>
              <span className="button-icon">💬</span>
            </button>
          </div>
        </div>
        <div className="decoration-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </div>
    </section>
    <Services />
    <Asked />
    
    </>
    
  )
}

export default AboutUs

