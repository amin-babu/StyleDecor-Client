import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CoverageMap = () => {
  const position = [22.3569, 91.7832];
  const mapRef = useRef(null);
  
  const areas = [
    { id: 1, name: "GEC Circle", latitude: 22.3654, longitude: 91.8225 },
    { id: 2, name: "Agrabad", latitude: 22.3246, longitude: 91.8313 },
    { id: 3, name: "2 No Gate", latitude: 22.3795, longitude: 91.7901 },
    { id: 4, name: "Bahaddarhat", latitude: 22.3411, longitude: 91.8312 },
    { id: 5, name: "Halishahar", latitude: 22.2901, longitude: 91.7870 },
  ];

  return (
    <div className="py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Service Coverage Area
      </h2>
      <p className="text-center text-gray-600 mt-1">
        We provide decoration services across major areas in Chittagong.
      </p>

      <div className="border relative z-10 h-[70vh] mt-6 rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={position}
          zoom={12}
          scrollWheelZoom={true}
          className="h-[70vh] w-full"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {areas.map((area) => (
            <Marker
              key={area.id}
              position={[area.latitude, area.longitude]}
            >
              <Popup>
                <strong>{area.name}</strong> <br />
                Chittagong Service Area
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CoverageMap;
