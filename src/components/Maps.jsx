import React from "react";
import {
  Circle,
  CircleMarker,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Maps = () => {
  const position = [25.186348, 55.260535];
  const fillBlueOptions = { fillColor: "blue" };

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-[575px] my-24 rounded-tr-[160px] rounded-br-[160px]">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <CircleMarker center={position} pathOptions={fillBlueOptions} radius={30}>
        <Popup>
          19th floor The Exchange Tower, Business <br /> Bay, Dubai, United Arab
          Emirates
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
};

export default Maps;
