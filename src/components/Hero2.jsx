import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
    return (
        <>
        <div className="flex flex-col items-center mt-2 lg:mt-20">
          <div className="flex flex-col lg:flex-row justify-center items-center mt-1 w-full px-4">
            <video autoPlay loop muted className="rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
              <source src={video1} type="video/mp4" /> Your browser does not support the video tag.
            </video>
            <video autoPlay loop muted className="rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
              <source src={video2} type="video/mp4" /> Your browser does not support the video tag.
            </video>
            <video autoPlay loop muted className="rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
              <source src={video2} type="video/mp4" /> Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </>
    )
}

export default Hero