import { useState } from 'react';
import { faFacebookF, faTwitter, faInstagram ,faOpenid } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contacts } from '../../constants/index';

const FAQ = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agree: false
  });

  const [faqOpen, setFaqOpen] = useState(null);

  const handleFaqClick = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqData = [
    { question: "Why choose Elegant Themes?", answer: "Our themes provide flexibility, customization, and continuous updates. They're built with performance in mind and offer excellent support." },
    { question: "Can I use the themes and plugins on multiple websites?", answer: "Yes, with a valid license you can use our products on multiple websites according to our terms of service." },
    { question: "What if I change my mind and want a refund?", answer: "We offer a 30-day money-back guarantee if you're not satisfied with our products." },
    { question: "Can I upgrade to a different package after signing up?", answer: "Absolutely! You can upgrade your package at any time through your account dashboard." },
    { question: "Can I use your themes on WordPress.com", answer: "Our themes are designed for WordPress.org self-hosted installations, not WordPress.com." },
    { question: "Can I use Elegant Themes products for my clients?", answer: "Yes, you can use our products for client websites with a valid license." },
    { question: "What happens if I cancel my subscription?", answer: "You'll retain access to our products until the end of your billing period." },
    { question: "Can I buy a single product instead of becoming a full member?", answer: "We offer both single product purchases and full membership options." },
    { question: "Will your themes work with third party plugins?", answer: "Our themes are compatible with most popular WordPress plugins." },
    { question: "Do I need to install the Divi Builder plugin with the Divi Theme?", answer: "The Divi Theme works independently, but the Divi Builder plugin unlocks additional features." }
  ];


  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="border-b pb-4 mb-4 last:border-b-0 hover:cursor-pointer" onClick={() => handleFaqClick(index)}>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{item.question}</h3>
                <span className={`text-orange-600 ${faqOpen === index ? 'rotate-180' : ''}`}>+</span>
              </div>
              {faqOpen === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>    
    </div>
  );
};

export default FAQ;