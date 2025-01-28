import { ArrowRight, Fence, Car, Users, Factory, Tally4, Wrench } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 1,
        title: 'Garduri Metalice',
        shortDescription: 'Garduri metalice personalizate cu design modern și durabil.',
        fullDescription: 'Garduri metalice personalizate cu design modern sau clasic. Execuție la cele mai înalte standarde, cu posibilitatea de a include decupaje laser și modele unice.',
        icon: Fence,
        features: [
            "Decupaje laser personalizate",
            "Finisaje de înaltă calitate",
            "Tratamente anticorozive",
            "Montaj profesional inclus"
        ]
    },
    {
        id: 2,
        title: 'Porți Auto',
        shortDescription: 'Porți auto automatizate sau manuale, adaptate perfect nevoilor dvs.',
        fullDescription: 'Porți auto automatizate sau manuale, adaptate perfect nevoilor și spațiului dumneavoastră. Instalare profesională și sisteme de siguranță incluse.',
        icon: Car,
        features: [
            "Sisteme de automatizare",
            "Control acces inteligent",
            "Senzori de siguranță",
            "Telecomandă și interfon"
        ]
    },
    {
        id: 3,
        title: 'Porți Pietonale',
        shortDescription: 'Porți pietonale elegante și funcționale.',
        fullDescription: 'Porți pietonale elegante și funcționale, integrate perfect cu designul gardului. Sisteme de acces moderne și sigure.',
        icon: Users,
        features: [
            "Design personalizat",
            "Sisteme de interfonie",
            "Acces cu cartelă/amprentă",
            "Închidere automată"
        ]
    },
    {
        id: 4,
        title: 'Hale Industriale',
        shortDescription: 'Construcție și montaj hale industriale la cheie.',
        fullDescription: 'Construcție și montaj hale industriale la cheie. De la proiectare până la execuție, oferim soluții complete pentru spații industriale.',
        icon: Factory,
        features: [
            "Proiectare completă",
            "Structuri metalice durabile",
            "Sisteme de ventilație",
            "Izolație termică eficientă"
        ]
    },
    {
        id: 5,
        title: 'Balustrade',
        shortDescription: 'Balustrade metalice pentru scări și balcoane.',
        fullDescription: 'Balustrade metalice pentru scări și balcoane, cu design modern sau clasic. Siguranță și estetică îmbinate perfect.',
        icon: Tally4,
        features: [
            "Design modern sau clasic",
            "Materiale premium",
            "Montaj sigur",
            "Finisaje diverse"
        ]
    },
    {
        id: 6,
        title: 'Confecții Metalice',
        shortDescription: 'Confecții metalice la comandă pentru orice tip de proiect.',
        fullDescription: 'Confecții metalice la comandă pentru orice tip de proiect. Adaptăm soluțiile la cerințele specifice ale fiecărui client.',
        icon: Wrench,
        features: [
            "Proiecte personalizate",
            "Execuție la comandă",
            "Consultanță tehnică",
            "Termene respectate"
        ]
    }
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
    const Icon = service.icon;

    return (
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800">
            <div className="aspect-w-16 aspect-h-9 flex items-center justify-center p-8 bg-gray-700">
                <Icon className="w-24 h-24 text-orange-400 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-gray-100 mb-2">
                    {service.title}
                </h3>
                <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.shortDescription}
                </p>
                <Link
                    to={`#service-${service.id}`}
                    onClick={() => {
                        const element = document.getElementById(`service-${service.id}`);
                        element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center text-orange-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    Vezi detalii
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </div>
        </div>
    );
};

const DetailedService = ({ service, index }: { service: typeof services[0], index: number }) => {
    const [isVisible, setIsVisible] = useState(false);
    const isEven = index % 2 === 0;
    const Icon = service.icon;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.2
            }
        );

        const element = document.getElementById(`service-${service.id}`);
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [service.id]);

    return (
        <div
            id={`service-${service.id}`}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center py-16 border-t border-gray-700 first:border-t-0`}
        >
            <div className="w-full lg:w-1/2">
                <div className={`
                    flex items-center justify-center p-12
                    bg-gray-800 rounded-xl shadow-lg
                    transform transition-all duration-1000 ease-out
                    ${isVisible ? 'translate-x-0 opacity-100' : `${isEven ? '-translate-x-full' : 'translate-x-full'} opacity-0`}
                `}>
                    <Icon
                        className="w-48 h-48 text-orange-400"
                        strokeWidth={1}
                    />
                </div>
            </div>

            <div className={`
                w-full lg:w-1/2
                transform transition-all duration-1000 delay-300 ease-out
                ${isVisible ? 'translate-x-0 opacity-100' : `${isEven ? 'translate-x-full' : '-translate-x-full'} opacity-0`}
            `}>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                    {service.title}
                </h3>
                <p className="text-lg text-gray-400 mb-6">
                    {service.fullDescription}
                </p>
                <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-center text-gray-400"
                        >
                            <ArrowRight className="h-5 w-5 text-orange-400 mr-2" />
                            {feature}
                        </li>
                    ))}
                </ul>
                <Link
                    to="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors"
                >
                    Solicită Ofertă
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl mb-4">
                        Serviciile Noastre
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Oferim o gamă completă de servicii în domeniul confecțiilor metalice,
                        cu focus pe calitate și satisfacția clientului.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                <div className="mt-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl mb-4">
                            Detalii Servicii
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Descoperă mai multe despre serviciile noastre și cum putem să te ajutăm
                            să realizezi proiectul tău.
                        </p>
                    </div>

                    <div className="space-y-20">
                        {services.map((service, index) => (
                            <DetailedService
                                key={service.id}
                                service={service}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;