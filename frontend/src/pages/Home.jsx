import { FaEye } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
function Home() {
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
                            <tr className="even:bg-gray-50 hover:bg-gray-100">
                                <td className="py-2 px-4 border-b text-[12px] text-center">
                                    1

                                </td>
                                <td className="py-2 px-4 border-b text-[12px] text-center">
                                    10154177
                                </td>
                                <td className="py-2 px-4 border-b text-[12px] text-center">
                                    DIGP
                                </td>
                                <td className="py-2 px-4 border-b text-[12px] text-center">
                                    K-10786
                                </td>
                                <td className="py-2 px-4 border-b text-[12px] text-center">
                                    Umar Hayat Khna Lodhi
                                </td>
                                <td className="py-2 px-4 border-b text-[12px] text-center">
                                    Zahid Raza Khan
                                </td>
                                <td className="py-2 px-4 border-b text-[12px] text-center">
                                    4210176840201
                                </td>
                                <td className="py-2 px-4 border-b text-[12px] text-center">
                                    PHQ Garden
                                </td>
                                <td className="py-2 px-4 border-b text-[12px] text-center">
                                    Madina Colony
                                </td>
                                <td className="py-2 px-4 border-b text-[12px] text-center">
                                    24-04-1965
                                </td>
                                <td className="py-2 px-4 border-b text-[12px] text-center">
                                    25-03-1990
                                </td>
                                <td className="py-2 px-4 border-b text-[12px] text-center">
                                    23.04.2004
                                </td>
                                <td className="py-2 px-4 border-b text-[12px] text-center">
                                    image
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
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Home