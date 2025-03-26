import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TeamMember = ({ name, designation, imageSrc }) => {

  return (
    <div className="max-w-md mx-4 mb-8">
      <div className="relative">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-96 object-cover rounded-t-lg"
        />
        <div className="absolute bottom-0 left-0 w-full flex justify-center pb-4">
          <a href="#" className="bg-orange-500 text-white p-2 rounded mx-1">
          <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="bg-orange-500 text-white p-2 rounded mx-1">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="bg-orange-500 text-white p-2 rounded mx-1">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="bg-white p-4 rounded-b-lg text-center">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-600">{designation}</p>
      </div>
    </div>
  );
};

const OurTeam = () => {

const img1 = "https://scontent.fdar12-1.fna.fbcdn.net/v/t39.30808-6/383995903_1057245188792839_1215302921373616826_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Vvjk22k0LrgQ7kNvgEBMjYI&_nc_oc=Adk_6wvbQ6p4lAEz3dAH_ffMRDHBbSNdNKNttaj-Pc0nwbuWmBO8K37fExF9ss0WcS0&_nc_zt=23&_nc_ht=scontent.fdar12-1.fna&_nc_gid=0eacxwbjL2CnuZPJPsyaVg&oh=00_AYE5y1tUk_F4BebOqoT0s4eoJy77P_x9CdTwIvNPgt-wjw&oe=67E9ABC5";
const img2 = "https://i.pinimg.com/originals/63/df/9b/63df9b386ad9d1a6b1336e4875d2b0b5.jpg";
const img3 = "https://i.pinimg.com/originals/25/f6/6e/25f66e08ee01e563086bb5723b40ae1b.jpg";
const img4 = "https://img.freepik.com/premium-photo/portrait-young-muslim-man-wearing-hijab-created-with-generative-ai_762026-49320.jpg";
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Team Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-orange-500 font-medium mb-2" style={{ display: 'inline-block', position: 'relative' }}>
            OUR TEAM
            <span style={{ position: 'absolute', width: '30px', height: '1px', backgroundColor: '#ddd', top: '50%', left: '-40px', transform: 'translateY(-50%)' }}></span>
            <span style={{ position: 'absolute', width: '30px', height: '1px', backgroundColor: '#ddd', top: '50%', right: '-40px', transform: 'translateY(-50%)' }}></span>
          </h2>
          <h3 className="text-4xl font-bold mb-4">
            Explore Our <span className="text-orange-500">STAFFS</span>
          </h3>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <TeamMember
            name="Fransiska Matiko"
            designation="Senior Developer"
            imageSrc={img2}
          />
          
          {/* Team Member 2 */}
          <TeamMember
            name="ELIA WILLIAM MARIKI"
            designation="Senior Developer"
            imageSrc={img1}
          />
          
          {/* Team Member 3 */}
          <TeamMember
            name="Sabrina Mselem"
            designation="Accountant"
            imageSrc={img3}
          />
          
          {/* Team Member 4 */}
          <TeamMember
            name="Said Mwakatobe"
            designation="Tour guide"
            imageSrc={img4}
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;