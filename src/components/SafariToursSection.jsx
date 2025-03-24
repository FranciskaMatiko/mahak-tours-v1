import SafariTourCard from './cards/SafariTourCard';

const SafariToursSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SafariTourCard
          imageUrl="https://www.lakemanyaranationalparks.com/wp-content/uploads/2021/02/Serengeti-National-Park-725x450.jpg"
          title="5 Days Tanzania Luxury Safari"
          location="Serengeti National Park"
          price="2100.00"
          duration="5"
          groupSize="10"
          rating={5}
          isFeatured={true}
          hasVideo={true}
        />
        <SafariTourCard
          imageUrl="https://www.tanzania-experience.com/wp-content/uploads/2024/01/serengeti-national-park.jpg"
          title="Fly-In Safari From Arusha To Serengeti"
          location="From Arusha To Serengeti"
          price="4260.00"
          duration="5"
          groupSize="10"
          rating={5}
          isFeatured={true}
          hasVideo={true}
        />
        <SafariTourCard
          imageUrl="https://kilisatours.com/images/tour-safari/4-days-budgeted-camping-safari-serengeti-ngorongoro-banner.jpg"
          title="5 Days Northern Tanzania Budget Camping Safari"
          location="Tanzania"
          price="1500.00"
          duration="5"
          groupSize="12"
          rating={5}
          isFeatured={true}
          hasVideo={true}
        />
      </div>
    </div>
  );
};

export default SafariToursSection;