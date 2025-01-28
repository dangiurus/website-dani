import { useState } from 'react';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import AdminForm, { FormData } from '../../components/admin/AdminForm.tsx';

interface Product {
    id: number;
    title: string;
    description: string;
    shortDescription: string;
    image: string | File;
    features: string[];
    price: string;
    category: string;
}

// Convert Product to FormData
const productToFormData = (product: Product): FormData => {
    return {
        title: product.title,
        description: product.description,
        shortDescription: product.shortDescription,
        image: product.image,
        features: product.features,
        price: product.price,
        category: product.category
    };
};

// Convert FormData to Product
const formDataToProduct = (formData: FormData, id?: number): Product => {
    return {
        id: id || Date.now(),
        title: formData.title as string,
        description: formData.description as string,
        shortDescription: formData.shortDescription as string,
        image: formData.image as string | File,
        features: formData.features as string[],
        price: formData.price as string,
        category: formData.category as string
    };
};

const formFields = [
    {
        name: 'title',
        label: 'Product Title',
        type: 'text' as const,
        required: true,
        placeholder: 'Enter product title'
    },
    {
        name: 'shortDescription',
        label: 'Short Description',
        type: 'text' as const,
        required: true,
        placeholder: 'Brief description for product cards'
    },
    {
        name: 'description',
        label: 'Full Description',
        type: 'textarea' as const,
        required: true,
        placeholder: 'Detailed product description'
    },
    {
        name: 'image',
        label: 'Product Image',
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
        name: 'price',
        label: 'Price',
        type: 'text' as const,
        required: true,
        placeholder: 'e.g., "from 200 RON/ml"'
    },
    {
        name: 'category',
        label: 'Category',
        type: 'text' as const,
        required: true,
        placeholder: 'Product category'
    }
];

const AdminProducts = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    // In a real app, this would come from your backend
    const [products, setProducts] = useState<Product[]>([
        {
            id: 1,
            title: 'Gard Metalic Modern',
            shortDescription: 'Gard metalic cu design modern',
            description: 'Gard metalic cu design modern și durabil...',
            image: '/images/products/gard-1.jpg',
            features: ['Decupaje laser', 'Finisaj premium'],
            price: 'de la 200 RON/ml',
            category: 'Garduri'
        }
        // Add more sample products...
    ]);

    const handleSubmit = (data: FormData) => {
        if (editingProduct) {
            // Update existing product
            setProducts(prev =>
                prev.map(p => p.id === editingProduct.id
                    ? formDataToProduct(data, editingProduct.id)
                    : p
                )
            );
        } else {
            // Add new product
            setProducts(prev => [...prev, formDataToProduct(data)]);
        }
        setIsFormOpen(false);
        setEditingProduct(null);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            setProducts(prev => prev.filter(p => p.id !== id));
        }
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {isFormOpen ? (
                <AdminForm
                    title={editingProduct ? 'Edit Product' : 'Add New Product'}
                    fields={formFields}
                    initialData={editingProduct ? productToFormData(editingProduct) : undefined}
                    onSubmit={handleSubmit}
                    onCancel={() => {
                        setIsFormOpen(false);
                        setEditingProduct(null);
                    }}
                />
            ) : (
                <>
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-100">Products</h1>
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                        >
                            <Plus className="w-5 h-5 mr-2" />
                            Add Product
                        </button>
                    </div>

                    <div className="mb-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-gray-800 rounded-lg p-4 flex items-center justify-between"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={typeof product.image === 'string' ? product.image : URL.createObjectURL(product.image)}
                                        alt={product.title}
                                        className="w-16 h-16 rounded-lg object-cover"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-100">
                                            {product.title}
                                        </h3>
                                        <p className="text-gray-400">
                                            {product.shortDescription}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => {
                                            setEditingProduct(product);
                                            setIsFormOpen(true);
                                        }}
                                        className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        <Pencil className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product.id)}
                                        className="p-2 text-red-400 hover:text-red-300 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-8 text-gray-400">
                                No products found.
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default AdminProducts;