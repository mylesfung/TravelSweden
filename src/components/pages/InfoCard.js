import "../../App.css";

export function InfoCard({ title, body }) {
    return (
        <div className="flex flex-col flex-wrap items-center text-center w-full h-[calc(100vh-5rem)] bg-street bg-cover p-10 gap-10">
            <a id="text-box" className="opacity-95 block h-full p-8 bg-gray-200 border border-gray-300 rounded-sm shadow">
            <h6 className="mb-2 text-2xl font-bold tracking-tight text-sky-950 dark:text-white">
                {title}
            </h6>
            <hr></hr>
            <br></br>
            <p className="font-normal text-sky-950 dark:text-gray-400">
                {body}
            </p>
            </a>
        </div>
    )
}