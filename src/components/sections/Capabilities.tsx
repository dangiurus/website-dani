// src/components/sections/Capabilities.tsx
import { ArrowRight } from 'lucide-react';

const capabilities = [
    {
        id: 1,
        title: "Garduri Metalice",
        description: "Garduri metalice personalizate cu design modern sau clasic. Execuție la cele mai înalte standarde, cu posibilitatea de a include decupaje laser și modele unice.",
        image: "https://images.unsplash.com/photo-1553613600-cc786c8d4d05?q=80&w=2070",
        features: [
            "Decupaje laser personalizate",
            "Finisaje de înaltă calitate",
            "Tratamente anticorozive",
            "Montaj profesional inclus"
        ]
    },
    {
        id: 2,
        title: "Porți Auto și Pietonale",
        description: "Porți auto culisante sau batante, cu sau fără automatizare. Sisteme moderne de acces și siguranță integrate.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
        features: [
            "Sisteme de automatizare",
            "Telecomandă și acces smart",
            "Design personalizat",
            "Sisteme de siguranță"
        ]
    },
    {
        id: 3,
        title: "Hale Industriale",
        description: "Construcție și montaj hale industriale la cheie. Proiectare și execuție conform standardelor în vigoare.",
        image: "https://images.unsplash.com/photo-1565636291239-a8630eb0a3b5?q=80&w=2070",
        features: [
            "Proiectare personalizată",
            "Structuri metalice durabile",
            "Execuție la cheie",
            "Conformitate cu normele"
        ]
    },
    {
        id: 4,
        title: "Confecții Metalice Speciale",
        description: "Realizăm orice tip de confecție metalică la comandă, adaptată perfect nevoilor dumneavoastră.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070",
        features: [
            "Proiecte personalizate",
            "Consultanță tehnică",
            "Execuție precisă",
            "Adaptare la cerințe"
        ]
    }
];

const Capabilities = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                        Ce Putem Realiza
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Descoperă gama noastră completă de servicii și produse.
                        Cu echipamente moderne și personal calificat, suntem pregătiți
                        să transformăm viziunea ta în realitate.
                    </p>
                </div>

                <div className="space-y-20">
                    {capabilities.map((item, index) => (
                        <div
                            key={item.id}
                            className={`flex flex-col ${
                                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                            } gap-12 items-center`}
                        >
                            {/* Image */}
                            <div className="w-full lg:w-1/2">
                                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-lg">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-1/2">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-gray-600 mb-6">
                                    {item.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {item.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center text-gray-700"
                                        >
                                            <ArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="inline-flex items-center px-6 py-3 border border-transparent
                                 text-base font-medium rounded-md text-white bg-blue-600
                                 hover:bg-blue-700 transition duration-150 ease-in-out">
                                    Solicită Ofertă
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Capabilities;