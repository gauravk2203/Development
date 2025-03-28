import { useState } from "react";
import Pop_up from "./popup/Pop_up";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.firstName) tempErrors.firstName = "This field is required";
    if (!formData.lastName) tempErrors.lastName = "This field is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Please enter a valid email address";
    if (!formData.queryType) tempErrors.queryType = "Please select a query type";
    if (!formData.message) tempErrors.message = "This field is required";
    if (!formData.consent)
      tempErrors.consent = "To submit this form, please consent to being contacted";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <section className="bg-green-100 flex items-center justify-center min-h-screen flex-col font-Karla p-4 sm:p-8">
      {showPopup && <Pop_up />}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-Green600 ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-Green600 ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-Green600 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Query Type *</label>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <label
                className={`flex items-center space-x-2 border rounded-lg p-2 w-full cursor-pointer ${
                  formData.queryType === "General Enquiry" ? "bg-Green200" : errors.queryType ? "border-red-500" : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="queryType"
                  value="General Enquiry"
                  checked={formData.queryType === "General Enquiry"}
                  onChange={handleChange}
                  className="hidden"
                />
                <span className={`w-4 h-4 border rounded-full flex items-center justify-center`}>
                  {formData.queryType === "General Enquiry" && <span className="w-2 h-2 bg-Green600 rounded-full"></span>}
                </span>
                <span>General Enquiry</span>
              </label>
              <label
                className={`flex items-center space-x-2 border rounded-lg p-2 w-full cursor-pointer ${
                  formData.queryType === "Support Request" ? "bg-Green200" : errors.queryType ? "border-red-500" : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="queryType"
                  value="Support Request"
                  checked={formData.queryType === "Support Request"}
                  onChange={handleChange}
                  className="hidden"
                />
                <span className={`w-4 h-4 border rounded-full flex items-center justify-center`}>
                  {formData.queryType === "Support Request" && <span className="w-2 h-2 bg-Green600 rounded-full"></span>}
                </span>
                <span>Support Request</span>
              </label>
            </div>
            {errors.queryType && <p className="text-red-500 text-sm mt-1">{errors.queryType}</p>}
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message *
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-Green600 ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="form-checkbox accent-Green600"
              id="consent"
            />
            <label className="ml-2 text-sm" htmlFor="consent">I consent to being contacted by the team *</label>
          </div>
          {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
          <button
            type="submit"
            className="mt-6 w-full bg-Green600 text-white py-2 rounded-lg hover:bg-Green900 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default App;
