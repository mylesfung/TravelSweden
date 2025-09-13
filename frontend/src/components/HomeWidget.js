// Widget from https://v1.tailwindcss.com/components/cards

export function HomeWidget({ title, description, main_path, button_path = false, button_label = false, button_icon = false }) {
  return (
      <div>
          <a href={main_path} className="block max-w-xs p-8 bg-blue-900 
          border border-gray-300 rounded-md shadow">
              <h6 className="mb-3 text-3xl tracking-tight text-white dark:text-white">{title}</h6>
              <p className="font-normal text-white text-md dark:text-gray-400">{description}</p>
              
              <a href={button_path} className="inline-flex items-center mt-5 px-3 py-2 text-md 
              font-medium text-center text-white bg-blue-900 border rounded-md hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-950 dark:hover:bg-blue-900 dark:focus:ring-blue-800">
                  {button_label}
                  {button_icon}
              </a>
          </a>
      </div>
  )
}

