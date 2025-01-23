// src/pages/ProductsPage.tsx
import { useState, useEffect } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import Image from '../components/common/Image';
import Skeleton from '../components/common/Skeleton';
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string;
    price: string;
    features: string[];
}

const categories = [
    { id: 'toate', name: 'Toate Produsele' },
    { id: 'garduri', name: 'Garduri Metalice' },
    { id: 'porti', name: 'Porți Auto și Pietonale' },
    { id: 'balustrade', name: 'Balustrade' },
    { id: 'confectii', name: 'Confecții Metalice' }
];

const products: Product[] = [
    {
        id: 1,
        name: "Gard Metalic Modern",
        category: "garduri",
        description: "Gard metalic cu design modern, perfect pentru case contemporane.",
        image: "/images/products/gard-modern.jpg",
        price: "de la 200 RON/ml",
        features: [
            "Design modern",
            "Rezistent la intemperii",
            "Diverse culori disponibile",
            "Montaj inclus"
        ]
    },
    {
        id: 2,
        name: "Poartă Auto Culisantă",
        category: "porti",
        description: "Poartă auto culisantă cu automatizare și telecomandă.",
        image: "/images/products/poarta-auto.jpg",
        price: "de la 3500 RON",
        features: [
            "Automatizare inclusă",
            "Telecomandă",
            "Senzori de siguranță",
            "Instalare profesională"
        ]
    },
    {
        id: 3,
        name: "Balustradă Inox",
        category: "balustrade",
        description: "Balustradă din inox pentru scări și balcoane.",
        image: "/images/products/balustrada.jpg",
        price: "de la 250 RON/ml",
        features: [
            "Inox de calitate",
            "Design elegant",
            "Durabilitate ridicată",
            "Montaj inclus"
        ]
    },
    {
        id: 4,
        name: "Gard Metalic Clasic",
        category: "garduri",
        description: "Gard metalic în stil clasic, elegant și durabil.",
        image: "/images/products/gard-clasic.jpg",
        price: "de la 180 RON/ml",
        features: [
            "Design clasic",
            "Material durabil",
            "Finisaj premium",
            "Montaj inclus"
        ]
    },
    {
        id: 5,
        name: "Poartă Pietonală Decorativă",
        category: "porti",
        description: "Poartă pietonală cu elemente decorative și sistem de încuiere securizat.",
        image: "/images/products/poarta-pietonala.jpg",
        price: "de la 1500 RON",
        features: [
            "Design decorativ",
            "Sistem securizat",
            "Material rezistent",
            "Instalare inclusă"
        ]
    }
];

const ProductCard = ({ product }: { product: Product }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-w-16 aspect-h-9">
                {isLoading && <Skeleton className="w-full h-full" />}
                <Image
                    src={product.image}
                    alt={product.name}
                    onLoadComplete={() => setIsLoading(false)}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-4">
                    {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 text-sm">
                            <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                            {feature}
                        </li>
                    ))}
                </ul>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-blue-600 font-semibold">{product.price}</span>
                    <Link
                        to={`/contact?product=${product.id}`}
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center px-4 py-2 border border-transparent
                        text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700
                        transition-colors"
                    >
                        Solicită Ofertă
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

const ProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('toate');
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'toate' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-blue-900 py-24">
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero/products-hero.jpg"
                        alt="Products background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Produsele Noastre
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Descoperă gama noastră completă de produse metalice,
                        create cu atenție la detalii și materiale de cea mai bună calitate.
                    </p>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                    selectedCategory === category.id
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-auto">
                        <input
                            type="text"
                            placeholder="Caută produse..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md
                            focus:ring-blue-500 focus:border-blue-500"
                        />
                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading ? (
                        // Skeleton loading state
                        Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm p-4">
                                <Skeleton className="w-full h-48 mb-4" />
                                <Skeleton className="w-3/4 h-6 mb-4" />
                                <Skeleton className="w-full h-20 mb-4" />
                                <div className="space-y-2">
                                    <Skeleton className="w-full h-4" />
                                    <Skeleton className="w-full h-4" />
                                    <Skeleton className="w-3/4 h-4" />
                                </div>
                            </div>
                        ))
                    ) : (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    )}
                </div>

                {!isLoading && filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">
                            Nu am găsit produse care să corespundă criteriilor de căutare.
                        </p>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="bg-blue-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Nu găsești ce cauți?
                    </h2>
                    <p className="text-lg text-blue-100 mb-8">
                        Contactează-ne pentru produse personalizate conform cerințelor tale specifice.
                    </p>
                    <Link
                        to="/contact"
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center px-6 py-3 border border-transparent
                        text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-50
                        transition-colors"
                    >
                        Contactează-ne
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;