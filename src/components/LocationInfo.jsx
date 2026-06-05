function LocationInfo({ location }) {
  if (!location) return null;

  return (
    <div className="info-card">
      <h3>Ubicación Actual</h3>

      <p>
        <strong>Latitud:</strong> {location.lat}
      </p>

      <p>
        <strong>Longitud:</strong> {location.lng}
      </p>

      <p>
        <strong>Precisión:</strong>{" "}
        {Math.round(location.accuracy)} metros
      </p>
    </div>
  );
}

export default LocationInfo;