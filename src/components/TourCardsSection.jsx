import TourCard from './cards/TourCard';

const TourCardsSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <TourCard
          title="Wildlife safaris in Tanzania"
          subtitle="Safaris"
          imageUrl="https://plus.unsplash.com/premium_photo-1664302702830-636ae7f2e64d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TourCard
          title="Cultural Tours in Tanzania"
          subtitle="Cultural Tours"
          imageUrl="https://www.leopard-tours.com/wp-content/uploads/2015/10/Tanzania-Cultural-Tours-1-1024x682.jpg"
        />
        <TourCard
          title="Zanzibar Beaches"
          subtitle="Beach Holidays"
          imageUrl="https://www.sojournsafaris.co.ke/wp-content/uploads/2019/07/Screen-Shot-2017-08-29-at-7.42.43-PM.png"
        />
        <TourCard
          title="Mountain Kilimanjaro" 
          subtitle="Mountain Climbing"
          imageUrl="https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-bf21751/tanzania-specialist.com/wp-content/uploads/2023/07/Summit-1900x1000-1.jpg"
        />
      </div>
    </div>
  );
};

export default TourCardsSection;