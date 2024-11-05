import { useQuery } from "@tanstack/react-query";

import { GetShaheedData } from "../api/ShaheedApi";
import RiseLoader from "react-spinners/RiseLoader";
import ShaheedMap from "../components/ShaheedMap";
import { NavLink, useNavigate } from "react-router-dom";

function Home() {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["shaheed"],
    queryFn: GetShaheedData,
  });
  const navigate = useNavigate();
  const length = data?.length;
  if (isPending) {
    return (
      <div className="absolute flex h-screen w-full flex-col items-center justify-center gap-10 bg-transparent">
        <RiseLoader
          color="#2a489e"
          loading={isPending}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="absolute flex h-screen w-full flex-col items-center justify-center gap-10 bg-transparent">
        <p className="text-xl">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen w-full">
        <div className="flex w-full items-start justify-end">
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            className="mr-5 mt-5 rounded bg-red-500 px-6 py-2 font-bold text-white hover:bg-red-700"
          >
            Logout
          </button>
        </div>
        <div className="logo-div flex w-full items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/e0/Sindh_Police_Logo.png"
            alt="Logo"
            className="w-32"
          />
        </div>
        <h1 className="mt-3 text-center text-3xl font-semibold">
          Police Shaheed Data
        </h1>
        <p className="text-center text-gray-500">
          Account & Welfare Branch, DIGP South Zone, Karachi
        </p>
        <div className="flex w-full items-center justify-between px-5">
          <p className="text-xl font-semibold">Total Records: {length}</p>
          <NavLink
            to="/create"
            className="rounded bg-blue-500 px-6 py-2 font-bold text-white hover:bg-blue-700"
          >
            Add
          </NavLink>
        </div>
        <div className="mt-5 w-full overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border-b px-4 py-2 text-center text-[12px] font-semibold uppercase tracking-wider">
                  Id
                </th>
                <th className="border-b px-4 py-2 text-center text-[12px] font-semibold uppercase tracking-wider">
                  Pers No.
                </th>
                <th className="border-b px-4 py-2 text-center text-[12px] font-semibold uppercase tracking-wider">
                  Rank
                </th>
                <th className="border-b px-4 py-2 text-center text-[12px] font-semibold uppercase tracking-wider">
                  Serv No.
                </th>
                <th className="border-b px-4 py-2 text-center text-[12px] font-semibold uppercase tracking-wider">
                  Name
                </th>
                <th className="border-b px-4 py-2 text-center text-[12px] font-semibold uppercase tracking-wider">
                  F/Name
                </th>
                <th className="border-b px-4 py-2 text-center text-[12px] font-semibold uppercase tracking-wider">
                  CNIC
                </th>
                <th className="border-b px-4 py-2 text-center text-[12px] font-semibold uppercase tracking-wider">
                  Unit
                </th>
                <th className="border-b px-4 py-2 text-center text-[12px] font-semibold uppercase tracking-wider">
                  Posting
                </th>
                <th className="border-b px-4 py-2 text-center text-[12px] font-semibold uppercase tracking-wider">
                  D.O.B
                </th>
                <th className="border-b px-4 py-2 text-center text-[12px] font-semibold uppercase tracking-wider">
                  D.O.A
                </th>
                <th className="border-b px-4 py-2 text-center text-[12px] font-semibold uppercase tracking-wider">
                  D.O.S
                </th>
                <th className="border-b px-4 py-2 text-center text-[12px] font-semibold uppercase tracking-wider">
                  Photo
                </th>
                <th className="border-b px-4 py-2 text-center text-[12px] font-semibold uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <ShaheedMap data={data} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Home;
