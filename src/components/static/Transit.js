import "../../App.css";

export function Transit() {
    return (
      <div className="flex flex-col flex-wrap items-center text-center w-full h-[calc(100vh-5rem)] bg-street bg-cover p-10 gap-10">
        <a id="text-box" className="opacity-95 block h-full p-8 bg-gray-200 border border-gray-300 rounded-sm shadow">
          <h6 className="mb-2 text-2xl font-bold tracking-tight text-sky-950 dark:text-white">
            Transit
          </h6>
          <hr></hr>
          <br></br>
          <p className="font-normal text-sky-950 dark:text-gray-400">
            There are many ways to get around Sweden, including by: 
            Train: A popular choice for traveling across Sweden, trains are fast and efficient. The Swedish high-speed X 2000 train can reach speeds of up to 125 mph. You can buy tickets at the train station. 
            Bus: Swedish cities have excellent bus networks that extend into the suburbs and countryside. You can choose between Express Buses and regional networks. 
            Boat: Stockholm is built on 14 islands, so getting around by boat is a common way to travel. 
            Metro: Stockholm's metro, called the tunnelbana, is the fastest way to get around the city. 
            Uber: You can request an Uber ride on demand in Stockholm. 
            Walk: Stockholm is known for being walkable, with many memorable sights within walking distance. 
            Internal flights: You can also travel between cities in Sweden by internal flight. 
            In Stockholm County, buses, subways, commuter trains, streetcars, and passenger ferries operate under a unified ticket system. You can search for trips between stations in Sweden on www.resrobot.se and buy tickets to travel to other cities. 
          </p>
        </a>
      </div>
    );
  }
  