import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Skeleton from '../common/Skeleton';

interface MapComponentProps {
    center: [number, number];
    zoom?: number;
    popupText?: string;
}

const MapComponent = ({ center, zoom = 13, popupText = "Ne găsiți aici!" }: MapComponentProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        try {
            delete (L.Icon.Default.prototype as any)._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            });
            setIsLoading(false);
        } catch (error) {
            console.error('Error initializing map:', error);
            setHasError(true);
            setIsLoading(false);
        }
    }, []);

    if (hasError) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-gray-800 rounded-lg">
                <p className="text-gray-400">Nu s-a putut încărca harta. Vă rugăm încercați mai târziu.</p>
            </div>
        );
    }

    if (isLoading) {
        return <Skeleton className="w-full h-full rounded-lg" />;
    }

    return (
        <MapContainer
            center={center}
            zoom={zoom}
            className="w-full h-full rounded-lg"
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
                <Popup>
                    <div className="text-center">
                        <strong className="text-gray-900">MetalCraft Workshop</strong>
                        <br />
                        {popupText}
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;