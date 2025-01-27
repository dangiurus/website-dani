// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/layout/Layout'
import ErrorBoundary from './components/common/ErrorBoundary'

const HomePage = lazy(() => import('./pages/HomePage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'))

const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-400"></div>
    </div>
)

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <Layout>
                    <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/services" element={<ServicesPage />} />
                                <Route path="/products" element={<ProductsPage />} />
                                <Route path="/portfolio" element={<PortfolioPage />} />
                            </Routes>
                        </Suspense>
                    </ErrorBoundary>
                </Layout>
            </Router>
        </ErrorBoundary>
    );
}

export default App;