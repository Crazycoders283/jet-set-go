const PaymentPage = () => {
    const [selectedEMI, setSelectedEMI] = useState('credit');
  
    return (
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Fare Summary - Left Section */}
          <div className="col-span-8 bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Fare Summary</h2>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Amount To Be Paid</span>
              <span className="text-xl font-semibold">₹{dummyData.fareAmount}</span>
            </div>
            <div className="bg-green-50 p-3 rounded-lg mb-6">
              <p className="text-green-700">{dummyData.discountMessage}</p>
            </div>
  
            {/* Flight and Traveller Details */}
            <div className="space-y-6">
              {/* Flight Info */}
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
  
              {/* Traveller Info */}
              <div>
                <h3 className="font-medium mb-2">Travellers</h3>
                <p className="text-sm text-gray-600">1. Mr Chaitanya Seepana</p>
              </div>
  
              {/* Payment Security */}
              <div>
                <h3 className="font-medium mb-3">100% Safe Payment Process</h3>
                <div className="flex gap-4">
                  {/* Payment Icons */}
                  {['Visa', 'Safe Key', 'MasterCard', 'RuPay', 'PayPal'].map((icon, index) => (
                    <img 
                      src={`https://your-image-url/${icon}.jpg`} 
                      alt={icon} 
                      className="h-8 object-contain" 
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
  
          {/* Payment Options - Right Section */}
          <div className="col-span-4 space-y-6">
            {/* EMI Plans */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Popular EMI Plans</h2>
              <div className="flex gap-3 mb-4">
                <button
                  className= "Credit"
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
              {/* PayPal Section */}
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