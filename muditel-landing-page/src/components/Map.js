import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

export default function SimpleMap() {
  const position = [25.268934838022076, 55.340926346965794];
  const tileLayer =
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

  return (
    <div className="map-container">
      <MapContainer
        style={{ position: "relative" }}
        center={position}
        zoom={20}
        scrollWheelZoom={true}
      >
        <TileLayer attribution="" url={tileLayer} />
        <Marker color="red" position={position}>
          <Popup>
            <a href="https://bit.ly/3BbD21G" target="_blank" rel="noreferrer">
              P.O.BOX : 186334, Office 601, Golden Business Centre,UAE
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
