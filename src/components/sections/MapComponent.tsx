// src/components/sections/MapComponent.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix pentru iconița marker-ului care nu se încarcă corect în React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapComponentProps {
    center: [number, number]; // [latitude, longitude]
    zoom?: number;
    popupText?: string;
}

const MapComponent = ({ center, zoom = 13, popupText = "Ne găsiți aici!" }: MapComponentProps) => {
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
                        <strong>MetalCraft Workshop</strong>
                        <br />
                        {popupText}
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;