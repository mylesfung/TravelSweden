import { InfoCard } from "./components/InfoCard";

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

export function Food() {
  const title_text = "Food"
  const body_text = `Swedish cuisine – from foraging to artisanal food: 
    Nordic gastronomy is today the very focus of attention for the international food media. 
    Sweden, along with the other Nordic countries, offers a refuge of clean, unspoiled nature, 
    as well as the taste of contemporary exoticism. Stretching more than 1,500 kilometres 
    from well above the polar circle to the fertile plains of the southern tip, 
    Sweden covers a number of climatic regions, allowing for a rich diversity of flora, fauna and traditions – 
    and exceptional foraging.Summer and autumn, Swedes of all ages and backgrounds forage mushrooms, berries and fruits. 
    The varieties vary greatly from one region to another. There’s an overwhelming number of delicious mushrooms, 
    over 500 wild berries and almost as many different kinds of apples. In the forests and plains grow blueberries, 
    wild strawberries, cloudberries, lingonberries, rowanberries, elderberries and many more. 
    Some are eaten fresh with milk or cream, other turned into homemade marmalade, 
    jam or fruit syrup to be savoured during the cold season.Many Swedes, including an increasing number of restaurants, 
    have their own garden – at home or at their country house. Staple bushes in the gardens are red and black currant, 
    gooseberry and garden raspberry. There’s usually rhubarb, and trees with apples, pears, plums and cherries. 
    The more ambitious garden owners grow vegetables and create their own herb garden.`

  return ( 
    <InfoCard 
      title={title_text}
      body={body_text}
    />
  );
}
