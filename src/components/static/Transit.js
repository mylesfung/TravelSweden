import { InfoCard } from "../pages/InfoCard";

export function Transit() {

  const title_text = "Transit"
  const body_text = `There are many ways to get around Sweden, including by: 
    Train: A popular choice for traveling across Sweden, trains are fast and efficient. 
      The Swedish high-speed X 2000 train can reach speeds of up to 125 mph. You can buy tickets at the train station. 
    Bus: Swedish cities have excellent bus networks that extend into the suburbs and countryside. 
      You can choose between Express Buses and regional networks. 
    Boat: Stockholm is built on 14 islands, 
      so getting around by boat is a common way to travel. Metro: Stockholm's metro, called the tunnelbana, 
      is the fastest way to get around the city. Uber: You can request an Uber ride on demand in Stockholm. 
    Walk: Stockholm is known for being walkable, with many memorable sights within walking distance. 
    Internal flights: You can also travel between cities in Sweden by internal flight.`

  return ( 
    <InfoCard 
      title={title_text}
      body={body_text}
    />
  );
}
  