import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

function MapView({ location }) {
  if (!location) return null;

  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={15}
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "10px"
      }}
    >
      <TileLayer
        attribution="OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[location.lat, location.lng]}>
        <Popup>Tu ubicación actual</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapView;