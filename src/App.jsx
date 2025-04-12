import reactLogo from "/react.svg";

function App() {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-white text-gray-800 dark:bg-gray-800 dark:text-white">
            <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img
                    src={reactLogo}
                    className="h-32 p-6 transition duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-[spin_20s_linear_infinite]"
                    alt="React logo"
                />
            </a>

            <h1 className="mt-4 text-6xl leading-16 font-bold">
                Vite + React + Tailwind
            </h1>
        </div>
    );
}

export default App;
