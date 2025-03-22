import SafariTripCard from './cards/SafariTripCard';

const SafariTripsSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SafariTripCard
        imageUrl="https://plus.unsplash.com/premium_photo-1664302702788-2d035561923e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="11 DAYS SAFARI TRIP TANZANIA ZANZIBAR"
        bullets={[
          "Big Five Encounters",
          "Breathtaking Zanzibar Beaches",
          "Arusha › Tarangire ›",
          "2 days Central Serengeti ›",
          "Ngorongoro › 6 days Zanzibar"
        ]}
        price="2132"
        isPopular={true}
      />
    </div>
  );
};

export default SafariTripsSection;