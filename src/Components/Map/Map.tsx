import React from "react";
import "./Map.css";

interface MapProps {
  value: number;
}

const Map: React.FC <MapProps> = ({ value }) => {
  return (
    <div className="Map"> {
        value < 0 ? `-${Math.abs(value).toString().padStart(2, "0")}`: value.toString().padStart(3, "0")}
    </div>
  );
};

export default Map;