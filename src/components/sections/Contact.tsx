import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import MapComponent from './MapComponent';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

interface FormErrors {
    [key: string]: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Numele este obligatoriu';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email-ul este obligatoriu';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Adresa de email nu este validă';
        }

        if (formData.phone && !/^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|-)?([0-9]{3}(\s|\.|-|)){2}$/i.test(formData.phone)) {
            newErrors.phone = 'Numărul de telefon nu este valid';
        }

        if (!formData.subject) {
            newErrors.subject = 'Vă rugăm să selectați un subiect';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Mesajul este obligatoriu';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl mb-4">
                        Contactează-ne
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Suntem aici să răspundem la toate întrebările tale. Contactează-ne și îți vom răspunde în cel
                        mai scurt timp posibil.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-800 rounded-xl shadow-lg p-8">
                            <h3 className="text-xl font-semibold text-gray-100 mb-8">
                                Informații de Contact
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <Phone className="h-6 w-6 text-orange-400 mr-4 mt-1"/>
                                    <div>
                                        <p className="font-medium text-gray-100">Telefon</p>
                                        <a href="tel:+40123456789" className="text-gray-400 hover:text-orange-400">
                                            +40 123 456 789
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="h-6 w-6 text-orange-400 mr-4 mt-1"/>
                                    <div>
                                        <p className="font-medium text-gray-100">Email</p>
                                        <a href="mailto:contact@metalcraft.ro" className="text-gray-400 hover:text-orange-400">
                                            contact@metalcraft.ro
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-orange-400 mr-4 mt-1"/>
                                    <div>
                                        <p className="font-medium text-gray-100">Adresă</p>
                                        <p className="text-gray-400">Strada Exemplu, Nr. 123<br/>Oraș, Județ</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="h-6 w-6 text-orange-400 mr-4 mt-1"/>
                                    <div>
                                        <p className="font-medium text-gray-100">Program</p>
                                        <p className="text-gray-400">
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
                        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl shadow-lg p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Nume Complet *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        className={`w-full px-4 py-2 bg-gray-700 border-gray-600 rounded-md text-gray-200 focus:ring-orange-500 focus:border-orange-500 ${
                                            errors.name ? 'border-red-500' : 'border-gray-600'
                                        }`}
                                        onChange={handleChange}
                                        value={formData.name}
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className={`w-full px-4 py-2 bg-gray-700 border-gray-600 rounded-md text-gray-200 focus:ring-orange-500 focus:border-orange-500 ${
                                            errors.email ? 'border-red-500' : 'border-gray-600'
                                        }`}
                                        onChange={handleChange}
                                        value={formData.email}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                        Telefon
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className={`w-full px-4 py-2 bg-gray-700 border-gray-600 rounded-md text-gray-200 focus:ring-orange-500 focus:border-orange-500 ${
                                            errors.phone ? 'border-red-500' : 'border-gray-600'
                                        }`}
                                        onChange={handleChange}
                                        value={formData.phone}
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                        Subiect *
                                    </label>
                                    <select
                                        name="subject"
                                        id="subject"
                                        required
                                        className={`w-full px-4 py-2 bg-gray-700 border-gray-600 rounded-md text-gray-200 focus:ring-orange-500 focus:border-orange-500 ${
                                            errors.subject ? 'border-red-500' : 'border-gray-600'
                                        }`}
                                        onChange={handleChange}
                                        value={formData.subject}
                                    >
                                        <option value="">Selectează un subiect</option>
                                        <option value="oferta">Cerere ofertă</option>
                                        <option value="informații">Solicitare informații</option>
                                        <option value="colaborare">Propunere colaborare</option>
                                        <option value="altele">Altele</option>
                                    </select>
                                    {errors.subject && (
                                        <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                                    )}
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Mesaj *
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={6}
                                    className={`w-full px-4 py-2 bg-gray-700 border-gray-600 rounded-md text-gray-200 focus:ring-orange-500 focus:border-orange-500 ${
                                        errors.message ? 'border-red-500' : 'border-gray-600'
                                    }`}
                                    onChange={handleChange}
                                    value={formData.message}
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white ${
                                    isSubmitting ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700'
                                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Se trimite...
                                    </>
                                ) : (
                                    <>
                                        Trimite Mesaj
                                        <Send className="ml-2 h-5 w-5"/>
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="mt-4 p-4 bg-green-900 text-green-200 rounded-md">
                                    Mesajul a fost trimis cu succes! Vă vom contacta în cel mai scurt timp.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mt-4 p-4 bg-red-900 text-red-200 rounded-md">
                                    A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-12">
                    <div className="bg-gray-800 rounded-xl shadow-lg p-2" style={{height: '400px'}}>
                        <MapComponent
                            center={[47.47469626558031, 22.79219282148873]}
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