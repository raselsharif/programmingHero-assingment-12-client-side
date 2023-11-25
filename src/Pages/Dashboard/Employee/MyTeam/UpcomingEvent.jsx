import EventCard from "./EventCard";

const UpcomingEvent = () => {
  return (
    <div>
      <h2 className="text-center mt-10 text-white text-xl rounded-md py-3 font-bold bg-blue-gray-300">
        Upcoming birthday events
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default UpcomingEvent;
