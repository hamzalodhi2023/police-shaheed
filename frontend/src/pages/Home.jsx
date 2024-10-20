import { useQuery, } from "@tanstack/react-query";
import { FaEye } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { GetShaheedData } from "../api/ShaheedApi";
import RiseLoader from "react-spinners/RiseLoader";
import ShaheedMap from "../components/ShaheedMap";
function Home() {
    const { data, isPending, error, isError } = useQuery({
        queryKey: ["shaheed"],
        queryFn: GetShaheedData,
    })

    if (isPending) {
        return <div className="w-full h-screen absolute flex items-center justify-center bg-transparent flex-col gap-10">
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
        return <div className="w-full h-screen absolute flex items-center justify-center bg-transparent flex-col gap-10">
            <p className="text-xl">Error: {error.message}</p>
        </div>
    }

    return (
        <>
            <div className="w-full min-h-screen ">
                <div className="logo-div w-full flex items-center justify-center mt-5">
                    <img src="https://www.sindhpolice.gov.pk/images/logo.png" alt="Logo" className="w-32" />
                </div>
                <h1 className="text-center font-semibold text-3xl mt-3">Shaheed Police Profile</h1>
                <p className="text-center text-gray-500 ">Welfare Branch, DIGP South Zone, Karachi</p>
                <div className="w-full flex items-center justify-end px-5">
                    <button className="bg-[#2a489e] hover:bg-[#2e51b1] text-white font-bold py-2 px-6 rounded">Add</button>
                </div>
                <div className="overflow-x-auto w-full mt-5">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-700 text-white ">
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
                            {data?.map((item) => {
                                const { id, personal_no,
                                    rank,
                                    service_no,
                                    name,
                                    father_name,
                                    cnic_no,
                                    unit,
                                    place_of_posting,
                                    dob,
                                    doa,
                                    dos,
                                    photo, } = item;
                                return <tr key={item.id} className="even:bg-gray-50 hover:bg-gray-100">
                                    <td className="py-2 px-4 border-b text-[12px] text-center">
                                        {id}

                                    </td>
                                    <td className="py-2 px-4 border-b text-[12px] text-center">
                                        {personal_no}
                                    </td>
                                    <td className="py-2 px-4 border-b text-[12px] text-center">
                                        {rank}
                                    </td>
                                    <td className="py-2 px-4 border-b text-[12px] text-center">
                                        {service_no}
                                    </td>
                                    <td className="py-2 px-4 border-b text-[12px] text-center">
                                        {name}
                                    </td>
                                    <td className="py-2 px-4 border-b text-[12px] text-center">
                                        {father_name}
                                    </td>
                                    <td className="py-2 px-4 border-b text-[12px] text-center">
                                        {cnic_no}
                                    </td>
                                    <td className="py-2 px-4 border-b text-[12px] text-center">
                                        {unit}
                                    </td>
                                    <td className="py-2 px-4 border-b text-[12px] text-center">
                                        {place_of_posting}
                                    </td>
                                    <td className="py-2 px-4 border-b text-[12px] text-center">
                                        {dob}
                                    </td>
                                    <td className="py-2 px-4 border-b text-[12px] text-center">
                                        {doa}
                                    </td>
                                    <td className="py-2 px-4 border-b text-[12px] text-center">
                                        {dos}
                                    </td>
                                    <td className="py-2 px-4 border-b text-[12px] text-center">
                                        {photo}
                                    </td>
                                    <td className="py-2 px-4 border-b text-[15px] text-center">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                                            <FaEye />
                                        </button>
                                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded m-2">
                                            <MdEditSquare />
                                        </button>
                                    </td>
                                </tr>
                            })

                            }




                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Home