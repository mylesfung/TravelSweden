import { ReviewsWidget } from "./widgets/ReviewsWidget";
import { JournalWidget } from "./widgets/JournalWidget";
import { WeatherWidget } from "./widgets/WeatherWidget";
import { TransitWidget } from "./widgets/TransitWidget";

export function Home() {
  return (
    <div className="flex flex-wrap w-full h-[calc(100vh-5rem)] bg-street bg-cover gap-10 p-10">
      <ReviewsWidget />
      <JournalWidget />
      <WeatherWidget />
      <TransitWidget />
    </div>
  );
}
