// src/components/common/FormInput.tsx
import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface BaseFormInputProps {
    label: string;
    error?: string;
    multiline?: boolean;
    rows?: number;
}

type InputProps = BaseFormInputProps & InputHTMLAttributes<HTMLInputElement>;
type TextAreaProps = BaseFormInputProps & TextareaHTMLAttributes<HTMLTextAreaElement>;
type FormInputProps = InputProps | TextAreaProps;

const FormInput = ({
                       label,
                       error,
                       multiline = false,
                       rows = 4,
                       className = '',
                       ...props
                   }: FormInputProps) => {
    const baseClassName = `w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
        error ? 'border-red-500' : 'border-gray-300'
    } ${className}`;

    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>
            {multiline ? (
                <textarea
                    rows={rows}
                    className={baseClassName}
                    {...(props as TextAreaProps)}
                />
            ) : (
                <input
                    className={baseClassName}
                    {...(props as InputProps)}
                />
            )}
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
};

export default FormInput;