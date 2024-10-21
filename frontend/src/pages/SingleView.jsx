import { useQuery } from "@tanstack/react-query"
import { useParams, useNavigate } from "react-router-dom"
import { GetShaheedSData } from "../api/ShaheedApi"
import RiseLoader from "react-spinners/RiseLoader"

function SingleView() {
    const { urlId } = useParams()
    const navigate = useNavigate()
    const { data, isPending, isError, error } = useQuery({
        queryKey: ["shaheedS", urlId],
        queryFn: () => GetShaheedSData(urlId),
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

    console.log(data)
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
        family_member,
        contact,
        address,
        fir_no,
        under_section,
        police_station,
        brief_fact,
        compensation_amount,
        paid_date,
        photo, } = data
    return (
        <div className="w-full pt-10 px-10">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 ml-10 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
            >
                Go Back
            </button>
            {/* image div */}
            <div className="mb-6 w-full pl-10">
                <h1 className="text-3xl font-bold ">Shaheed Profile</h1>
                <p>DIGP South Zone, Karachi <br />
                    Welfare Branch
                </p>
                <img src={`/public/profiles/${photo}`} alt={name} className="mt-5 w-[96px]" />
            </div>
            {/* image div */}
            <div className="w-full px-10 mb-10">
                <h1 className="text-2xl font-semibold mb-5 text-blue-500 border-b-[1px]">Shaheed Detail:</h1>
                <div className="w-full flex my-5 items-center justify-between">
                    <div className="w-1/3">
                        <label className="font-semibold" >ID:</label>
                        <p>{id}</p>
                    </div>
                    <div className="w-1/3">
                        <label className="font-semibold" >Personal No:</label>
                        <p>{personal_no}</p>
                    </div>
                    <div className="w-1/3">
                        <label className="font-semibold" >Rank:</label>
                        <p>{rank}</p>
                    </div>
                </div>
                <div className="w-full flex my-5 items-center justify-between">
                    <div className="w-1/3">
                        <label className="font-semibold" >Service No:</label>
                        <p>{service_no}</p>
                    </div>
                    <div className="w-1/3">
                        <label className="font-semibold" >Name:</label>
                        <p>{name}</p>
                    </div>
                    <div className="w-1/3">
                        <label className="font-semibold" >Father's Name:</label>
                        <p>{father_name}</p>
                    </div>
                </div>
                <div className="w-full flex my-5 items-center justify-between">
                    <div className="w-1/3">
                        <label className="font-semibold" >CNIC No:</label>
                        <p>{cnic_no}</p>
                    </div>
                    <div className="w-1/3">
                        <label className="font-semibold" >Unit:</label>
                        <p>{unit}</p>
                    </div>
                    <div className="w-1/3">
                        <label className="font-semibold" >Place of Posting:</label>
                        <p>{place_of_posting}</p>
                    </div>
                </div>
                <div className="w-full flex my-5 items-center justify-between">
                    <div className="w-1/3">
                        <label className="font-semibold" >D.O.B:</label>
                        <p>{dob}</p>
                    </div>
                    <div className="w-1/3">
                        <label className="font-semibold" >D.O.A:</label>
                        <p>{doa}</p>
                    </div>
                    <div className="w-1/3">
                        <label className="font-semibold" >D.O.Shahadat:</label>
                        <p>{dos}</p>
                    </div>
                </div>
            </div>
            <div className="w-full px-10 mb-10">
                <h1 className="text-2xl font-semibold mb-5 text-blue-500 border-b-[1px]">Family Detail:</h1>
                <div className="w-full flex my-5 items-center justify-between">
                    <div className="w-1/3">
                        <label className="font-semibold" >Name Family Member with Relation:</label>
                        <p>{family_member}</p>
                    </div>
                    <div className="w-1/3">
                        <label className="font-semibold" >Contact:</label>
                        <p>{contact}</p>
                    </div>
                    <div className="w-1/3">
                        <label className="font-semibold" >Address:</label>
                        <p>
                            {address}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full px-10 mb-10">
                <h1 className="text-2xl font-semibold mb-5 text-blue-500 border-b-[1px]">FIR Detail:</h1>
                <div className="w-full flex my-5 items-center justify-between">
                    <div className="w-1/3">
                        <label className="font-semibold" >FIR No:</label>
                        <p>{fir_no}</p>
                    </div>
                    <div className="w-1/3">
                        <label className="font-semibold" >Under Section:</label>
                        <p>{under_section}</p>
                    </div>
                    <div className="w-1/3">
                        <label className="font-semibold" >Police Station:</label>
                        <p>
                            {police_station}
                        </p>
                    </div>
                </div>
                <div className="w-full flex my-5 items-center justify-between">
                    <div className="w-full">
                        <label className="font-semibold" >Brief Facts:</label>
                        <p className="text-justify">
                            {brief_fact}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full px-10">
                <h1 className="text-2xl font-semibold mb-5 text-blue-500 border-b-[1px]">Compensation Detail:</h1>
                <div className="w-full flex my-5 items-center justify-start">
                    <div className="w-1/3">
                        <label className="font-semibold" >Compensation Amount:</label>
                        <p>{compensation_amount}</p>
                    </div>
                    <div className="w-1/3">
                        <label className="font-semibold" >Paid Date:</label>
                        <p>{paid_date}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleView