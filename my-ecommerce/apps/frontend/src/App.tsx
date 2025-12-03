
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import { FiltersSidebar } from './components/FiltersSidebar'
import NavBar from '../layouts/NavBar'
import { Flex } from '@chakra-ui/react'

function App() {

  return (
    <Router>
        <NavBar />
      <Flex justify={"center"} gap={4} padding={4}>
        <FiltersSidebar />
        <main style={{ padding: "1rem" }}>
          <h1>Products</h1>
          
          <ProductsPage />
        </main>
      </Flex>
    </Router>
  )
}

export default App
