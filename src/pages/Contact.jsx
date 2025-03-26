
import ContactForm from '../components/Contacts/ContactForm';
const Contact = () => {
  return (
  <>
   <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://cloudfront.safaribookings.com/blog/2022/01/00-the-best-east-african-safari-tours-BW-header1200px.jpg')" }}>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-white">Contact</h1>
      </div>
    </div>
    <ContactForm />
  </>
 
  )
}

export default Contact;