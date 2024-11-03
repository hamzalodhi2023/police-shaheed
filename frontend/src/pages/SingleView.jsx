import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { DShaheedData, GetShaheedSData } from "../api/ShaheedApi";
import RiseLoader from "react-spinners/RiseLoader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function SingleView() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const notify = () => toast.success("Profile Deleted Successfully!");
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: (urlId) => DShaheedData(urlId),
    onSuccess: () => {
      queryClient.invalidateQueries(["shaheed"]);
      navigate("/");
    },
  });
  const { urlId } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["shaheedS", urlId],
    queryFn: () => GetShaheedSData(urlId),
  });

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
  } = data;
  return (
    <>
      {/* conformation div */}
      <div
        className={`fixed h-screen w-full overflow-hidden ${showConfirmation === true ? "flex" : "hidden"} items-center justify-center bg-black bg-opacity-50`}
      >
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-xl font-bold">Confirm Deletion</h2>
          <p className="mb-4">Are you sure you want to delete this profile?</p>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 mr-2 text-gray-700 bg-gray-300 rounded"
              onClick={() => setShowConfirmation(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 text-white bg-red-500 rounded"
              onClick={() => {
                deleteMutation.mutate(urlId);
                notify();
                setShowConfirmation(false);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${showConfirmation === true ? "h-screen w-full overflow-hidden" : "h-auto w-full overflow-auto"} px-10 pt-10`}
      >
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 mb-4 ml-10 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Go Back
        </button>
        {/* image div */}
        <div className="w-full pl-10 mb-6">
          <h1 className="text-3xl font-bold">Shaheed Profile</h1>
          <p>
            DIGP South Zone, Karachi <br />
            Welfare Branch
          </p>
          <img
            src={`http://police-shaheed.zubizshop.com/profiles/${photo}`}
            alt={name}
            className="mt-5 w-[96px]"
          />
        </div>
        {/* image div */}
        <div className="w-full px-10 mb-10">
          <h1 className="mb-5 border-b-[1px] text-2xl font-semibold text-blue-500">
            Shaheed Detail:
          </h1>
          <div className="flex items-center justify-between w-full my-5">
            <div className="w-1/3">
              <label className="font-semibold">ID:</label>
              <p>{id}</p>
            </div>
            <div className="w-1/3">
              <label className="font-semibold">Personal No:</label>
              <p>{personal_no}</p>
            </div>
            <div className="w-1/3">
              <label className="font-semibold">Rank:</label>
              <p>{rank}</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full my-5">
            <div className="w-1/3">
              <label className="font-semibold">Service No:</label>
              <p>{service_no}</p>
            </div>
            <div className="w-1/3">
              <label className="font-semibold">Name:</label>
              <p>{name}</p>
            </div>
            <div className="w-1/3">
              <label className="font-semibold">Father's Name:</label>
              <p>{father_name}</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full my-5">
            <div className="w-1/3">
              <label className="font-semibold">CNIC No:</label>
              <p>{cnic_no}</p>
            </div>
            <div className="w-1/3">
              <label className="font-semibold">Unit:</label>
              <p>{unit}</p>
            </div>
            <div className="w-1/3">
              <label className="font-semibold">Place of Posting:</label>
              <p>{place_of_posting}</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full my-5">
            <div className="w-1/3">
              <label className="font-semibold">D.O.B:</label>
              <p>{dob}</p>
            </div>
            <div className="w-1/3">
              <label className="font-semibold">D.O.A:</label>
              <p>{doa}</p>
            </div>
            <div className="w-1/3">
              <label className="font-semibold">D.O.Shahadat:</label>
              <p>{dos}</p>
            </div>
          </div>
        </div>
        <div className="w-full px-10 mb-10">
          <h1 className="mb-5 border-b-[1px] text-2xl font-semibold text-blue-500">
            Family Detail:
          </h1>
          <div className="flex items-center justify-between w-full my-5">
            <div className="w-1/3">
              <label className="font-semibold">
                Name Family Member with Relation:
              </label>
              <p>{family_member}</p>
            </div>
            <div className="w-1/3">
              <label className="font-semibold">Contact:</label>
              <p>{contact}</p>
            </div>
            <div className="w-1/3">
              <label className="font-semibold">Address:</label>
              <p>{address}</p>
            </div>
          </div>
        </div>
        <div className="w-full px-10 mb-10">
          <h1 className="mb-5 border-b-[1px] text-2xl font-semibold text-blue-500">
            FIR Detail:
          </h1>
          <div className="flex items-center justify-between w-full my-5">
            <div className="w-1/3">
              <label className="font-semibold">FIR No:</label>
              <p>{fir_no}</p>
            </div>
            <div className="w-1/3">
              <label className="font-semibold">Under Section:</label>
              <p>{under_section}</p>
            </div>
            <div className="w-1/3">
              <label className="font-semibold">Police Station:</label>
              <p>{police_station}</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full my-5">
            <div className="w-full">
              <label className="font-semibold">Brief Facts:</label>
              <p className="text-justify">{brief_fact}</p>
            </div>
          </div>
        </div>
        <div className="w-full px-10">
          <h1 className="mb-5 border-b-[1px] text-2xl font-semibold text-blue-500">
            Compensation Detail:
          </h1>
          <div className="flex items-center justify-start w-full my-5">
            <div className="w-1/3">
              <label className="font-semibold">Compensation Amount:</label>
              <p>{compensation_amount}</p>
            </div>
            <div className="w-1/3">
              <label className="font-semibold">Paid Date:</label>
              <p>{paid_date}</p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setShowConfirmation(true)}
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleView;
