import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [theme, setTheme] = useState('light')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cartItems, setCartItems] = useState([])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      if (prevItems.find((item) => item.id === product.id)) {
        return prevItems
      }
      return [...prevItems, product]
    })
  }

  const filteredProducts = sampleProducts.filter((product) => {
    if (selectedCategory === 'all') {
      return true
    }
    return product.category === selectedCategory
  })

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <DarkModeToggle theme={theme} toggleTheme={toggleTheme} />
      <h1>🛒 Shopping App</h1>

      <label htmlFor="category-filter">Filter by Category: </label>
      <select
        id="category-filter"
        aria-label="Filter by Category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
