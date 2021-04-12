import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import { user as pUser } from "./data/about";

function App() {
    return (
        <div className="">
            <header className="p-10 pt-6">
                <h1 className="text-gray-900">
                    <span className="text-2xl sm:text-4xl">
                        <span className="text-gray-600 font-bold hover:text-indigo-800">
                            <a href={pUser.website}>{pUser.name}</a>
                        </span>
                        ,
                    </span>
                    <br />
                    <span className="sm:text-2xl text-gray-500 cursor-default">
                        {pUser.title}
                    </span>
                </h1>
            </header>
            <Projects />
            <Certificates />
            <footer className="my-8 flex justify-center items-center gap-3">
                <a
                    href="https://iamlizu.com/blog/"
                    target="blank"
                    className="uppercase font-medium text-xs sm:text-base"
                >
                    Blog
                </a>
                <a href="https://github.com/IamLizu" target="blank">
                    <img src="github.png" alt="GitHub Mark" width="30" />
                </a>
                <a
                    href="https://www.linkedin.com/in/iamlizuofficial/"
                    target="blank"
                    className="uppercase font-medium text-xs sm:text-base"
                >
                    LinkedIn
                </a>
            </footer>
        </div>
    );
}

export default App;
