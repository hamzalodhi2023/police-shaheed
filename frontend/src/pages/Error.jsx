import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
    const navigate = useNavigate();
    const error = useRouteError();
    console.log(error)
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <h1 className="text-6xl font-extrabold text-red-600 mb-4">{error.status}</h1>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Oops! {error.statusText}</h2>
                <p className="text-xl text-gray-600 mb-8">{error.error.message}</p>
                <button
                    onClick={() => navigate(-1)}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                    aria-label="Go back to the previous page"
                >
                    Go back
                </button>
            </div>
        </div>
    );
}

export default Error;
