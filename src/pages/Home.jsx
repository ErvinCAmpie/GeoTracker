import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

function Home() {
  const [location, setLocation] = useState(null);

  const obtenerUbicacion = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        accuracy: position.coords.accuracy,
      });
    });
  };

  return (
    <div className="dashboard">
      <div className="panel">
        <h1>📍 GeoTracker</h1>

        <button onClick={obtenerUbicacion}>
          Obtener ubicación
        </button>

        {location && (
          <div className="info">
            <p>
              <strong>Latitud:</strong> {location.lat.toFixed(6)}
            </p>

            <p>
              <strong>Longitud:</strong> {location.lng.toFixed(6)}
            </p>

            <p>
              <strong>Precisión:</strong>{" "}
              {Math.round(location.accuracy)} m
            </p>
          </div>
        )}
      </div>

      <div className="mapa">
        {location ? (
          <MapContainer
            center={[location.lat, location.lng]}
            zoom={15}
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={[location.lat, location.lng]}>
              <Popup>Tu ubicación actual</Popup>
            </Marker>
          </MapContainer>
        ) : (
          <div className="placeholder">
            Presiona el botón para obtener tu ubicación
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;