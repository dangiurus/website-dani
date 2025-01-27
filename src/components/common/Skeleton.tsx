interface SkeletonProps {
    className?: string;
    variant?: 'rectangular' | 'circular' | 'text';
}

const Skeleton = ({ className = '', variant = 'rectangular' }: SkeletonProps) => {
    const baseClasses = 'animate-pulse bg-gray-700';
    const variantClasses = {
        rectangular: '',
        circular: 'rounded-full',
        text: 'rounded'
    };

    return (
        <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
    );
};

export default Skeleton;