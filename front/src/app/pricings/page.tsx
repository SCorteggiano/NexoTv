import React from "react";

const Pricings = () => {
  return (
    <div className="flex flex-col items-center py-16">
      <div className="m-4">
        <h1 className="text-center mb-8 text-5xl md:text-6xl font-extrabold text-white">
          Pick your subscription
        </h1>
      </div>
      <div id="pricingContainer" className="flex flex-wrap justify-center gap-8">
        {/* Free Plan */}
        <div className="bg-opacity-80 border border-white rounded-2xl text-center p-8 w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="font-bold text-4xl text-white">Free</h1>
          <hr className="my-4 border-gray-300" />
          <h2 className="mt-8 mb-8 text-5xl text-white">$0</h2>
          <ul className="text-lg text-gray-200">
            <li className="p-4">Ads</li>
            <li className="p-4">Restricted content</li>
            <li className="p-4">One device</li>
          </ul>
        </div>

        {/* Personal Plan */}
        <div className="bg-opacity-80 border border-white rounded-2xl text-center p-8 w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="font-bold text-4xl text-white">Personal</h1>
          <hr className="my-4 border-gray-300" />
          <h2 className="mt-8 mb-8 text-5xl text-white">$1.99/m</h2>
          <ul className="text-lg text-gray-200">
            <li className="p-4">Ad-free</li>
            <li className="p-4">More content to enjoy</li>
            <li className="p-4">One device</li>
          </ul>
          <div className="mt-8">
            <button className="border border-gray-300 bg-gray-200 rounded-2xl p-2 w-40 text-gray-700 hover:bg-gray-300 transition-colors duration-300">
              Next
            </button>
          </div>
        </div>

        {/* Family Plan */}
        <div className="bg-opacity-80 border border-white rounded-2xl text-center p-8 w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="font-bold text-4xl text-white">Family</h1>
          <hr className="my-4 border-gray-300" />
          <h2 className="mt-8 mb-8 text-5xl text-white">$2.99/m</h2>
          <ul className="text-lg text-gray-200">
            <li className="p-4">Ad-free</li>
            <li className="p-4">More content to enjoy</li>
            <li className="p-4">Up to 4 devices</li>
          </ul>
          <div className="mt-8">
            <button className="border border-gray-300 bg-gray-200 rounded-2xl p-2 w-40 text-gray-700 hover:bg-gray-300 transition-colors duration-300">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricings;
