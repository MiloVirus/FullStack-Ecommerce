import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import NavBar from '../layouts/NavBar'
import { Flex } from '@chakra-ui/react'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {

  return (
    <Router>
        <NavBar />
      <Routes>
        <Route path="/" element={
          <Flex justify={"center"} gap={4} padding={4}>
            <main style={{ padding: "1rem" }}>
              <HomePage />
            </main>
          </Flex>
        } />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
