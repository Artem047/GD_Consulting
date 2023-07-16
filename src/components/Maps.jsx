import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Maps = () => {
  const position = [25.186348, 55.260535];
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-[575px] rounded-[160px] my-24">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          19th floor The Exchange Tower, Business <br /> Bay, Dubai, United Arab
          Emirates
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
