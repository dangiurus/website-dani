import { useState, useEffect } from 'react';
import { Upload, X, Plus, Save } from 'lucide-react';

interface FormField {
    name: string;
    label: string;
    type: 'text' | 'textarea' | 'image' | 'list';
    placeholder?: string;
    required?: boolean;
}

export interface FormData {
    [key: string]: string | File | string[];
}

interface FormErrors {
    [key: string]: string;
}

interface ImagePreviews {
    [key: string]: string;
}

interface AdminFormProps {
    title: string;
    fields: FormField[];
    initialData?: FormData;
    onSubmit: (data: FormData) => void;
    onCancel: () => void;
}

const AdminForm = ({ title, fields, initialData, onSubmit, onCancel }: AdminFormProps) => {
    const [formData, setFormData] = useState<FormData>(initialData || {});
    const [errors, setErrors] = useState<FormErrors>({});
    const [imagePreview, setImagePreview] = useState<ImagePreviews>({});

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleImageUpload = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview((prev: ImagePreviews) => ({
                ...prev,
                [field]: previewUrl
            }));

            setFormData((prev: FormData) => ({
                ...prev,
                [field]: file
            }));
        }
    };

    const handleListItemAdd = (field: string) => {
        const currentList = (formData[field] as string[]) || [];
        setFormData((prev: FormData) => ({
            ...prev,
            [field]: [...currentList, '']
        }));
    };

    const handleListItemRemove = (field: string, index: number) => {
        const currentList = (formData[field] as string[]) || [];
        setFormData((prev: FormData) => ({
            ...prev,
            [field]: currentList.filter((_: string, i: number) => i !== index)
        }));
    };

    const handleListItemChange = (field: string, index: number, value: string) => {
        const currentList = [...((formData[field] as string[]) || [])];
        currentList[index] = value;
        setFormData((prev: FormData) => ({
            ...prev,
            [field]: currentList
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: FormErrors = {};
        fields.forEach(field => {
            if (field.required && !formData[field.name]) {
                newErrors[field.name] = `${field.label} is required`;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onSubmit(formData);
    };

    const removeImage = (field: string) => {
        const newFormData = { ...formData };
        delete newFormData[field];
        setFormData(newFormData);

        const newImagePreview = { ...imagePreview };
        if (newImagePreview[field]) {
            URL.revokeObjectURL(newImagePreview[field]);
            delete newImagePreview[field];
        }
        setImagePreview(newImagePreview);
    };


    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-100">{title}</h2>
                <div className="space-x-4">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 text-gray-400 hover:text-gray-100 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                        <Save className="w-4 h-4 mr-2" />
                        Save
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {fields.map(field => (
                    <div key={field.name}>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            {field.label}
                            {field.required && <span className="text-red-500 ml-1">*</span>}
                        </label>

                        {field.type === 'text' && (
                            <input
                                type="text"
                                value={(formData[field.name] as string) || ''}
                                onChange={e => {
                                    setFormData((prev: FormData) => ({
                                        ...prev,
                                        [field.name]: e.target.value
                                    }));
                                    if (errors[field.name]) {
                                        const newErrors = { ...errors };
                                        delete newErrors[field.name];
                                        setErrors(newErrors);
                                    }
                                }}
                                placeholder={field.placeholder}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        )}

                        {field.type === 'textarea' && (
                            <textarea
                                value={(formData[field.name] as string) || ''}
                                onChange={e => {
                                    setFormData((prev: FormData) => ({
                                        ...prev,
                                        [field.name]: e.target.value
                                    }));
                                    if (errors[field.name]) {
                                        const newErrors = { ...errors };
                                        delete newErrors[field.name];
                                        setErrors(newErrors);
                                    }
                                }}
                                placeholder={field.placeholder}
                                rows={4}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        )}

                        {field.type === 'image' && (
                            <div className="space-y-2">
                                <div className="flex items-center space-x-4">
                                    <label className="flex items-center justify-center px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                                        <Upload className="w-4 h-4 mr-2" />
                                        <span className="text-gray-300">Choose File</span>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => handleImageUpload(field.name, e)}
                                        />
                                    </label>
                                    {imagePreview[field.name] && (
                                        <button
                                            type="button"
                                            onClick={() => removeImage(field.name)}
                                            className="px-2 py-1 text-red-400 hover:text-red-300"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                                {imagePreview[field.name] && (
                                    <div className="relative w-32 h-32">
                                        <img
                                            src={imagePreview[field.name]}
                                            alt="Preview"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                )}
                            </div>
                        )}

                        {field.type === 'list' && (
                            <div className="space-y-2">
                                {((formData[field.name] as string[]) || []).map((item: string, index: number) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            value={item}
                                            onChange={(e) => handleListItemChange(field.name, index, e.target.value)}
                                            className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleListItemRemove(field.name, index)}
                                            className="p-2 text-red-400 hover:text-red-300"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => handleListItemAdd(field.name)}
                                    className="flex items-center px-4 py-2 text-gray-300 hover:text-gray-100"
                                >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add Item
                                </button>
                            </div>
                        )}

                        {errors[field.name] && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors[field.name]}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </form>
    );
};

export default AdminForm;

