import React from "react";
import airbnblogo from "../../public/images/airbnblogo.png";
export default function Navbar() {
  return (
    <nav>
      <img src={airbnblogo} className="nav--logo" />
    </nav>
  );
}
