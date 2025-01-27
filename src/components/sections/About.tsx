import { CheckCircle, Users, Trophy, Clock } from 'lucide-react';

const features = [
    {
        id: 1,
        title: "Experiență Dovedită",
        description: "Cu peste 10 ani de experiență în domeniu, am realizat sute de proiecte de succes.",
        icon: Clock
    },
    {
        id: 2,
        title: "Echipă Calificată",
        description: "Echipa noastră este formată din profesioniști cu vastă experiență în confecții metalice.",
        icon: Users
    },
    {
        id: 3,
        title: "Calitate Garantată",
        description: "Oferim garanție pentru toate lucrările și folosim doar materiale de cea mai bună calitate.",
        icon: CheckCircle
    },
    {
        id: 4,
        title: "Proiecte Premiate",
        description: "Lucrările noastre au fost recunoscute pentru excelență și inovație în domeniu.",
        icon: Trophy
    }
];

const About = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl mb-6">
                            Experiență și Profesionalism în Confecții Metalice
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Suntem o companie cu tradiție în domeniul confecțiilor metalice,
                            dedicată excelenței și satisfacției clienților noștri.
                        </p>
                        <p className="text-lg text-gray-400 mb-8">
                            Ne mândrim cu o echipă de profesioniști experimentați și utilaje moderne
                            care ne permit să oferim servicii de cea mai înaltă calitate.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-4 bg-gray-800 rounded-lg shadow-sm">
                                <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                                <div className="text-gray-400">Proiecte Finalizate</div>
                            </div>
                            <div className="text-center p-4 bg-gray-800 rounded-lg shadow-sm">
                                <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                                <div className="text-gray-400">Clienți Mulțumiți</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={feature.id}
                                     className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <IconComponent className="h-8 w-8 text-orange-400 mb-4" />
                                    <h3 className="text-lg font-semibold text-gray-100 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;