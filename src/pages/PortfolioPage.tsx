// src/pages/PortfolioPage.tsx
import {useEffect, useState} from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Image from '../components/common/Image';
import Skeleton from '../components/common/Skeleton';
import { Link } from 'react-router-dom';

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    location: string;
    date: string;
    images: string[];
    features: string[];
    challenge: string;
    solution: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Ansamblu Rezidential Green Park",
        category: "garduri",
        description: "Proiect complex de împrejmuire pentru un ansamblu rezidențial modern.",
        location: "București, Sector 1",
        date: "Decembrie 2024",
        images: [
            "/images/portfolio/green-park-1.jpg",
            "/images/portfolio/green-park-2.jpg",
            "/images/portfolio/green-park-3.jpg"
        ],
        features: [
            "400 metri liniari de gard",
            "Porți auto automatizate",
            "Porți pietonale cu interfon",
            "Design modern, personalizat"
        ],
        challenge: "Proiectul a necesitat integrarea sistemelor de securitate și control acces într-un design modern și uniform.",
        solution: "Am dezvoltat un sistem modular care combină estetica modernă cu funcționalitatea necesară unui ansamblu rezidențial."
    },
    // ... Add more projects with actual image paths
];

const categories = [
    { id: 'toate', name: 'Toate Proiectele' },
    { id: 'garduri', name: 'Garduri și Porți' },
    { id: 'hale', name: 'Hale Industriale' },
    { id: 'balustrade', name: 'Balustrade' },
    { id: 'speciale', name: 'Proiecte Speciale' }
];

const ProjectCard = ({ project }: { project: Project }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative">
                {isLoading && <Skeleton className="w-full h-64" />}
                <Image
                    src={project.images[currentImageIndex]}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    onLoadComplete={() => setIsLoading(false)}
                />
                {project.images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {project.images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full ${
                                    currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                                }`}
                                aria-label={`Image ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-200">{project.category}</p>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                    </div>
                    <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.date}
                    </div>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className={`transition-all duration-300 ${isExpanded ? 'max-h-[1000px]' : 'max-h-0'} overflow-hidden`}>
                    <div className="space-y-4 mb-4">
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Caracteristici Principale</h4>
                            <ul className="space-y-2">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-600">
                                        <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Provocarea</h4>
                            <p className="text-gray-600">{project.challenge}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Soluția</h4>
                            <p className="text-gray-600">{project.solution}</p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                    {isExpanded ? 'Vezi mai puțin' : 'Vezi mai mult'}
                </button>
            </div>
        </div>
    );
};

const PortfolioPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('toate');
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const filteredProjects = projects.filter(project => {
        const matchesCategory = selectedCategory === 'toate' || project.category === selectedCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-blue-900 py-24">
                <div className="absolute inset-0">
                    <Image
                        src="/images/portfolio/hero-bg.jpg"
                        alt="Portfolio background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Portofoliu Proiecte
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Descoperă proiectele noastre finalizate și vezi cum putem transforma
                        viziunea ta în realitate.
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-6">
                    <div className="w-full md:w-64">
                        <input
                            type="text"
                            placeholder="Caută proiecte..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center">
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
                </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading ? (
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
                        filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    )}
                </div>

                {!isLoading && filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">
                            Nu am găsit proiecte care să corespundă criteriilor selectate.
                        </p>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="bg-blue-900 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Pregătit să Începem Proiectul Tău?
                    </h2>
                    <p className="text-lg text-blue-100 mb-8">
                        Contactează-ne pentru o consultație gratuită și vezi cum putem aduce plus valoare proiectului tău.
                    </p>
                    <Link
                        to="/contact"
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-50 transition-colors"
                    >
                        Contactează-ne
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;