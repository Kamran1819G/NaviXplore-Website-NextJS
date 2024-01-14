import React from "react";

const NaviMumbaiMetroMap = () => {
  return (
    <>
      <div className="page-heading-section">
        <span className="page-heading text-4xl">Navi Mumbai Metro Map</span>
      </div>

      <div className="container mx-auto">
        <div className="lg:col-span-12 mt-4 mb-4">
          <iframe
            title="Navi Mumbai Metro Map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1ID2BEAYf5WROOG7Z-4VG8EVF_vgulyQ&ehbc=2E312F&noprof=1"
            className="w-full h-screen"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default NaviMumbaiMetroMap;
