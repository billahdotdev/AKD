import "../styles/VisionMission.css"

const VisionMission = () => {
  return (
    <section className="vision-mission">
      <div className="container">
        <div className="card mission">
          <div className="card-content">
            <div className="icon-wrapper">
              <div className="icon mission-icon">🎯</div>
            </div>
            <h2 className="title">Mission</h2>
            <div className="text-wrapper">
              <p className="description">
                To manufacture high-quality denim and knitwear, partnering with brands that share our values.
              </p>
            </div>
          </div>
          <div className="decoration-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="divider">
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
        </div>

        <div className="card vision">
          <div className="card-content">
            <div className="icon-wrapper">
              <div className="icon vision-icon">🌟</div>
            </div>
            <h2 className="title">Vision</h2>
            <div className="text-wrapper">
              <p className="description">
                To be the trusted and long-term manufacturing partner of choice for leading fashion brands worldwide.
              </p>
            </div>
          </div>
          <div className="decoration-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission

