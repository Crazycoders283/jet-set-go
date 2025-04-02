import React, { useState } from 'react';
import { FaCreditCard, FaUniversity, FaWallet, FaPaypal, FaMobileAlt, FaChevronRight } from 'react-icons/fa';

const dummyData = {
  fareAmount: '5,615',
  feeInfo: '₹150 Convenience fee included',
  discountMessage: '🤩Yay! You saved ₹150 on this booking',
  flightDetails: 'Wed, 08 Jan - Akasa Air - QP1405 | 20:30 VTZ → 23:00 DEL (Non-Stop)',
  paypalInfo: 'Starting from $50/month',
  paymentOptions: [
    { icon: <FaMobileAlt />, title: 'UPI Options', description: 'Pay directly from your bank account' },
    { icon: <FaWallet />, title: 'My Wallets', description: 'AmazonPay, Mobikwik' },
    { icon: <FaUniversity />, title: 'Net Banking', description: 'Pay directly from your bank account' },
    { icon: <FaCreditCard />, title: 'Credit/Debit/ATM cards', description: 'Visa, Mastercard, Amex, Rupay and more' },
    { icon: <FaPaypal />, title: 'PayPal', description: 'Pay with PayPal' },
  ],
};

const PaymentPage = () => {
  const [selectedEMI, setSelectedEMI] = useState('credit');

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Fare Summary */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Fare Summary</h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Amount To Be Paid</span>
            <span className="text-xl font-semibold">₹{dummyData.fareAmount}</span>
          </div>
          <div className="bg-green-50 p-3 rounded-lg mb-6">
            <p className="text-green-700">{dummyData.discountMessage}</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Your Flight</h3>
              <div className="flex items-center gap-4">
                <img 
                  src="https://storage.googleapis.com/a1aa/image/AraC2XLIMRv8DWuqguZhejNEOzUqJ5D8rJWCbtT1ARE.jpg" 
                  alt="Airline Logo" 
                  className="w-12 h-12 object-contain"
                />
                <p className="text-sm text-gray-600">{dummyData.flightDetails}</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Travellers</h3>
              <p className="text-sm text-gray-600">1. Mr Chaitanya Seepana</p>
            </div>

            <div>
              <h3 className="font-medium mb-3">100% Safe Payment Process</h3>
              <div className="flex gap-4">
                <img src="https://storage.googleapis.com/a1aa/image/12Z6ExuHbVLw9-ukB1U3jwhKumJm5L75PevuBaEbhpo.jpg" alt="Visa" className="h-8 object-contain" />
                <img src="https://storage.googleapis.com/a1aa/image/8V7IUSMquw-kpXF5KA3Q4QSWdjfEpYHPVQ64KMpYUNk.jpg" alt="Safe Key" className="h-8 object-contain" />
                <img src="https://storage.googleapis.com/a1aa/image/mAJaFptogQ7aWgXfrD0eIpqm-gvrsoz3pnQ0oNnfE88.jpg" alt="MasterCard" className="h-8 object-contain" />
                <img src="https://storage.googleapis.com/a1aa/image/sKfsxrlz1UwbZst19QBvcS2yyMcJS85ahJ8dlPLW27I.jpg" alt="RuPay" className="h-8 object-contain" />
                <img src="https://storage.googleapis.com/a1aa/image/W3-JMy2ULwFARcVSFBf9veqNzY9eVmfcZmBe4LpHRZA.jpg" alt="PayPal" className="h-8 object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="space-y-6">
          {/* EMI Plans */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Popular EMI Plans</h2>
            <div className="flex gap-3 mb-4">
              <button
                className="Credit"
                onClick={() => setSelectedEMI('credit')}
              >
                Credit Card
              </button>
              <button
                className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
                  selectedEMI === 'debit'
                    ? 'bg-blue-50 text-blue-600 border border-blue-200'
                    : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedEMI('debit')}
              >
                Debit Card
              </button>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3">
                <FaPaypal className="text-blue-600 text-xl" />
                <div>
                  <p className="font-medium">PayPal</p>
                  <p className="text-sm text-gray-500">{dummyData.paypalInfo}</p>
                </div>
              </div>
              <FaChevronRight className="text-gray-400" />
            </div>
          </div>

          {/* Other Payment Options */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Other Payment Options</h2>
            <div className="space-y-3">
              {dummyData.paymentOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-blue-600 text-xl">{option.icon}</span>
                    <div>
                      <p className="font-medium">{option.title}</p>
                      <p className="text-sm text-gray-500">{option.description}</p>
                    </div>
                  </div>
                  <FaChevronRight className="text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage; 