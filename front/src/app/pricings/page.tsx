import React from "react";

const Pricings = () => {
  return (
    <div>
      <div id="wholeContainer" className="m-24 md:m-32">
        <div className="m-4">
          <h1 className="text-center mb-4 text-6xl font-extrabold">Pick your suscription</h1>
        </div>
        <div id="pricingContainer" className="m-8 p-4 flex justify-evenly">
          <div className="border rounded-2xl text-center p-2">
            <h1 className="font-bold textxl text-4xl">Free</h1>
            <hr />
            <h1 className="mt-12 mb-10">$0</h1>
            <div>
              <li className="p-4">Ads</li>
              <li className="p-4">Restringed content</li>
              <li className="p-4">One device</li>
            </div>
          </div>
          <div className="border rounded-2xl text-center p-2">
            <h1 className="font-bold text-4xl">Personal</h1>
            <hr />
            <h1 className="mt-12 mb-10">$1.99/m</h1>
            <div>
              <li className="p-4">Ad free</li>
              <li className="p-4">More content to enjoy</li>
              <li className="p-4">One device</li>
            </div>
            <div>
              <button className="border rounded-2xl p-2 w-40">Next</button>
            </div>
          </div>
          <div className="border rounded-2xl text-center p-2">
            <h1 className="font-bold text-4xl">Family</h1>
            <hr />
            <h1 className="mt-12 mb-10">$2.99/m</h1>
            <div>
              <li className="p-4">Ad free</li>
              <li className="p-4">More content to enjoy</li>
              <li className="p-4">Up to 4 devices</li>
            </div>
            <div>
              <button className="border rounded-2xl p-2 w-40">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricings;
