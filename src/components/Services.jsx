import { FaTshirt, FaHandsHelping, FaShippingFast, FaClipboardCheck } from "react-icons/fa"
import "../styles/Services.module.css"
import { FaAnchor, FaHand, FaL, FaPaintRoller, FaTruckMonster } from "react-icons/fa6"
import { FactoryIcon } from "lucide-react"

const serviceData = [
  {
    icon: <FactoryIcon />,
    title: "Denim and Knit Manufacturing",
    description:
      "Premium denim production with cutting-edge technology and superior craftsmanship for exceptional quality jeans and apparel.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Custom Solutions",
    description:
      "Tailored manufacturing solutions to meet your specific requirements, from design to production and quality control.",
  },
  {
    icon: <FaShippingFast />,
    title: "Global Delivery",
    description:
      "Efficient logistics and timely delivery to ensure your products reach their destination safely and on schedule.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Quality Assurance",
    description:
      "Rigorous quality control measures at every stage to maintain the highest standards in garment manufacturing.",
  },
]

const Services = () => {
  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-title">
          Our Services
          <span className="services-subtitle">Excellence in every stitch</span>
        </h2>
        <div className="services-grid">
          {serviceData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="card-decoration">
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="decoration-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  )
}

export default Services

