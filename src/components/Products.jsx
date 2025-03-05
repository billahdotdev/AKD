"use client"

import { useState, useMemo } from "react"
import "../styles/Products.module.css"

// Import product images
import menDenim1 from "../assets/11.jpg"
import menKnitwear1 from "../assets/11.jpg"
import womenDenim1 from "../assets/11.jpg"
import womenKnitwear1 from "../assets/11.jpg"
import childrenDenim1 from "../assets/girl.jpg"
import childrenKnitwear1 from "../assets/children.jpg"

const products = [
  { id: 1, name: "Men's Denim Jacket", category: "Men's", subCategory: "Denim", image: menDenim1 },
  { id: 2, name: "Men's Knit Sweater", category: "Men's", subCategory: "Knitwear", image: menKnitwear1 },
  { id: 3, name: "Women's Denim Jeans", category: "Women's", subCategory: "Denim", image: womenDenim1 },
  { id: 4, name: "Women's Knit Cardigan", category: "Women's", subCategory: "Knitwear", image: womenKnitwear1 },
  { id: 5, name: "Children's Denim Overalls", category: "Children's", subCategory: "Denim", image: childrenDenim1 },
  {
    id: 6,
    name: "Children's Knit Pullover",
    category: "Children's",
    subCategory: "Knitwear",
    image: childrenKnitwear1,
  },
]

const categories = ["Men's", "Women's", "Children's"]
const subCategories = ["Denim", "Knitwear"]

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSubCategory, setSelectedSubCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name")

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null)
      setSelectedSubCategory(null)
    } else {
      setSelectedCategory(category)
      setSelectedSubCategory(null)
    }
  }

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(selectedSubCategory === subCategory ? null : subCategory)
  }

  // New reset function
  const handleReset = () => {
    setSelectedCategory(null)
    setSelectedSubCategory(null)
    setSearchTerm("")
    setSortBy("name")
  }

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    // Apply category and subcategory filters
    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory)
      if (selectedSubCategory) {
        filtered = filtered.filter((product) => product.subCategory === selectedSubCategory)
      }
    }

    // Apply sorting
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "category":
          return a.category.localeCompare(b.category)
        case "subCategory":
          return a.subCategory.localeCompare(b.subCategory)
        default:
          return 0
      }
    })
  }, [searchTerm, selectedCategory, selectedSubCategory, sortBy])

  const getWhatsAppLink = (productName) => {
    const message = encodeURIComponent(
      `I'm interested in ${productName}. Can you please provide the price and minimum order quantity?`,
    )
    return `https://wa.me/+8801732641352?text=${message}`
  }

  return (
    <div className="products-container">
      <h2>Our Products</h2>

      <div className="product-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="sort-by">
          <label htmlFor="sort-select">Sort by:</label>
          <select id="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Name</option>
            <option value="category">Category</option>
            <option value="subCategory">Subcategory</option>
          </select>
        </div>
      </div>

      <div className="category-buttons">
        <button className={`category-btn all-btn ${!selectedCategory ? "active" : ""}`} onClick={handleReset}>
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="subcategory-buttons">
          {subCategories.map((subCategory) => (
            <button
              key={subCategory}
              className={`subcategory-btn ${selectedSubCategory === subCategory ? "active" : ""}`}
              onClick={() => handleSubCategoryClick(subCategory)}
            >
              {subCategory}
            </button>
          ))}
        </div>
      )}

      <div className="products-grid">
        {filteredAndSortedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Subcategory: {product.subCategory}</p>
            <a
              href={getWhatsAppLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Ask For Price and MOQ
            </a>
          </div>
        ))}
      </div>

      {filteredAndSortedProducts.length === 0 && (
        <p className="no-results">No products found. Please try a different search or filter.</p>
      )}
    </div>
  )
}

export default Products

