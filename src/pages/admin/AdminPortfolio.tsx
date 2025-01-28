import { useState } from 'react';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import AdminForm, { FormData } from '../../components/admin/AdminForm.tsx';

interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    description: string;
    challenge: string;
    solution: string;
    location: string;
    date: string;
    images: (string | File)[];
    features: string[];
    totalValue?: string;
    clientName?: string;
}

const portfolioToFormData = (item: PortfolioItem): FormData => {
    return {
        title: item.title,
        category: item.category,
        description: item.description,
        challenge: item.challenge,
        solution: item.solution,
        location: item.location,
        date: item.date,
        // Convert images array to single image for form
        image: item.images[0], // Using first image only since form expects single image
        features: item.features,
        totalValue: item.totalValue || '',
        clientName: item.clientName || ''
    };
};

const formDataToPortfolio = (formData: FormData, id?: number): PortfolioItem => {
    return {
        id: id || Date.now(),
        title: formData.title as string,
        category: formData.category as string,
        description: formData.description as string,
        challenge: formData.challenge as string,
        solution: formData.solution as string,
        location: formData.location as string,
        date: formData.date as string,
        // Convert single form image to array
        images: [formData.image as string | File],
        features: formData.features as string[],
        totalValue: formData.totalValue as string,
        clientName: formData.clientName as string
    };
};

const formFields = [
    {
        name: 'title',
        label: 'Project Title',
        type: 'text' as const,
        required: true,
        placeholder: 'Enter project title'
    },
    {
        name: 'category',
        label: 'Category',
        type: 'text' as const,
        required: true,
        placeholder: 'e.g., Residential, Industrial, Commercial'
    },
    {
        name: 'description',
        label: 'Description',
        type: 'textarea' as const,
        required: true,
        placeholder: 'Project description'
    },
    {
        name: 'challenge',
        label: 'Challenge',
        type: 'textarea' as const,
        required: true,
        placeholder: 'What challenges did this project present?'
    },
    {
        name: 'solution',
        label: 'Solution',
        type: 'textarea' as const,
        required: true,
        placeholder: 'How did we solve these challenges?'
    },
    {
        name: 'location',
        label: 'Location',
        type: 'text' as const,
        required: true,
        placeholder: 'Project location'
    },
    {
        name: 'date',
        label: 'Completion Date',
        type: 'text' as const,
        required: true,
        placeholder: 'e.g., December 2024'
    },
    {
        name: 'images',
        label: 'Project Images',
        type: 'image' as const,
        required: true
    },
    {
        name: 'features',
        label: 'Key Features',
        type: 'list' as const,
        required: true
    },
    {
        name: 'totalValue',
        label: 'Total Project Value',
        type: 'text' as const,
        required: false,
        placeholder: 'Optional: Total project value'
    },
    {
        name: 'clientName',
        label: 'Client Name',
        type: 'text' as const,
        required: false,
        placeholder: 'Optional: Client name'
    }
];

const AdminPortfolio = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');

    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([
        {
            id: 1,
            title: 'Ansamblu Rezidential Green Park',
            category: 'Residential',
            description: 'Complex residential project with modern fencing solutions.',
            challenge: 'Integration of security systems with aesthetic requirements.',
            solution: 'Custom modular design with integrated access control.',
            location: 'Bucharest, Sector 1',
            date: 'December 2024',
            images: ['/images/portfolio/green-park-1.jpg'],
            features: ['400m total length', 'Automated gates', 'Intercom system'],
            totalValue: '€120,000',
            clientName: 'Green Park Development'
        }
    ]);

    const handleSubmit = (data: FormData) => {
        if (editingItem) {
            setPortfolioItems(prev =>
                prev.map(item => item.id === editingItem.id
                    ? formDataToPortfolio(data, editingItem.id)
                    : item
                )
            );
        } else {
            setPortfolioItems(prev => [...prev, formDataToPortfolio(data)]);
        }
        setIsFormOpen(false);
        setEditingItem(null);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this portfolio item?')) {
            setPortfolioItems(prev => prev.filter(item => item.id !== id));
        }
    };

    const categories = ['all', ...new Set(portfolioItems.map(item => item.category.toLowerCase()))];

    const filteredItems = portfolioItems.filter(item => {
        const matchesSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
            categoryFilter === 'all' ||
            item.category.toLowerCase() === categoryFilter;

        return matchesSearch && matchesCategory;
    });

    return (
        <div>
            {isFormOpen ? (
                <AdminForm
                    title={editingItem ? 'Edit Portfolio Item' : 'Add Portfolio Item'}
                    fields={formFields}
                    initialData={editingItem ? portfolioToFormData(editingItem) : undefined}
                    onSubmit={handleSubmit}
                    onCancel={() => {
                        setIsFormOpen(false);
                        setEditingItem(null);
                    }}
                />
            ) : (
                <>
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-100">Portfolio</h1>
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                        >
                            <Plus className="w-5 h-5 mr-2" />
                            Add Portfolio Item
                        </button>
                    </div>

                    <div className="mb-6 space-y-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search portfolio items..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setCategoryFilter(category)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                        categoryFilter === category
                                            ? 'bg-orange-600 text-white'
                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-gray-800 rounded-lg p-4"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex space-x-4">
                                        <div className="w-32 h-24">
                                            <img
                                                src={typeof item.images[0] === 'string'
                                                    ? item.images[0]
                                                    : URL.createObjectURL(item.images[0])}
                                                alt={item.title}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="text-lg font-semibold text-gray-100">
                                                    {item.title}
                                                </h3>
                                                <span className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                                                    {item.category}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 text-sm mb-2">
                                                {item.location} • {item.date}
                                            </p>
                                            <p className="text-gray-400 line-clamp-2">
                                                {item.description}
                                            </p>
                                            {item.clientName && (
                                                <p className="text-gray-500 text-sm mt-2">
                                                    Client: {item.clientName}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                        <button
                                            onClick={() => {
                                                setEditingItem(item);
                                                setIsFormOpen(true);
                                            }}
                                            className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            <Pencil className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="p-2 text-red-400 hover:text-red-300 transition-colors"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {item.features.map((feature, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {filteredItems.length === 0 && (
                            <div className="text-center py-8 text-gray-400">
                                No portfolio items found.
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default AdminPortfolio;