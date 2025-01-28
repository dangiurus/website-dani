import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/layout/Layout';
import AdminLayout from './components/admin/AdminLayout';
import ErrorBoundary from './components/common/ErrorBoundary';
import AdminLogin from './pages/admin/AdminLogin';

// Public pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));

// Admin pages
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminProducts = lazy(() => import('./pages/admin/AdminProducts'));
const AdminServices = lazy(() => import('./pages/admin/AdminServices'));
const AdminPortfolio = lazy(() => import('./pages/admin/AdminPortfolio'));

const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-400"></div>
    </div>
);

// Auth guard component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = localStorage.getItem('adminAuth') === 'true';

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return <>{children}</>;
};

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                        {/* Admin Routes */}
                        <Route path="/admin/login" element={<AdminLogin />} />
                        <Route
                            path="/admin/*"
                            element={
                                <ProtectedRoute>
                                    <AdminLayout>
                                        <Routes>
                                            <Route path="dashboard" element={<AdminDashboard />} />
                                            <Route path="products" element={<AdminProducts />} />
                                            <Route path="services" element={<AdminServices />} />
                                            <Route path="portfolio" element={<AdminPortfolio />} />
                                            <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
                                        </Routes>
                                    </AdminLayout>
                                </ProtectedRoute>
                            }
                        />

                        {/* Public Routes */}
                        <Route path="/" element={<Layout>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/services" element={<ServicesPage />} />
                                <Route path="/products" element={<ProductsPage />} />
                                <Route path="/portfolio" element={<PortfolioPage />} />
                            </Routes>
                        </Layout>} />
                    </Routes>
                </Suspense>
            </Router>
        </ErrorBoundary>
    );
}

export default App;