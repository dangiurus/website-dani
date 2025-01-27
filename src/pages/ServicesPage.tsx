import { ArrowRight, Wrench, Settings, Clock, Shield, Link } from 'lucide-react';

interface ServiceDetailProps {
    title: string;
    description: string;
    features: string[];
    image: string;
}

const serviceDetails: ServiceDetailProps[] = [
    {
        title: "Garduri Metalice",
        description: "Oferim servicii complete de proiectare, fabricare și instalare a gardurilor metalice personalizate. De la modele clasice până la design-uri moderne, creăm garduri care îmbină perfect aspectul estetic cu funcționalitatea.",
        features: [
            "Design personalizat",
            "Materiale de înaltă calitate",
            "Tratament anticoroziv",
            "Garanție extinsă",
            "Montaj profesional"
        ],
        image: "/api/placeholder/800/600"
    },
    {
        title: "Porți Auto și Pietonale",
        description: "Specializați în fabricarea porților auto culisante și batante, precum și a porților pietonale. Oferim soluții complete, inclusiv automatizare și sisteme de acces inteligent.",
        features: [
            "Sisteme de automatizare",
            "Control acces inteligent",
            "Design personalizat",
            "Întreținere periodică",
            "Instalare profesională"
        ],
        image: "/api/placeholder/800/600"
    },
    {
        title: "Hale Industriale",
        description: "Construim hale industriale la cheie, de la proiectare până la execuție. Structurile noastre metalice sunt durabile, eficiente și conforme cu toate standardele în vigoare.",
        features: [
            "Proiectare personalizată",
            "Execuție la cheie",
            "Conformitate cu normele",
            "Izolație termică eficientă",
            "Sisteme de ventilație"
        ],
        image: "/api/placeholder/800/600"
    }
];

const ServiceDetail = ({ title, description, features, image }: ServiceDetailProps) => {
    return (
        <div className="py-16 border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:gap-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-100 mb-6">{title}</h2>
                        <p className="text-lg text-gray-400 mb-8">{description}</p>
                        <ul className="space-y-4 mb-8">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-400">
                                    <ArrowRight className="h-5 w-5 text-orange-400 mr-3" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors">
                            Solicită Ofertă
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:w-1/2">
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                            <img src={image} alt={title} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ServicesPage = () => {
    return (
        <div className="bg-gray-900">
            {/* Hero Section */}
            <div className="relative bg-gray-800 py-24">
                <div className="absolute inset-0">
                    <img
                        src="/api/placeholder/1920/600"
                        alt="Services background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
                        Serviciile Noastre
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Oferim o gamă completă de servicii în domeniul confecțiilor metalice,
                        cu focus pe calitate și satisfacția clientului.
                    </p>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-16 bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-100 mb-4">
                            De Ce Să Alegeți Serviciile Noastre
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                            Cu o experiență vastă și o echipă de profesioniști dedicați,
                            oferim servicii de cea mai înaltă calitate pentru proiectele dumneavoastră.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
                            <Wrench className="h-12 w-12 text-orange-400 mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">Expertiză Tehnică</h3>
                            <p className="text-gray-400">Echipa noastră are expertiza necesară pentru a gestiona orice
                                proiect.</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
                            <Settings className="h-12 w-12 text-orange-400 mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">Echipamente Moderne</h3>
                            <p className="text-gray-400">Utilizăm tehnologie de ultimă generație pentru rezultate
                                perfecte.</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
                            <Clock className="h-12 w-12 text-orange-400 mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">Livrare la Timp</h3>
                            <p className="text-gray-400">Respectăm cu strictețe termenele de execuție agreate.</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
                            <Shield className="h-12 w-12 text-orange-400 mb-4"/>
                            <h3 className="text-xl font-semibold text-gray-100 mb-2">Garanție Extinsă</h3>
                            <p className="text-gray-400">Oferim garanție extinsă pentru toate serviciile noastre.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Services */}
            {serviceDetails.map((service, index) => (
                <ServiceDetail key={index} {...service} />
            ))}

            {/* CTA Section */}
            <div className="bg-gray-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-100 mb-8">
                        Pregătit să Începem un Proiect?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors"
                        >
                            Contactează-ne
                            <ArrowRight className="ml-2 h-5 w-5"/>
                        </Link>
                        <Link
                            to="/portfolio"
                            className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 hover:bg-gray-700 rounded-md transition-colors"
                        >
                            Vezi Portofoliul
                        </Link>
                    </div>
                </div>
            </div>
        </div>
);
};

export default ServicesPage;