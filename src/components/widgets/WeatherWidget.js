import '../../App.css';

export function WeatherWidget() {
  return (
    <div id="weather">
      <a href="#" className="block opacity-95 max-w-sm p-7 bg-sky-700 border border-gray-300 rounded-sm shadow">
        <h6 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Weather Today</h6>
        <p className="font-normal text-white dark:text-gray-400">Stockholm</p>
        <p className="font-normal text-white dark:text-gray-400">Gothenburg</p>
        <p className="font-normal text-white dark:text-gray-400">Malmö</p>
        <p className="font-normal text-white dark:text-gray-400">Uppsala</p>
        <p className="font-normal text-white dark:text-gray-400">Helsingborg</p>
        <p className="font-normal text-white dark:text-gray-400">Linköping</p>
      </a>
    </div>
  );
}
