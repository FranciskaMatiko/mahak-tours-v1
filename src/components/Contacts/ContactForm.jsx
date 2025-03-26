import { useState } from 'react';
import { faFacebookF, faTwitter, faInstagram ,faOpenid } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contacts } from '../../constants/index';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agree: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <div className="md:w-1/2">
          <h3 className="text-orange-500 font-medium mb-2">CONTACT</h3>
          <h2 className="text-2xl font-bold mb-4">Get In Touch Using The Form</h2>
          <p className="text-gray-600 mb-6">
            You can stop by our office for a cup of coffee and just use the contact form below for any questions and inquiries
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <span className="mr-2 text-orange-500">📍</span>
              <span>{contacts[0].address}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-orange-500">📞</span>
              <span>{contacts[0].phone1}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-orange-500">📞</span>
              <span>{contacts[0].phone1}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-orange-500">✉️</span>
              <a href={`mailto:${contacts[0].email}`} className="text-blue-600 hover:underline">{contacts[0].email}</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Aria On Social Media</h3>
            <div className="flex gap-3">
              <a href={contacts[0].facebook} className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:opacity-80">
              <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href={contacts[0].twitter} className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:opacity-80">
              <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href={contacts[0].instagram} className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:opacity-80">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href={contacts[0].unknown}className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:opacity-80">
              <FontAwesomeIcon icon={faOpenid} />
              </a>
              <a href={contacts[0].linkedin} className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:opacity-80">
                <span>in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border rounded"
            />
            <textarea
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 border rounded h-48"
            />
            <div className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                id="agree"
                checked={formData.agree}
                onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                className="w-4 h-4"
              />
              <label htmlFor="agree" className="text-sm text-gray-600">
                I agree with Aria's stated{' '}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and{' '}
                <a href="#" className="text-blue-600 hover:underline">Terms Conditions</a>
              </label>
            </div>
            <button
              type="submit"
              disabled={!formData.agree}
              className={`w-full p-3 text-white font-medium ${formData.agree ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              SUBMIT MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;