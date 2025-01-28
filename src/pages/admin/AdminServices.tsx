//src/components/admin/AdminServices.tsx

import { useState } from 'react';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import AdminForm, { FormData } from '../../components/admin/AdminForm.tsx';

interface Service {
    id: number;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon: string;
    features: string[];
    image: string | File;
    order: number;
}

const serviceToFormData = (service: Service): FormData => {
    return {
        title: service.title,
        shortDescription: service.shortDescription,
        fullDescription: service.fullDescription,
        icon: service.icon,
        features: service.features,
        image: service.image,
        order: service.order.toString()
    };
};

const formDataToService = (formData: FormData, id?: number): Service => {
    return {
        id: id || Date.now(),
        title: formData.title as string,
        shortDescription: formData.shortDescription as string,
        fullDescription: formData.fullDescription as string,
        icon: formData.icon as string,
        features: formData.features as string[],
        image: formData.image as string | File,
        order: parseInt(formData.order as string, 10)
    };
};

const formFields = [
    {
        name: 'title',
        label: 'Service Title',
        type: 'text' as const,
        required: true,
        placeholder: 'Enter service title'
    },
    {
        name: 'shortDescription',
        label: 'Short Description',
        type: 'text' as const,
        required: true,
        placeholder: 'Brief description for service cards'
    },
    {
        name: 'fullDescription',
        label: 'Full Description',
        type: 'textarea' as const,
        required: true,
        placeholder: 'Detailed service description'
    },
    {
        name: 'icon',
        label: 'Icon Name',
        type: 'text' as const,
        required: true,
        placeholder: 'Lucide icon name (e.g., "Tool", "Settings")'
    },
    {
        name: 'image',
        label: 'Service Image',
        type: 'image' as const,
        required: true
    },
    {
        name: 'features',
        label: 'Features',
        type: 'list' as const,
        required: true
    },
    {
        name: 'order',
        label: 'Display Order',
        type: 'text' as const,
        required: true,
        placeholder: 'Enter display order (number)'
    }
];

const AdminServices = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingService, setEditingService] = useState<Service | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const [services, setServices] = useState<Service[]>([
        {
            id: 1,
            title: 'Garduri Metalice',
            shortDescription: 'Garduri metalice personalizate',
            fullDescription: 'Garduri metalice personalizate cu design modern sau clasic...',
            icon: 'Gate',
            features: ['Decupaje laser', 'Finisaj premium'],
            image: '/images/services/garduri.jpg',
            order: 1
        }
        // Add more sample services...
    ]);

    const handleSubmit = (data: FormData) => {
        if (editingService) {
            setServices(prev =>
                prev.map(s => s.id === editingService.id
                    ? formDataToService(data, editingService.id)
                    : s
                )
            );
        } else {
            setServices(prev => [...prev, formDataToService(data)]);
        }
        setIsFormOpen(false);
        setEditingService(null);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            setServices(prev => prev.filter(s => s.id !== id));
        }
    };

    const filteredServices = services
        .filter(service =>
            service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => a.order - b.order);

    return (
        <div>
            {isFormOpen ? (
                <AdminForm
                    title={editingService ? 'Edit Service' : 'Add New Service'}
                    fields={formFields}
                    initialData={editingService ? serviceToFormData(editingService) : undefined}
                    onSubmit={handleSubmit}
                    onCancel={() => {
                        setIsFormOpen(false);
                        setEditingService(null);
                    }}
                />
            ) : (
                <>
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-100">Services</h1>
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                        >
                            <Plus className="w-5 h-5 mr-2" />
                            Add Service
                        </button>
                    </div>

                    <div className="mb-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search services..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {filteredServices.map((service) => (
                            <div
                                key={service.id}
                                className="bg-gray-800 rounded-lg p-4 flex items-center justify-between"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={typeof service.image === 'string' ? service.image : URL.createObjectURL(service.image)}
                                        alt={service.title}
                                        className="w-16 h-16 rounded-lg object-cover"
                                    />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-lg font-semibold text-gray-100">
                                                {service.title}
                                            </h3>
                                            <span className="text-sm text-gray-400">
                                                (Order: {service.order})
                                            </span>
                                        </div>
                                        <p className="text-gray-400">
                                            {service.shortDescription}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => {
                                            setEditingService(service);
                                            setIsFormOpen(true);
                                        }}
                                        className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        <Pencil className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(service.id)}
                                        className="p-2 text-red-400 hover:text-red-300 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}

                        {filteredServices.length === 0 && (
                            <div className="text-center py-8 text-gray-400">
                                No services found.
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default AdminServices;