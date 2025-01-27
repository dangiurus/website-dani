import { useState } from 'react';

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    onLoadComplete?: () => void;
}

const Image = ({ src, alt, className = '', width, height, onLoadComplete }: ImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
        onLoadComplete?.();
    };

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 bg-gray-700 animate-pulse" />
            )}

            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                onLoad={handleLoad}
                onError={() => {
                    setError(true);
                    setIsLoading(false);
                }}
                className={`
                    w-full h-full object-cover
                    ${isLoading ? 'opacity-0' : 'opacity-100'}
                    transition-opacity duration-300
                `}
            />

            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <span className="text-gray-400">Failed to load image</span>
                </div>
            )}
        </div>
    );
};

export default Image;