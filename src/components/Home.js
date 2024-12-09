import ReviewsWidget from "./widgets/ReviewsWidget";
import JournalWidget from "./widgets/JournalWidget";
import WeatherWidget from "./widgets/WeatherWidget";
import TransitWidget from "./widgets/TransitWidget";

function Home() {
  return (
    <div class="flex flex-wrap w-full h-screen bg-stockholm gap-10 p-10">
      <ReviewsWidget />
      <JournalWidget />
      <WeatherWidget />
      <TransitWidget />
    </div>
  );
}

export default Home;