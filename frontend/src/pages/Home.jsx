import { useQuery, } from "@tanstack/react-query";

import { GetShaheedData } from "../api/ShaheedApi";
import RiseLoader from "react-spinners/RiseLoader";
import ShaheedMap from "../components/ShaheedMap";
import { NavLink } from "react-router-dom";
function Home() {
    const { data, isPending, error, isError } = useQuery({
        queryKey: ["shaheed"],
        queryFn: GetShaheedData,
    })

    if (isPending) {
        return <div className="absolute flex flex-col items-center justify-center w-full h-screen gap-10 bg-transparent">
            <RiseLoader
                color="#2a489e"
                loading={isPending}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            <p className="text-xl">Loading...</p>
        </div>
    }

    if (isError) {
        return <div className="absolute flex flex-col items-center justify-center w-full h-screen gap-10 bg-transparent">
            <p className="text-xl">Error: {error.message}</p>
        </div>
    }

    return (
        <>
            <div className="w-full min-h-screen ">
                <div className="flex items-center justify-center w-full mt-5 logo-div">
                    <img src="https://upload.wikimedia.org/wikipedia/en/e/e0/Sindh_Police_Logo.png" alt="Logo" className="w-32" />
                </div>
                <h1 className="mt-3 text-3xl font-semibold text-center">Police Shaheed Data</h1>
                <p className="text-center text-gray-500 ">Account & Welfare Branch, DIGP South Zone, Karachi</p>
                <div className="flex items-center justify-end w-full px-5">
                    <NavLink to="/create" className="px-6 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Add</NavLink>
                </div>
                <div className="w-full mt-5 overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="text-white bg-blue-500 ">
                                <th className="py-2 px-4 border-b text-[12px]  text-center font-semibold  uppercase tracking-wider">
                                    Id
                                </th>
                                <th className="py-2 px-4 border-b text-center text-[12px] font-semibold  uppercase tracking-wider">
                                    Pers No.
                                </th>
                                <th className="py-2 px-4 border-b text-center text-[12px] font-semibold  uppercase tracking-wider">
                                    Rank
                                </th>
                                <th className="py-2 px-4 border-b text-center text-[12px] font-semibold  uppercase tracking-wider">
                                    Serv No.
                                </th>
                                <th className="py-2 px-4 border-b text-center text-[12px] font-semibold  uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="py-2 px-4 border-b text-center text-[12px] font-semibold  uppercase tracking-wider">
                                    F/Name
                                </th>
                                <th className="py-2 px-4 border-b text-center text-[12px] font-semibold  uppercase tracking-wider">
                                    CNIC
                                </th>
                                <th className="py-2 px-4 border-b text-center text-[12px] font-semibold  uppercase tracking-wider">
                                    Unit
                                </th>
                                <th className="py-2 px-4 border-b text-center text-[12px] font-semibold  uppercase tracking-wider">
                                    Posting
                                </th>
                                <th className="py-2 px-4 border-b text-center text-[12px] font-semibold  uppercase tracking-wider">
                                    D.O.B
                                </th>
                                <th className="py-2 px-4 border-b text-center text-[12px] font-semibold  uppercase tracking-wider">
                                    D.O.A
                                </th>
                                <th className="py-2 px-4 border-b text-center text-[12px] font-semibold  uppercase tracking-wider">
                                    D.O.S
                                </th>
                                <th className="py-2 px-4 border-b text-center text-[12px] font-semibold  uppercase tracking-wider">
                                    Photo
                                </th>
                                <th className="py-2 px-4 border-b text-center text-[12px] font-semibold  uppercase tracking-wider">
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
    )
}
export default Home