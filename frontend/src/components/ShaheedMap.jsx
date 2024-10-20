import { FaEye } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { NavLink } from "react-router-dom";
function ShaheedMap({ data = [] }) {
    return (
        <>
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
                        <img src={photo} alt="" />
                    </td>
                    <td className="py-2 px-4 border-b text-[15px] text-center">
                        <NavLink to={`/${id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                            <FaEye />
                        </NavLink>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded m-2">
                            <MdEditSquare />
                        </button>
                    </td>
                </tr>
            })
            }
        </>
    )
}

export default ShaheedMap