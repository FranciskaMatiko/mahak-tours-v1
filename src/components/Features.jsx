import TourCardsSection from './TourCardsSection'

const Features = () => {
  return (
    <>
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
      <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
       Popular Activities
      </span>
      <h2 className="text-3xl  sm:text-5xl lg:text-6xll mt-10 lg:mt-20 tracking-wide font-bold">Explore the world with us</h2>
      </div>
      <TourCardsSection />
    </div>
    </>
  )
}

export default Features