import React from "react";

export default function Colors({ hex }) {
  return (
    <div style={{ backgroundColor: hex }} className="color">
      <div className="hex-value">{hex}</div>
    </div>
  );
}
