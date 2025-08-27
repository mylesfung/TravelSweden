import { HomeWidget } from '../components/HomeWidget';

export function Home() {
    return (
      <div className="flex flex-wrap w-full h-[calc(100vh-5rem)] bg-street bg-cover overflow-auto gap-10 p-10">
        <HomeWidget 
          title={"Reviews"}
          description={"User reviews of various travel experiences and Swedish phenomena."}
          main_path={"/pages/Reviews"}
          button_path={"/pages/NewReview"}
          button_label={"Write a Review"}
          button_icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          }
        />
        <HomeWidget 
          title={"Journal"}
          description={"Your personal travel journal."}
          main_path={"/pages/Maintenance"}
          button_path={"/"}
          button_label={"New Entry"}
          button_icon={
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          }
        />
        <HomeWidget 
          title={"Weather Report"}
          description={"Dynamic weather API data for the most populous Swedish cities."}
          main_path={"/pages/Maintenance"}
          button_path={"/"}
          button_label={"Get Today's Weather"}
          button_icon={
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          }
        />
        <HomeWidget 
          title={"Transit Planner"}
          description={"Find the best routes across Sweden."}
          main_path={"/pages/Maintenance"}
          button_path={"/"}
          button_label={"Find Route"}
          button_icon={
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          }
        />
      </div>
    );
  }
  