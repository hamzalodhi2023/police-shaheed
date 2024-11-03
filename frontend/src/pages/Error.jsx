import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 text-center">
        <h1 className="mb-4 text-6xl font-extrabold text-red-600">
          {error.status}
        </h1>
        <h2 className="mb-2 text-3xl font-bold text-gray-900">
          Oops! {error.statusText}
        </h2>
        <p className="mb-8 text-xl text-gray-600">{error.error.message}</p>
        <button
          onClick={() => navigate(-1)}
          className="inline-block rounded bg-blue-600 px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:bg-blue-700"
          aria-label="Go back to the previous page"
        >
          Go back
        </button>
      </div>
    </div>
  );
}

export default Error;
