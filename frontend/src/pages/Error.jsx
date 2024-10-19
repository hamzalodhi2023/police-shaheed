import { useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Oops! Page not found</h2>
                <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
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
