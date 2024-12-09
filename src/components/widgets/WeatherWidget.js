import '../../App.css';

function WeatherWidget() {
  return (
    <div id="weather">
      <a href="#" class="block opacity-90 max-w-sm p-7 bg-sky-700 border border-gray-300 rounded-sm shadow">
        <h6 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Weather Today</h6>
        <p class="font-normal text-white dark:text-gray-400">Stockholm</p>
        <p class="font-normal text-white dark:text-gray-400">Gothenburg</p>
        <p class="font-normal text-white dark:text-gray-400">Malmö</p>
        <p class="font-normal text-white dark:text-gray-400">Uppsala</p>
        <p class="font-normal text-white dark:text-gray-400">Helsingborg</p>
        <p class="font-normal text-white dark:text-gray-400">Linköping</p>
      </a>
    </div>
  );
}

export default WeatherWidget;