import { HomeWidget } from '../components/HomeWidget';

export function Home() {
    return (
      <div className="flex flex-wrap justify-center w-full h-[calc(100vh-6.25rem)] bg-street bg-cover overflow-auto gap-10 p-10">
        <HomeWidget 
          title={"Travel Stories"}
          description={"Read user stories of anecdotal travel experiences and unique cultural phenomena in the Skåne region."}
          main_path={"/service/reviews"}
          button_path={"/service/new-review"}
          button_label={"Write a Story"}
          button_icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          }
        />
        <HomeWidget 
          title={"Study Abroad"}
          description={"Explore education abroad opportunities in the Skåne region."}
          main_path={"https://uceap.universityofcalifornia.edu/programs/lund-university"}
          button_path={"https://uceap.universityofcalifornia.edu/programs/lund-university"}
          button_label={"UCEAP Lund University"}
          button_icon={null}
        />
        <HomeWidget 
          title={"Skånetrafiken"}
          description={"Find and purchase tickets for the best routes across Skåne using Skåne's official regional transit application."}
          main_path={"https://www.skanetrafiken.se/"}
          button_path={"https://www.skanetrafiken.se/"}
          button_label={"Find Route"}
          button_icon={
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          }
        />
        <HomeWidget 
          title={"Weather in Malmö, Sweden"}
          description={"Get comprehensive climate and weather data courtesy of Weather Spark."}
          main_path={"https://weatherspark.com/y/76106/Average-Weather-in-Malm%C3%B6-Sweden-Year-Round"}
          button_path={"https://weatherspark.com/y/76106/Average-Weather-in-Malm%C3%B6-Sweden-Year-Round"}
          button_label={"Get Report"}
          button_icon={
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          }
        />
      </div>
    );
  }
  