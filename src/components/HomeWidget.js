import "../App.css";

export function HomeWidget({ title, description, main_path, button_path = false, button_label = false, button_icon = false }) {
    return (
        <div>
            <a href={main_path} className="block opacity-95 max-w-xs p-7 bg-sky-700 border border-gray-300 rounded-sm shadow">
                <h6 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{title}</h6>
                <p className="font-normal text-white dark:text-gray-400">{description}</p>
                
                <a href={button_path} className="inline-flex items-center mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-sky-800 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-800 dark:hover:bg-sky-700 dark:focus:ring-blue-800">
                    {button_label}
                    {button_icon}
                </a>
            </a>
        </div>
    )
}