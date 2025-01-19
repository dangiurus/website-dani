// src/components/sections/ContactPage.tsx
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import MapComponent from "./MapComponent.tsx";

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aici vom adăuga logica de trimitere a formularului
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                        Contactează-ne
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Suntem aici să răspundem la toate întrebările tale. Contactează-ne și îți vom răspunde în cel
                        mai scurt timp posibil.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-8">
                                Informații de Contact
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Phone className="h-6 w-6 text-blue-600 mr-4 mt-1"/>
                                    <div>
                                        <p className="font-medium text-gray-900">Telefon</p>
                                        <p className="text-gray-600">+40 123 456 789</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="h-6 w-6 text-blue-600 mr-4 mt-1"/>
                                    <div>
                                        <p className="font-medium text-gray-900">Email</p>
                                        <p className="text-gray-600">contact@metalcraft.ro</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1"/>
                                    <div>
                                        <p className="font-medium text-gray-900">Adresă</p>
                                        <p className="text-gray-600">Strada Exemplu, Nr. 123<br/>Oraș, Județ</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1"/>
                                    <div>
                                        <p className="font-medium text-gray-900">Program</p>
                                        <p className="text-gray-600">
                                            Luni - Vineri: 08:00 - 17:00<br/>
                                            Sâmbătă: 09:00 - 14:00<br/>
                                            Duminică: Închis
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nume Complet
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        onChange={handleChange}
                                        value={formData.name}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        onChange={handleChange}
                                        value={formData.email}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Telefon
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        onChange={handleChange}
                                        value={formData.phone}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subiect
                                    </label>
                                    <select
                                        name="subject"
                                        id="subject"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        onChange={handleChange}
                                        value={formData.subject}
                                    >
                                        <option value="">Selectează un subiect</option>
                                        <option value="oferta">Cerere ofertă</option>
                                        <option value="informații">Solicitare informații</option>
                                        <option value="colaborare">Propunere colaborare</option>
                                        <option value="altele">Altele</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mesaj
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={6}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    onChange={handleChange}
                                    value={formData.message}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Trimite Mesaj
                                <Send className="ml-2 h-5 w-5"/>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-12">
                    <div className="bg-white rounded-xl shadow-lg p-2" style={{height: '400px'}}>
                        <MapComponent
                            center={[47.47469626558031, 22.79219282148873]} // Coordonatele pentru București
                            zoom={13}
                            popupText="Strada Exemplu, Nr. 123, București"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;