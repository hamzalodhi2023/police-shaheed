import { useQuery } from "@tanstack/react-query";

import { GetShaheedData } from "../api/ShaheedApi";
import RiseLoader from "react-spinners/RiseLoader";
import ShaheedMap from "../components/ShaheedMap";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["shaheed"],
    queryFn: GetShaheedData,
  });
  const navigate = useNavigate();
  const length = data?.length;
  //` filter data
  const ranks = [
    { label: "DIGP" },
    { label: "SSP" },
    { label: "SP" },
    { label: "DSP" },
    { label: "PI" },
    { label: "SI" },
    { label: "ASI" },
    { label: "HC" },
    { label: "PC" },
  ];
  const units = [
    { label: "South" },
    { label: "City" },
    { label: "Kemari" },
    { label: "INV-I" },
    { label: "INV-II" },
    { label: "INV-III" },
    { label: "PHQ Garden" },
  ];
  const [rank, setRank] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [unit, setUnit] = useState("");
  const [ps, setPs] = useState("")

  console.log(rank, from, to, unit, ps)
  if (isPending) {
    return (
      <div className="absolute flex flex-col items-center justify-center w-full h-screen gap-10 bg-transparent">
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
      <div className="absolute flex flex-col items-center justify-center w-full h-screen gap-10 bg-transparent">
        <p className="text-xl">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="flex items-start justify-end w-full">
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            className="px-6 py-2 mt-5 mr-5 font-bold text-white bg-red-500 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
        <div className="flex items-center justify-center w-full logo-div">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/e0/Sindh_Police_Logo.png"
            alt="Logo"
            className="w-32"
          />
        </div>
        <h1 className="mt-3 text-3xl font-semibold text-center">
          Police Shaheed Data
        </h1>
        <p className="text-center text-gray-500">
          Account & Welfare Branch, DIGP South Zone, Karachi
        </p>
        <div className="flex items-center justify-between w-full px-5">
          <p className="text-xl font-semibold">Total Records: {length}</p>
          <NavLink
            to="/create"
            className="px-6 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Add
          </NavLink>
        </div>
        {/* Filter div started */}
        <div className="flex w-full pt-5">
          <form onSubmit={(e) => {
            e.preventDefault()
          }} className="flex flex-col items-center justify-center w-full gap-4 px-4 md:flex-row">
            <select
              className="w-full px-3 py-2 text-base border border-gray-300 rounded shadow-lg outline-none md:w-1/6 md:text-lg"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
            >
              <option disabled value="">
                --Select--
              </option>
              {ranks.map((rank, index) => (
                <option key={index} value={rank.label}>
                  {rank.label}
                </option>
              ))}
            </select>

            <select
              className="w-full px-3 py-2 text-base border border-gray-300 rounded shadow-lg outline-none md:w-1/6 md:text-lg"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
            >
              <option disabled value="">
                --Select--
              </option>
              {units.map((unit, index) => (
                <option key={index} value={unit.label}>
                  {unit.label}
                </option>
              ))}
            </select>
            <input value={to} onChange={(e) => setTo(e.target.value)} type="text" className="w-full px-3 py-2 text-base border border-gray-300 rounded shadow-lg outline-none md:w-1/6 md:text-lg" />
            <input value={from} onChange={(e) => setFrom(e.target.value)} type="text" className="w-full px-3 py-2 text-base border border-gray-300 rounded shadow-lg outline-none md:w-1/6 md:text-lg" />
            <input value={ps} onChange={(e) => setPs(e.target.value)} type="text" className="w-full px-3 py-2 text-base border border-gray-300 rounded shadow-lg outline-none md:w-1/6 md:text-lg" />

            <button
              type="submit"
              className="w-full px-6 py-2 font-bold text-white transition duration-300 bg-blue-500 rounded md:w-auto hover:bg-blue-700"
            >
              Filter
            </button>
          </form>
        </div>
        {/* Filter div started */}
        <div className="w-full mt-5 overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="text-white bg-blue-500">
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
      </div >
    </>
  );
}
export default Home;
