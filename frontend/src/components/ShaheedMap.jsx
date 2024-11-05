import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EShaheedData } from "../api/ShaheedApi";

function ShaheedMap({ data = [] }) {

  const [id, setId] = useState("");

  //` notify function for notification 1
  const notify = () => toast.success("Profile Edit Successfully!");

  //` form hidden and display state
  const [formDis, setFormDis] = useState(false);
  const queryClient = useQueryClient();

  //` create mutation function useMutation
  const editMutation = useMutation({
    mutationFn: ({ fD, id }) => EShaheedData({ fD, id }),
    onSuccess: () => {
      queryClient.invalidateQueries(["shaheed"]);
      setFormDis(false);
      notify();
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
      setDisPhoto("");
      setPrevDisPhoto("")
    },
  });
  //` all inputs data state for controled components
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
  });
  //` photo state
  const [disPhoto, setDisPhoto] = useState("");
  const [prevDisPhoto, setPrevDisPhoto] = useState("")
  //` inputs option data
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
    { label: "Gulberg" },
  ];

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

  //` input onchange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  //` handleFileChange function for photo
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDisPhoto(file);
    }
  };

  //` handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const fD = new FormData();

    Object.entries(formData).map(([key, value]) => {
      fD.append(key, value);
    });
    fD.append("photo", disPhoto);
    editMutation.mutate({ fD, id });
  };
  return (
    <>
      {data?.map((item) => {
        const {
          id,
          personal_no,
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
          photo,
        } = item;
        return (
          <tr key={item.id} className="even:bg-gray-50 hover:bg-gray-100">
            <td className="border-b px-4 py-2 text-center text-[12px]">{id}</td>
            <td className="border-b px-4 py-2 text-center text-[12px]">
              {personal_no}
            </td>
            <td className="border-b px-4 py-2 text-center text-[12px]">
              {rank}
            </td>
            <td className="border-b px-4 py-2 text-center text-[12px]">
              {service_no}
            </td>
            <td className="border-b px-4 py-2 text-center text-[12px]">
              {name}
            </td>
            <td className="border-b px-4 py-2 text-center text-[12px]">
              {father_name}
            </td>
            <td className="border-b px-4 py-2 text-center text-[12px]">
              {cnic_no}
            </td>
            <td className="border-b px-4 py-2 text-center text-[12px]">
              {unit}
            </td>
            <td className="border-b px-4 py-2 text-center text-[12px]">
              {place_of_posting}
            </td>
            <td className="border-b px-4 py-2 text-center text-[12px]">
              {dob}
            </td>
            <td className="border-b px-4 py-2 text-center text-[12px]">
              {doa}
            </td>
            <td className="border-b px-4 py-2 text-center text-[12px]">
              {dos}
            </td>
            <td className="border-b px-4 py-2 text-center text-[12px]">
              <img
                src={`http://police-shaheed.zubizshop.com/profiles/${photo}`}
                className="w-[96px]"
                alt={name}
              />
            </td>
            <td className="border-b px-4 py-2 text-center text-[15px]">
              <NavLink to={`/${id}`}>
                <button className="px-2 py-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                  <FaEye />
                </button>
              </NavLink>
              <button
                onClick={() => {
                  document.body.style.overflow = "hidden";
                  setFormDis(true);
                  const [doaD, doaM, doaY] = doa.split("-");
                  const conDoa = `${doaY}-${doaM}-${doaD}`;

                  const [dosD, dosM, dosY] = dos.split("-");
                  const conDos = `${dosY}-${dosM}-${dosD}`;

                  const [dobD, dobM, dobY] = dob.split("-");
                  const conDob = `${dobY}-${dobM}-${dobD}`;

                  const [pdD, pdM, pdY] = paid_date.split("-");
                  const conPd = `${pdY}-${pdM}-${pdD}`;
                  setFormData({
                    personal_no: personal_no,
                    rank: rank,
                    service_no: service_no,
                    name: name,
                    father_name: father_name,
                    cnic_no: cnic_no,
                    unit: unit,
                    place_of_posting: place_of_posting,
                    dob: conDob,
                    doa: conDoa,
                    dos: conDos,
                    family_member: family_member,
                    contact: contact,
                    address: address,
                    fir_no: fir_no,
                    under_section: under_section,
                    police_station: police_station,
                    brief_fact: brief_fact,
                    compensation_amount: compensation_amount,
                    paid_date: conPd,
                  });
                  setPrevDisPhoto(photo);
                  setId(id);
                }}
                className="px-2 py-1 m-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
              >
                <MdEditSquare />
              </button>

              {/* edit Form Start */}
              <div
                className={`${formDis === false ? "static hidden" : "fixed block"} left-0 top-0 h-screen w-full overflow-y-auto bg-white`}
              >
                <div className="flex items-center justify-center w-full min-h-screen">
                  <button
                    onClick={() => setFormDis(false)}
                    className="absolute px-4 py-2 font-bold text-white bg-blue-500 rounded left-5 top-5 hover:bg-blue-600"
                  >
                    Go Back
                  </button>
                  <form
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    className="flex min-h-screen w-[80%] flex-col items-center justify-start px-5 py-5 pt-10"
                  >
                    <p className="mb-5 text-3xl font-semibold text-blue-500">
                      Shaheed Data Form
                    </p>
                    <div className="flex items-center justify-between w-full my-5">
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">Personal No</label>
                        <input
                          type="text"
                          name="personal_no"
                          value={formData.personal_no}
                          onChange={handleChange}
                          placeholder="Personal No."
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">Rank</label>
                        <select
                          name="rank"
                          value={formData.rank}
                          onChange={handleChange}
                          className="w-full py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        >
                          <option disabled value="">
                            --Select--
                          </option>
                          {ranks.map((rank, index) => {
                            return (
                              <option key={index} value={rank.label}>
                                {rank.label}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full my-5">
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">Service No</label>
                        <input
                          name="service_no"
                          value={formData.service_no}
                          onChange={handleChange}
                          type="text"
                          placeholder="Service No."
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">Name</label>
                        <input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          type="text"
                          placeholder="Name"
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full my-5">
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">Father's Name</label>
                        <input
                          name="father_name"
                          value={formData.father_name}
                          onChange={handleChange}
                          type="text"
                          placeholder="Father's Name"
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">CNIC No</label>
                        <input
                          name="cnic_no"
                          value={formData.cnic_no}
                          onChange={handleChange}
                          type="text"
                          placeholder="CNIC No."
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full my-5">
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">Unit</label>
                        <select
                          name="unit"
                          value={formData.unit}
                          onChange={handleChange}
                          className="w-full py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        >
                          <option disabled value="">
                            --Select--
                          </option>
                          {units.map((unit, index) => {
                            return (
                              <option key={index} value={unit.label}>
                                {unit.label}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">
                          Place of Posting
                        </label>
                        <input
                          name="place_of_posting"
                          value={formData.place_of_posting}
                          onChange={handleChange}
                          type="text"
                          placeholder="Place of Posting"
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full my-5">
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">Date of Birth</label>
                        <input
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          type="date"
                          placeholder="Date of Birth"
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">
                          Date of Appointment
                        </label>
                        <input
                          name="doa"
                          value={formData.doa}
                          onChange={handleChange}
                          type="date"
                          placeholder="Date of Appointment"
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full my-5">
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">
                          Date of Shahadat
                        </label>
                        <input
                          name="dos"
                          value={formData.dos}
                          onChange={handleChange}
                          type="date"
                          placeholder="Date of Shahadat"
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">Family Member</label>
                        <input
                          name="family_member"
                          value={formData.family_member}
                          onChange={handleChange}
                          type="text"
                          placeholder="Family Member"
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full my-5">
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">Contact</label>
                        <input
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                          type="text"
                          placeholder="Contact"
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">Address</label>
                        <input
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          type="text"
                          placeholder="Address"
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full my-5">
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">FIR No</label>
                        <input
                          name="fir_no"
                          value={formData.fir_no}
                          onChange={handleChange}
                          type="text"
                          placeholder="FIR No"
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">Under Section</label>
                        <input
                          name="under_section"
                          value={formData.under_section}
                          onChange={handleChange}
                          type="text"
                          placeholder="Under Section"
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full my-5">
                      <div className="flex flex-col w-full">
                        <label className="ml-5 text-start">
                          Police Station
                        </label>
                        <select
                          onChange={handleChange}
                          name="police_station"
                          value={formData.police_station}
                          className="w-full py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        >
                          <option disabled value="">
                            --Select--
                          </option>
                          {policeStation.map((station, index) => {
                            return (
                              <option key={index} value={station.label}>
                                {station.label}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full my-5">
                      <div className="flex flex-col w-full">
                        <label className="ml-5 text-start">Brief Fact</label>
                        <textarea
                          onChange={handleChange}
                          name="brief_fact"
                          value={formData.brief_fact}
                          type="text"
                          placeholder="Brief Fact"
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full my-5">
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">
                          Compensation Amount
                        </label>
                        <input
                          name="compensation_amount"
                          value={formData.compensation_amount}
                          onChange={handleChange}
                          type="text"
                          placeholder="Compensation Amount"
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                      <div className="flex w-[calc(100%/2.10)] flex-col">
                        <label className="ml-5 text-start">Paid Date</label>
                        <input
                          name="paid_date"
                          value={formData.paid_date}
                          onChange={handleChange}
                          type="date"
                          placeholder="Paid Date"
                          className="py-1 pl-3 text-lg rounded shadow-lg outline-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full my-5">
                      <div className="flex items-center gap-5">
                        <label
                          htmlFor="photo"
                          className="px-4 py-2 font-bold text-white bg-blue-500 rounded cursor-pointer h-fit hover:bg-blue-700"
                        >
                          Photo
                        </label>
                        <input
                          name="photo"
                          value={formData.photo}
                          onChange={handleFileChange}
                          type="file"
                          id="photo"
                          placeholder="Compensation Amount"
                          className="hidden py-1 pl-3 text-lg rounded shadow-lg outline-none"
                        />
                        <img
                          src={
                            disPhoto
                              ? URL.createObjectURL(disPhoto)
                              : `http://police-shaheed.zubizshop.com/profiles/${prevDisPhoto}`
                          }
                          className="w-[96px]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center w-full gap-5 my-5">
                      <button
                        onClick={() => {
                          setFormDis(false);
                          setFormData({
                            id,
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
                          });
                        }}
                        type="button"
                        className="w-full px-4 py-3 mt-3 text-xl font-bold text-white bg-red-500 rounded hover:bg-red-700 sm:ml-3 sm:mt-0"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="w-full px-4 py-3 text-xl font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* edit Form End */}
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default ShaheedMap;
