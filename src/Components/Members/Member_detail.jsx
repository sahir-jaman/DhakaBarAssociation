import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdOutlineBloodtype } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import Search_notice from "./Search_notice";

function Member_detail() {
  const [memberDetails, setMemberDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { memberId } = useParams(); // Extract memberId from URL parameter

  useEffect(() => {
    const fetchMemberDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/members/${memberId}`);
        console.log("API Response:", response.data); // Log the response data
        setMemberDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch member details. Please try again later.");
        setLoading(false);
        console.error("Error fetching member details:", error); // Log the error
      }
    };

    fetchMemberDetails();
  }, [memberId]); // Add memberId to the dependency array to fetch details when it changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Check if memberDetails is not null before rendering
  if (!memberDetails) {
    return <div>No member details found for ID: {memberId}</div>;
  }

  return (
    <div className="max-w-[90%] mx-auto ">
      <h1 className="text-3xl font-semibold mb-4 text-center">Member Details</h1>
      <div className="lg:flex">
        <div id="first" className="m-3 bg-[] w-[90%] bg-[#ECECEB]">
          <h1 className="text-center text-xl mt-1.5">Profile</h1>
          <div className="mx-auto md:max-w-[10%] max-w-[20%] pt-3">
            <img src={memberDetails.avatar} alt="Avatar" className="w-20 h-20 rounded-full mr-4" />
          </div>
          <div className="text-center py-3">
            <h2 className="text-xl font-semibold">{memberDetails.name}</h2>
            <h2>A Proud Member of Dhaka BAR Association</h2>
          </div>
          
          <div className="md:flex md:flex-cols-4 grid grid-cols-2 justify-between">
            <p className="flex"> <IoCallSharp className=" mt-1.5 ml-1 mr-1 bg-blue-200 rounded-[100%] p-0.5"/>{memberDetails.mobile_no}</p>
            <p className="flex"> <MdEmail className=" mt-1.5 ml-1 mr-1 bg-blue-200 rounded-[100%] p-0.5"/>{memberDetails.email}</p>
            <p className="flex"> <MdOutlineBloodtype className=" mt-1.5 ml-1 mr-1 bg-blue-200 rounded-[100%] p-0.5"/>{memberDetails.blood_group}</p>
            <p className="flex md:mr-1"> <FaWhatsapp className=" mt-1.5 ml-1 mr-1 bg-blue-200 rounded-[100%] p-0.5"/>{memberDetails.mobile_no}</p>
          </div>
          
          <h1 className="text-center text-[20px] py-4">Bio Info</h1>
          <div className="flex justify-between mx-1">
            <div>
              <h1>Personal Information</h1>
              <div>
                <p>Gender: {memberDetails.gender}</p>
                <p>Blood Group: {memberDetails.blood_group}</p>
                <p>Father Name: {memberDetails.father_name}</p>
                <p>Mother Name: {memberDetails.mother_name}</p>
                <p>NID Number: {memberDetails.nid_no}</p>
                <p>Mobile Number: {memberDetails.mobile_no}</p>
                <p>Present Address: {memberDetails.present_address}</p>
                <p>Permanent Address: {memberDetails.permanent_address}</p>
              </div>
            </div>
            <div>
              <h1>DBA Information</h1>
              <div>
                <p>Membership Number: {memberDetails.membership_no}</p>
                <p>Membership Date: {memberDetails.membership_date}</p>
                <p>Membership Category: {memberDetails.membership_category}</p>
                <p>Nominee Name: {memberDetails.nominee_name}</p>
                <p>Nominee Relation: {memberDetails.nominee_relation}</p>
                <p>Nominee Date of Birth: {memberDetails.nominee_dob}</p>
                <p>Present Job: {memberDetails.present_job}</p>
                <p>Professional Skills: {memberDetails.professional_skills}</p>
                <p>Chamber Address: {memberDetails.chamber_address}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="second" className="m-3 flex-grow">
          <Search_notice />
        </div>
      </div>
    </div>
  );
}

export default Member_detail;
