// src/components/sections/WhyChooseUs.tsx
import { Settings, Clock, Award, Wallet, Wrench, HeartHandshake } from 'lucide-react';

const reasons = [
    {
        id: 1,
        title: "Echipamente Moderne",
        description: "Folosim tehnologie de ultimă generație și echipamente moderne pentru a asigura precizie și calitate în execuție.",
        icon: Settings,
        details: [
            "Mașini CNC pentru precizie",
            "Tehnologie modernă de sudură",
            "Sisteme automatizate",
            "Software de proiectare 3D"
        ]
    },
    {
        id: 2,
        title: "Execuție Rapidă",
        description: "Ne respectăm termenele și lucrăm eficient pentru a livra proiectul tău la timp, fără compromisuri de calitate.",
        icon: Clock,
        details: [
            "Planificare eficientă",
            "Echipă dedicată",
            "Flux de lucru optimizat",
            "Livrare la termen"
        ]
    },
    {
        id: 3,
        title: "Calitate Garantată",
        description: "Oferim garanție pentru toate lucrările noastre și folosim doar materiale de cea mai bună calitate.",
        icon: Award,
        details: [
            "Materiale premium",
            "Standarde înalte",
            "Control riguros",
            "Garanție extinsă"
        ]
    },
    {
        id: 4,
        title: "Prețuri Competitive",
        description: "Oferim cel mai bun raport calitate-preț, cu soluții adaptate pentru orice buget.",
        icon: Wallet,
        details: [
            "Prețuri transparente",
            "Fără costuri ascunse",
            "Oferte personalizate",
            "Raport calitate-preț excelent"
        ]
    },
    {
        id: 5,
        title: "Personal Calificat",
        description: "Echipa noastră este formată din profesioniști cu experiență în domeniul confecțiilor metalice.",
        icon: Wrench,
        details: [
            "Expertiză tehnică",
            "Pregătire continuă",
            "Experiență dovedită",
            "Atenție la detalii"
        ]
    },
    {
        id: 6,
        title: "Suport Complet",
        description: "Oferim consultanță și suport pe tot parcursul proiectului, de la idee până la implementare.",
        icon: HeartHandshake,
        details: [
            "Consultanță tehnică",
            "Asistență permanentă",
            "Service post-vânzare",
            "Relații pe termen lung"
        ]
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                        De Ce Să Ne Alegi
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Descoperă avantajele care ne diferențiază și care fac din noi
                        alegerea ideală pentru proiectul tău de confecții metalice.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={reason.id}
                                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-2 bg-blue-600 rounded-lg mr-4">
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        {reason.title}
                                    </h3>
                                </div>

                                <p className="text-blue-100 mb-6">
                                    {reason.description}
                                </p>

                                <ul className="space-y-2">
                                    {reason.details.map((detail, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center text-sm text-blue-100"
                                        >
                                            <div className="h-1.5 w-1.5 bg-blue-400 rounded-full mr-2" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-300"
                    >
                        Solicită o Ofertă Gratuită
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;