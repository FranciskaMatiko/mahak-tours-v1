import TourCard from './cards/TourCard';

const TourCardsSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <TourCard
          title="Wildlife"
          subtitle="Safaris"
          imageUrl="https://plus.unsplash.com/premium_photo-1664302702830-636ae7f2e64d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TourCard
          title="Wildlife"
          subtitle="Cultural Tours"
          imageUrl="https://images.unsplash.com/photo-1742226111386-b6a84ef8e660?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TourCard
          title="Wildlife"
          subtitle="Beach Holidays"
          imageUrl="https://images.unsplash.com/photo-1742226111386-b6a84ef8e660?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TourCard
          title="Wildlife"
          subtitle="Mountain Climbing"
          imageUrl="https://images.unsplash.com/photo-1742226111386-b6a84ef8e660?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default TourCardsSection;