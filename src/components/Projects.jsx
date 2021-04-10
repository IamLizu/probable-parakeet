import projects from "../data/projects.json";

const projectConstruct = projects.map((item) => (
    <div className="my-4 w-96 cursor-default text-gray-900" key={item.url}>
        <p className="text-base">
            {item.name} • {item.published} • {item.tech}
        </p>
        <p className="mt-1">
            <a className="text-indigo-700" href={item.url}>
                {item.url}
            </a>
        </p>
        <p className="text-justify mt-2 cursor-default">{item.description}</p>
    </div>
));

export default function project() {
    return (
        <div className="px-10">
            <h3 className="font-medium text-lg">Projects</h3>
            <div className="grid grid-cols-3 grid-flow-rows gap-4">
                {projectConstruct}
            </div>
        </div>
    );
}
