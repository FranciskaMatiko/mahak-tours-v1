import { website } from "../constants";

const Hero = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h5 className="text-3xl-[10px] xs:text-4xl-[10px] sm:text-5xl-[10px] md:text-1xl lg:text-[30px] text-center tracking-wide mb-10 text-white ">
                Mahak Tours . Tanzania Safari  Guide
                </h5>
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-[70px] text-center tracking-wide text-white font-bold">
                Tanzania Safari 2025 <br />
                    <span className="bg-gradient-to-r from-neutral-100 to-neutral-200 text-transparent bg-clip-text">
                    Full Guide to Tanzania Tours by Mahak Tours
                    </span>
                </h1>
                <p className="mt-10 text-lg text-center text-neutral-100 max-w-4xl">Exploring all that Tanzania has
                    {website.description}
                </p>
                <div className="flex justify-center my-10">
                    <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
                        Let's Get Started
                    </a>
                    <a href="#" className="py-3 px-4 mx-3 border rounded-md text-neutral-50">
                        Learn More
                    </a>
                </div>
            </div>
        </>
    )
}

export default Hero