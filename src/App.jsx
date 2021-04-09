import { user as pUser } from "./data/about";

function App() {
    return (
        <div className="">
            <header className="px-10 pt-6">
                <h1 className="text-gray-900">
                    <span className="text-4xl">
                        <span className="text-gray-600 font-bold hover:text-indigo-800">
                            <a href={pUser.website}>{pUser.name}</a>
                        </span>
                        ,
                    </span>
                    <br />
                    <span className="text-2xl text-gray-500 cursor-default">
                        {pUser.title}
                    </span>
                </h1>
            </header>
        </div>
    );
}

export default App;
