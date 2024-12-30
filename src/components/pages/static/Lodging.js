import { InfoCard } from "../../InfoCard";

export function Lodging() {

    const title_text = "Lodging"
    const body_text = `Unique accommodation close to nature – 27 sustainable places to stay in Sweden. 
    From rustic eco-lodges and historic cabins to floating hotels and modern glamping – 
    the Swedish forest is scattered with unique places to stay. 
    Discover the luxury of going off-grid and enjoy the sound of silence while leaving as few footprints as possible.`

    return ( 
      <InfoCard 
        title={title_text}
        body={body_text}
      />
    );
  }
  