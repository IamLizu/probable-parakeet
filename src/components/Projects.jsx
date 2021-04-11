import projects from "../data/projects.json";

const projectConstruct = projects.map((item) => (
    <div
        className="my-4 w-62 xs:w-full sm:w-64 md:w-72 lg:w-96 
        cursor-default text-gray-900 
        border-black border rounded-md border-opacity-10
        p-5
        hover:shadow-md"
        key={item.url}
    >
        <p className="text-base">
            {item.name} • {item.published} • {item.tech}
        </p>
        <p className="mt-1">
            <a className="text-indigo-700 break-all" href={item.url}>
                {item.url}
            </a>
        </p>
        <p className="text-justify mt-2 cursor-default">{item.description}</p>
    </div>
));

export default function project() {
    return (
        <div className="px-10">
            <h3 className="font-medium md:text-lg">Projects</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-flow-rows gap-4">
                {projectConstruct}
            </div>
        </div>
    );
}
