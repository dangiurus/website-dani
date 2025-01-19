// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import ServicesPage from './pages/ServicesPage'
import ProductsPage from './pages/ProductsPage'
import PortfolioPage from './pages/PortfolioPage'

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App