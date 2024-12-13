import "../../App.css";

export function Food() {
    return (
      <div className="flex flex-col flex-wrap items-center text-center w-full h-screen bg-street bg-cover p-10 gap-10">
        <a id="text-box" className="opacity-95 block h-full p-8 bg-gray-200 border border-gray-300 rounded-sm shadow">
          <h6 className="mb-2 text-2xl font-bold tracking-tight text-sky-950 dark:text-white">
            Food
          </h6>
          <hr></hr>
          <br></br>
          <p className="font-normal text-sky-950 dark:text-gray-400">
          Swedish cuisine – from foraging to artisanal food:
Nordic gastronomy is today the very focus of attention for the international food media. Sweden, along with the other Nordic countries, offers a refuge of clean, unspoiled nature, as well as the taste of contemporary exoticism.

Stretching more than 1,500 kilometres from well above the polar circle to the fertile plains of the southern tip, Sweden covers a number of climatic regions, allowing for a rich diversity of flora, fauna and traditions – and exceptional foraging.

Summer and autumn, Swedes of all ages and backgrounds forage mushrooms, berries and fruits. The varieties vary greatly from one region to another. There’s an overwhelming number of delicious mushrooms, over 500 wild berries and almost as many different kinds of apples. In the forests and plains grow blueberries, wild strawberries, cloudberries, lingonberries, rowanberries, elderberries and many more. Some are eaten fresh with milk or cream, other turned into homemade marmalade, jam or fruit syrup to be savoured during the cold season.

Many Swedes, including an increasing number of restaurants, have their own garden – at home or at their country house. Staple bushes in the gardens are red and black currant, gooseberry and garden raspberry. There’s usually rhubarb, and trees with apples, pears, plums and cherries. The more ambitious garden owners grow vegetables and create their own herb garden.

          </p>
        </a>
      </div>
    );
  }
  