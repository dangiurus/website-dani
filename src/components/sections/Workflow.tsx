import { Ruler, Pencil, Wrench, Truck, Shield } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Consultare și Măsurători",
        description: "Discutăm despre cerințele tale și facem măsurătorile necesare la fața locului pentru a asigura precizia execuției.",
        icon: Ruler,
        details: [
            "Evaluare la fața locului",
            "Măsurători precise",
            "Discuție despre preferințe",
            "Estimare preliminară"
        ]
    },
    {
        id: 2,
        title: "Design și Planificare",
        description: "Creăm schițele și planurile detaliate ale proiectului, stabilim materialele și timeline-ul de execuție.",
        icon: Pencil,
        details: [
            "Schițe și planuri 3D",
            "Alegerea materialelor",
            "Planificare termene",
            "Stabilire buget final"
        ]
    },
    {
        id: 3,
        title: "Execuție",
        description: "Începem producția folosind tehnologie modernă și materiale de calitate superioară pentru cel mai bun rezultat.",
        icon: Wrench,
        details: [
            "Tăiere și prelucrare",
            "Asamblare precisă",
            "Control calitate",
            "Teste de siguranță"
        ]
    },
    {
        id: 4,
        title: "Livrare și Montaj",
        description: "Transportăm și instalăm produsul la locația ta, asigurând montajul corect și funcționalitatea perfectă.",
        icon: Truck,
        details: [
            "Transport specializat",
            "Montaj profesionist",
            "Testare funcționalitate",
            "Curățenie post-montaj"
        ]
    },
    {
        id: 5,
        title: "Garanție și Service",
        description: "Oferim garanție extinsă și suport post-vânzare pentru toate produsele noastre.",
        icon: Shield,
        details: [
            "Garanție extinsă",
            "Mentenanță periodică",
            "Suport tehnic",
            "Service rapid"
        ]
    }
];

const Workflow = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl mb-4">
                        Procesul Nostru de Lucru
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Descoperă cum transformăm ideile în realitate printr-un proces bine definit și
                        transparent, care asigură calitatea și satisfacția clienților noștri.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700 -translate-y-1/2" />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {steps.map((step) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={step.id}
                                    className="relative bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-orange-600"
                                >
                                    {/* Icon Circle */}
                                    <div className="relative z-10 -mt-14 mb-6 mx-auto bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                                        <Icon className="h-8 w-8 text-gray-100" />
                                    </div>

                                    {/* Step Number */}
                                    <div className="absolute top-4 right-4 text-3xl font-bold text-gray-700">
                                        {step.id}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-100 mb-4 text-center">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6 text-center">
                                        {step.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {step.details.map((detail, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-center text-sm text-gray-400"
                                            >
                                                <div className="h-1.5 w-1.5 bg-orange-400 rounded-full mr-2" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;