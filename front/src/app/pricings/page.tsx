import React from "react";
import CheckoutButton from "@/components/CheckoutButton/CheckoutButton";

const Pricings = () => {
  const monthly = "price_1PswZlDxc1HrUJzd32gljNEt";
  const annual = "price_1PswaaDxc1HrUJzd0EFNFdos";

  return (
    <div className="flex flex-col items-center py-16">
      <div className="m-4">
        <h1 className="text-center mb-8 text-5xl md:text-6xl font-extrabold text-white">
          Pick your subscription
        </h1>
      </div>
      <div
        id="pricingContainer"
        className="flex flex-wrap justify-center gap-8"
      >
        {/* Free Plan */}
        <div className="bg-opacity-80 border border-white rounded-2xl text-center p-8 w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="font-bold text-4xl text-white">Free</h1>
          <hr className="my-4 border-gray-300" />
          <h2 className="mt-8 mb-8 text-5xl text-white">$0</h2>
          <ul className="text-lg text-gray-200">
            <li className="p-4">Ads</li>
            <li className="p-4">Restricted content</li>
          </ul>
        </div>

        {/* Personal Plan */}
        <div className="bg-opacity-80 border border-white rounded-2xl text-center p-8 w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="font-bold text-4xl text-white">Monthly</h1>
          <hr className="my-4 border-gray-300" />
          <h2 className="mt-8 mb-8 text-5xl text-white">$10/m</h2>
          <ul className="text-lg text-gray-200">
            <li className="p-4">Ad-free</li>
            <li className="p-4">More content to enjoy</li>
          </ul>
          <div className="mt-8">
            <CheckoutButton priceId={monthly} />
          </div>
        </div>

        {/* Family Plan */}
        <div className="bg-opacity-80 border border-white rounded-2xl text-center p-8 w-80 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="font-bold text-4xl text-white">Annual</h1>
          <hr className="my-4 border-gray-300" />
          <h2 className="mt-8 mb-8 text-5xl text-white">$100/m</h2>
          <ul className="text-lg text-gray-200">
            <li className="p-4">Ad-free</li>
            <li className="p-4">Save up to $20</li>
          </ul>
          <div className="mt-8">
            <CheckoutButton priceId={annual} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricings;
