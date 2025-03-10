import { FaGithub, FaXTwitter, FaLinkedin, FaPinterest, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa6"
import logo from "../assets/akd-logo.svg"
import "../styles/SocialMedia.css"

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <div className="social-icons">
        <a href="https://github.com/billahdotdev" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook />
        </a>
        <a href="https://github.com/billahdotdev" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
       
        <a
          href="https://www.linkedin.com/in/billahdotdev"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.pinterest.com/billahdotdev"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaPinterest />
        </a>
        <a href="https://x.com/billahdotdev" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaXTwitter />
        </a>
       
      </div>
    </div>
  )
}

export default SocialMedia

