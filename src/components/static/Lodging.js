import "../../App.css";

function Lodging() {
    return (
      <div className="flex flex-col flex-wrap items-center text-center w-full h-screen bg-street bg-cover p-10 gap-10">
        <a id="text-box" className="opacity-95 block h-full p-8 bg-gray-200 border border-gray-300 rounded-sm shadow">
          <h6 className="mb-2 text-2xl font-bold tracking-tight text-sky-950 dark:text-white">
            Lodging
          </h6>
          <hr></hr>
          <br></br>
          <p className="font-normal text-sky-950 dark:text-gray-400">
            Unique accommodation close to nature – 27 sustainable places to stay in Sweden.
            From rustic eco-lodges and historic cabins to floating hotels and modern glamping – the Swedish forest is scattered with unique places to stay.
            Discover the luxury of going off-grid and enjoy the sound of silence while leaving as few footprints as possible.
          </p>
        </a>
      </div>
    );
  }
  
  export default Lodging;