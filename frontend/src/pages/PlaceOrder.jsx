import React from "react";
import CartTotals from "../component/CartTotals";

const PlaceOrder = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // browser নিজেই validation দেখাবে
    if (!e.target.checkValidity()) {
      e.target.reportValidity();
      return;
    }

    alert("Order placed successfully ✅");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12"
    >

      {/* LEFT – DELIVERY INFO */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-6 pb-3">
          DELIVERY INFORMATION
        </h2>

        <div className="space-y-4">

          <div className="flex gap-4">
            <input required type="text" placeholder="First name" className="input" />
            <input required type="text" placeholder="Last name" className="input" />
          </div>

          <input required type="email" placeholder="Email address" className="input" />
          <input required type="text" placeholder="Street" className="input" />

          <div className="flex gap-4">
            <input required type="text" placeholder="City" className="input" />
            <input required type="text" placeholder="State" className="input" />
          </div>

          <div className="flex gap-4">
            <input required type="text" placeholder="Zipcode" className="input" />
            <input required type="text" placeholder="Country" className="input" />
          </div>

          <input required type="text" placeholder="Phone" className="input" />
        </div>
      </div>

      {/* RIGHT – CART TOTALS */}
      <div className="flex flex-col gap-8">

        {/* Sticky Cart */}
        <div className="h-fit">
          <CartTotals />
        </div>

        {/* Payment – Normal Flow */}
        <div>
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

          <button
            type="submit"
            className="mt-6 w-full bg-black text-white py-3 mb-10 rounded-lg hover:bg-gray-800 transition"
          >
            PLACE ORDER
          </button>
        </div>

      </div>

    </form>
  );
};

export default PlaceOrder;
