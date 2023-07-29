// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <div className="border-t tracking-wide my-4 text-lg p-1 border-brown bg-brown bg-opacity-10 flex justify-center items-center flex-col">
      Follow us on -{" "}
      <p className="text-lg my-2">
        <span className="hover:underline underline-offset-1">Instagram</span>/
        <span></span>
        <span className="hover:underline underline-offset-1">Twitter</span>/
        <span></span>
        <span className="hover:underline underline-offset-1">Facebook</span>
      </p>
    </div>
  );
};

export default Footer;
