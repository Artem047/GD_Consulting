import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const Maps = () => {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [25.186348, 55.260535], zoom: 10 }}
        className="w-full h-[575px]">
        <Placemark geometry={[25.186348, 55.260535]} />
      </Map>
    </YMaps>
  );
};

export default Maps;
