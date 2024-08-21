import React from "react";

const Pricings = () => {
  return (
    <div>
      <div className="border h-12">NAVBAR</div>
      <div id="wholeContainer" className="m-6 md:m-24 border">
        <div className="m-4">
          <h1 className="text-center">Elige tu Plan</h1>
        </div>
        <div id="pricingContainer" className="m-8 p-4 border flex justify-around">
          <div className="border">
            <h1>Gratuito</h1>
            <h1>$0</h1>
            <div>
              <li>Anuncios</li>
              <li>Contenido Restringido</li>
            </div>
          </div>
          <div className="border">
            <h1>Premium</h1>
            <h1>$1.99</h1>
            <div>
              <li>Sin Anuncios</li>
              <li>Acceso a contenido premium</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricings;
