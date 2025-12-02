
import './App.css'
import ProductsPage from './pages/ProductsPage'
import { FiltersSidebar } from './components/FiltersSidebar'

function App() {

  return (
    <>
      <div style={{ display: "flex" }} >
      <FiltersSidebar />

      <main style={{ padding: "1rem" }}>
        <h1>Products</h1>
        <ProductsPage />
      </main>
    </div>
    </>
  )
}

export default App
