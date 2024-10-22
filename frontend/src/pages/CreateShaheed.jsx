import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react"
import { CShaheedData } from "../api/ShaheedApi";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreateShaheed() {
    const notify = () => toast.success('Profile Created Successfully!');
    const [photo, setPhoto] = useState("")
    const [formData, setFormData] = useState({
        personal_no: "",
        rank: "",
        service_no: "",
        name: "",
        father_name: "",
        cnic_no: "",
        unit: "",
        place_of_posting: "",
        dob: "",
        doa: "",
        dos: "",
        family_member: "",
        contact: "",
        address: "",
        fir_no: "",
        under_section: "",
        police_station: "",
        brief_fact: "",
        compensation_amount: "",
        paid_date: "",
    })
    const queryClient = useQueryClient();

    const createMutation = useMutation({
        mutationFn: (fD) => CShaheedData(fD),
        onSuccess: () => {
            queryClient.invalidateQueries(["shaheed"]);
            setFormData({
                personal_no: "",
                rank: "",
                service_no: "",
                name: "",
                father_name: "",
                cnic_no: "",
                unit: "",
                place_of_posting: "",
                dob: "",
                doa: "",
                dos: "",
                family_member: "",
                contact: "",
                address: "",
                fir_no: "",
                under_section: "",
                police_station: "",
                brief_fact: "",
                compensation_amount: "",
                paid_date: "",
            })
            setPhoto(null)
            notify()
        },
    })



    const policeStation = [
        { label: "Clifton" },
        { label: "Boat Basin" },
        { label: "Darakhshan" },
        { label: "Sahil" },
        { label: "Gizri" },
        { label: "Defence" },
        { label: "Civil Lines" },
        { label: "Frere" },
        { label: "Saddar" },
        { label: "Women" },
        { label: "Arty Maidan" },
        { label: "Preedy" },
        { label: "Arambagh" },
        { label: "Garden" },
        { label: "Nabi Bux" },
        { label: "Eidgah" },
        { label: "Napier" },
        { label: "Risala" },
        { label: "City Court" },
        { label: "Kharadar" },
        { label: "Mithadar" },
        { label: "Baghdadi" },
        { label: "Kalri" },
        { label: "Kalakot" },
        { label: "Chakiwara" },
        { label: "Jackson" },
        { label: "Docks" },
        { label: "KPT" },
        { label: "Mauripur" },
        { label: "Mochko" },
        { label: "Pak Colony" },
        { label: "Sher Shah" },
        { label: "SITE-A" },
        { label: "SITE-B" },
        { label: "Baldia" },
        { label: "Madina Colony" },
        { label: "Saeedabad" },
        { label: "Ittehad Town" },

    ]
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
    ]
    const units = [
        { label: "South" },
        { label: "City" },
        { label: "Kemari" },
        { label: "INV-I" },
        { label: "INV-II" },
        { label: "INV-III" },
        { label: "PHQ Garden" },

    ]

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const fD = new FormData();

        Object.entries(formData).map(([key, value]) => {
            fD.append(key, value)

        })
        fD.append("photo", photo)
        createMutation.mutate(fD)
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-[80%]  flex items-center justify-start min-h-screen py-5 pt-10 px-5 flex-col">
                <p className="text-3xl font-semibold mb-5 text-blue-500">Shaheed Data Form</p>
                <div className="w-full flex items-center justify-between my-5">
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>Personal No</label>
                        <input type="text" name="personal_no" value={formData.personal_no} onChange={handleChange} placeholder="Personal No." className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>Rank</label>
                        <select name="rank" value={formData.rank} onChange={handleChange} className="w-full pl-3 outline-none text-lg py-1 rounded shadow-lg" required>
                            <option disabled value="">--Select--</option>
                            {
                                ranks.map((rank, index) => {
                                    return <option key={index} value={rank.label}>{rank.label}</option>


                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between my-5">
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>Service No</label>
                        <input name="service_no" value={formData.service_no} onChange={handleChange} type="text" placeholder="Service No." className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>Name</label>
                        <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name" className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                </div>
                <div className="w-full flex items-center justify-between my-5">
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>Father's Name</label>
                        <input name="father_name" value={formData.father_name} onChange={handleChange} type="text" placeholder="Father's Name" className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>CNIC No</label>
                        <input name="cnic_no" value={formData.cnic_no} onChange={handleChange} type="text" placeholder="CNIC No." className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                </div>
                <div className="w-full flex items-center justify-between my-5">
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>Unit</label>
                        <select name="unit" value={formData.unit} onChange={handleChange} className="w-full pl-3 outline-none text-lg py-1 rounded shadow-lg" required>
                            <option disabled value="">--Select--</option>
                            {
                                units.map((unit, index) => {
                                    return <option key={index} value={unit.label}>{unit.label}</option>
                                })
                            }

                        </select>
                    </div>
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>Place of Posting</label>
                        <input name="place_of_posting" value={formData.place_of_posting} onChange={handleChange} type="text" placeholder="Place of Posting" className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                </div>
                <div className="w-full flex items-center justify-between my-5">
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>Date of Birth</label>
                        <input name="dob" value={formData.dob} onChange={handleChange} type="date" placeholder="Date of Birth" className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>Date of Appointment</label>
                        <input name="doa" value={formData.doa} onChange={handleChange} type="date" placeholder="Date of Appointment" className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                </div>
                <div className="w-full flex items-center justify-between my-5">
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>Date of Shahadat</label>
                        <input name="dos" value={formData.dos} onChange={handleChange} type="date" placeholder="Date of Shahadat" className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>Family Member</label>
                        <input name="family_member" value={formData.family_member} onChange={handleChange} type="text" placeholder="Family Member" className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                </div>
                <div className="w-full flex items-center justify-between my-5">
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>Contact</label>
                        <input name="contact" value={formData.contact} onChange={handleChange} type="text" placeholder="Contact" className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>Address</label>
                        <input name="address" value={formData.address} onChange={handleChange} type="text" placeholder="Address" className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                </div>
                <div className="w-full flex items-center justify-between my-5">
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>FIR No</label>
                        <input name="fir_no" value={formData.fir_no} onChange={handleChange} type="text" placeholder="FIR No" className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>Under Section</label>
                        <input name="under_section" value={formData.under_section} onChange={handleChange} type="text" placeholder="Under Section" className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                </div>
                <div className="w-full flex items-center justify-between my-5">
                    <div className="flex flex-col w-full">
                        <label>Police Station</label>
                        <select onChange={handleChange} name="police_station" value={formData.police_station} className="w-full pl-3 outline-none text-lg py-1 rounded shadow-lg" required>
                            <option disabled value="">--Select--</option>
                            {
                                policeStation.map((station, index) => {
                                    return <option key={index} value={station.label}>{station.label}</option>
                                })
                            }
                        </select>

                    </div>
                </div>
                <div className="w-full flex items-center justify-between my-5">
                    <div className="flex flex-col w-full">
                        <label>Brief Fact</label>
                        <textarea onChange={handleChange} name="brief_fact" value={formData.brief_fact} type="text" placeholder="Brief Fact" className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                </div>
                <div className="w-full flex items-center justify-between my-5">
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>Compensation Amount</label>
                        <input name="compensation_amount" value={formData.compensation_amount} onChange={handleChange} type="text" placeholder="Compensation Amount" className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                    <div className="flex flex-col w-[calc(100%/2.10)]">
                        <label>Paid Date</label>
                        <input name="paid_date" value={formData.paid_date} onChange={handleChange} type="date" placeholder="Paid Date" className="pl-3 outline-none text-lg py-1 rounded shadow-lg" required />
                    </div>
                </div>
                <div className="w-full flex items-center justify-between my-5">
                    <div className="flex flex-col ">
                        <label htmlFor="photo" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer inline-block">Photo</label>
                        <input name="photo" value={formData.photo} onChange={handleFileChange} type="file" id="photo" placeholder="Compensation Amount" className="pl-3 outline-none text-lg py-1 rounded shadow-lg hidden" required />
                    </div>
                </div>
                <div className="w-full flex items-center justify-center my-5">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-xl text-white font-bold py-3 px-4 rounded w-full">
                        Submit
                    </button>
                </div>
            </form>
        </div >
    )
}
export default CreateShaheed