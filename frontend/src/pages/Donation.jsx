import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Donation = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // donation submission 
    alert('Thank you for your donation!');
    // ('/thankyou');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e0f2f1] p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-[#004d40] mb-4 text-center">
          Support Our Alumni Association
        </h2>
        <p className="mb-6 text-center">
          Your donation will help us continue our mission and support alumni activities.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="name" className="mt-4 font-semibold text-[#004d40]">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-2 p-3 border-2 border-[#004d40] rounded-lg bg-gray-100 focus:bg-[#e0f7fa] focus:border-[#00796b]"
          />

          <label htmlFor="email" className="mt-4 font-semibold text-[#004d40]">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-2 p-3 border-2 border-[#004d40] rounded-lg bg-gray-100 focus:bg-[#e0f7fa] focus:border-[#00796b]"
          />

          <label htmlFor="amount" className="mt-4 font-semibold text-[#004d40]">Donation Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="1"
            required
            className="mt-2 p-3 border-2 border-[#004d40] rounded-lg bg-gray-100 focus:bg-[#e0f7fa] focus:border-[#00796b]"
          />

          <label htmlFor="payment-method" className="mt-4 font-semibold text-[#004d40]">Payment Method</label>
          <select
            id="payment-method"
            name="payment-method"
            required
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            className="mt-2 p-3 border-2 border-[#004d40] rounded-lg bg-gray-100 focus:bg-[#e0f7fa] focus:border-[#00796b]"
          >
            <option value="">Select Payment Method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>

          {paymentMethod === 'credit-card' && (
            <div id="credit-card-info" className="mt-4 space-y-4">
              <label htmlFor="card-number" className="font-semibold text-[#004d40]">Card Number</label>
              <input
                type="text"
                id="card-number"
                name="card-number"
                required
                className="p-3 border-2 border-[#004d40] rounded-lg bg-gray-100 focus:bg-[#e0f7fa] focus:border-[#00796b]"
              />

              <label htmlFor="expiry-date" className="font-semibold text-[#004d40]">Expiry Date</label>
              <input
                type="text"
                id="expiry-date"
                name="expiry-date"
                placeholder="MM/YY"
                required
                className="p-3 border-2 border-[#004d40] rounded-lg bg-gray-100 focus:bg-[#e0f7fa] focus:border-[#00796b]"
              />

              <label htmlFor="cvv" className="font-semibold text-[#004d40]">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                required
                className="p-3 border-2 border-[#004d40] rounded-lg bg-gray-100 focus:bg-[#e0f7fa] focus:border-[#00796b]"
              />
            </div>
          )}

          {paymentMethod === 'paypal' && (
            <div id="paypal-info" className="mt-4">
              <p className="text-[#004d40]">
                You will be redirected to PayPal to complete your donation.
              </p>
            </div>
          )}

          <button
            type="submit"
            className="mt-6 p-3 bg-[#004d40] text-white font-semibold rounded-lg hover:bg-[#00796b] transition transform hover:-translate-y-1"
          >
            Donate Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donation;
