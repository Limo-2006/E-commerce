import React from "react";
import CartTotals from "../component/CartTotals";

const PlaceOrder = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">

      {/* LEFT – DELIVERY INFO */}
      <div>
        <h2 className="text-xl font-semibold mb-6">
          DELIVERY INFORMATION
        </h2>

        <form className="space-y-4">
          <div className="flex gap-4">
            <input type="text" placeholder="First name" className="input" />
            <input type="text" placeholder="Last name" className="input" />
          </div>

          <input type="email" placeholder="Email address" className="input" />
          <input type="text" placeholder="Street" className="input" />

          <div className="flex gap-4">
            <input type="text" placeholder="City" className="input" />
            <input type="text" placeholder="State" className="input" />
          </div>

          <div className="flex gap-4">
            <input type="text" placeholder="Zipcode" className="input" />
            <input type="text" placeholder="Country" className="input" />
          </div>

          <input type="text" placeholder="Phone" className="input" />
        </form>
      </div>

      {/* RIGHT – CART TOTALS */}
      <div>
        <CartTotals />

        {/* PAYMENT */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">
            PAYMENT METHOD
          </h2>

          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              Stripe
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="payment" defaultChecked />
              Cash on Delivery
            </label>
          </div>

          <button className="mt-6 w-full bg-black text-white py-3">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
