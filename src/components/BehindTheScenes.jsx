"use client"

import { useState, useRef, useEffect } from "react"
import "../styles/BehindTheScenes.module.css"

// Sample data structure - you can easily add more items later
const categories = [
  {
    id: "fabric-inspection",
    title: "Fabric Inspection",
    description:
      "Our quality control team meticulously inspects every roll of fabric to ensure it meets our high standards.",
    images: [
      { src: "src/assets/fabric-inspection1.jpg", alt: "Fabric inspection process" },
      { src: "src/assets/fabric-inspection2.jpg", alt: "Quality control team" },
      { src: "src/assets/fabric-inspection3.jpg", alt: "Fabric testing equipment" },
    ],
    videos: [
      { id: "fabric-vid-1", title: "Fabric Quality Control Process" },
      { id: "fabric-vid-2", title: "Advanced Fabric Testing Methods" },
    ],
  },
  {
    id: "cutting",
    title: "Cutting",
    description:
      "Precision cutting techniques ensure minimal waste and perfect pattern alignment for our denim and knit products.",
    images: [
      { src: "src/assets/cutting1.jpg", alt: "Automated cutting machine" },
      { src: "src/assets/cutting2.jpg", alt: "Pattern layout process" },
      { src: "src/assets/cutting3.jpg", alt: "Cutting team at work" },
    ],
    videos: [
      { id: "cutting-vid-1", title: "Precision Cutting Technology" },
      { id: "cutting-vid-2", title: "Pattern Optimization Process" },
    ],
  },
  {
    id: "sewing",
    title: "Sewing",
    description:
      "Our skilled artisans combine traditional craftsmanship with modern techniques to create durable, high-quality garments.",
    images: [
      { src: "src/assets/sewing1.jpg", alt: "Sewing production line" },
      { src: "src/assets/sewing2.jpg", alt: "Detailed stitching work" },
      { src: "src/assets/sewing3.jpg", alt: "Sewing machine operator" },
    ],
    videos: [
      { id: "sewing-vid-1", title: "Denim Construction Techniques" },
      { id: "sewing-vid-2", title: "Artisan Stitching Methods" },
    ],
  },
  {
    id: "finishing",
    title: "Finishing",
    description:
      "The final touches that make our garments stand out - from washing and distressing to quality checks and packaging.",
    images: [
      { src: "src/assets/finishing1.jpg", alt: "Garment washing process" },
      { src: "src/assets/finishing2.jpg", alt: "Final quality inspection" },
      { src: "src/assets/finishing3.jpg", alt: "Packaging department" },
    ],
    videos: [
      { id: "finishing-vid-1", title: "Denim Washing Techniques" },
      { id: "finishing-vid-2", title: "Quality Assurance Process" },
    ],
  },
]

// You can easily replace these with your actual YouTube video IDs
const videoMapping = {
  "fabric-vid-1": "x1y2z3",
  "fabric-vid-2": "a4b5c6",
  "cutting-vid-1": "d7e8f9",
  "cutting-vid-2": "g1h2i3",
  "sewing-vid-1": "j4k5l6",
  "sewing-vid-2": "m7n8o9",
  "finishing-vid-1": "p1q2r3",
  "finishing-vid-2": "s4t5u6",
}

const BehindTheScenes = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isIntersecting, setIsIntersecting] = useState({})
  const sectionRefs = useRef({})

  // Get the current category data
  const currentCategory = categories.find((cat) => cat.id === activeCategory)

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    // Smooth scroll to the section
    const element = document.getElementById(`section-${categoryId}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Handle image click for lightbox
  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null)
  }

  // Setup intersection observer for animation
  useEffect(() => {
    const observers = {}

    categories.forEach((category) => {
      const ref = sectionRefs.current[category.id]
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting((prev) => ({
              ...prev,
              [category.id]: entry.isIntersecting,
            }))

            // Auto-update active category based on scroll
            if (entry.isIntersecting) {
              setActiveCategory(category.id)
            }
          },
          { threshold: 0.3 },
        )

        observer.observe(ref)
        observers[category.id] = observer
      }
    })

    // Cleanup
    return () => {
      Object.values(observers).forEach((observer) => {
        observer.disconnect()
      })
    }
  }, [])

  return (
    <div className="behind-the-scenes">
      <div className="bts-header">
        <h1>Behind The Scenes</h1>
        <p>Discover the craftsmanship and attention to detail that goes into every AL KARIM DRESSES garment</p>
      </div>

      <div className="bts-navigation">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`nav-button ${activeCategory === category.id ? "active" : ""}`}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="bts-content">
        {categories.map((category) => (
          <div
            key={category.id}
            id={`section-${category.id}`}
            ref={(el) => (sectionRefs.current[category.id] = el)}
            className={`bts-section ${isIntersecting[category.id] ? "visible" : ""}`}
          >
            <h2>{category.title}</h2>
            <p className="section-description">{category.description}</p>

            <div className="image-gallery">
              <h3>Images</h3>
              <div className="gallery-grid">
                {category.images.map((image, index) => (
                  <div key={index} className="gallery-item" onClick={() => handleImageClick(image)}>
                    <img src={image.src || "/placeholder.svg"} alt={image.alt} />
                    <div className="image-overlay">
                      <span>View</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="video-section">
              <h3>Videos</h3>
              <div className="video-grid">
                {category.videos.map((video, index) => (
                  <div key={index} className="video-item">
                    <div className="video-container">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoMapping[video.id]}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h4>{video.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox for images */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeLightbox}>
              ×
            </button>
            <img src={selectedImage.src || "/placeholder.svg"} alt={selectedImage.alt} />
            <p>{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default BehindTheScenes

