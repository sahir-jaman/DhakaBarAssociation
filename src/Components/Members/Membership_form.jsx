import { useState } from "react";
import axios from "axios";

const initialConstate = {
  name: "",
  father_name: "",
  mother_name: "",
  email: "",
  avatar:null,
  gender: "",
  blood_group: "",
  nid_no: "",
  mobile_no: "",
  present_address: "",
  permanent_address: "",
  membership_no: "",
  membership_date: "",
  membership_category: "",
  nominee_name: "",
  nominee_relation: "",
  nominee_dob: "",
  present_job: "",
  professional_skills: "",
  chamber_address: ""
}

function Membership_form() {
  const [formData, setFormData] = useState(initialConstate);
  const [registrationStatus, setRegistrationStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'avatar') {
      setFormData({ ...formData, [name]: files[0] }); // Store the file object
    } else {
      setFormData({ ...formData, [name]: value }); // For other fields
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      await axios.post("http://localhost:8000/api/members/", formDataToSend);
      setRegistrationStatus("Successfully registered.");
      setFormData(initialConstate);
    } catch (error) {
      console.log(error);
      setRegistrationStatus("Registration failed. Please try again.");
    }
  };
  

  return (
    <div className="max-w-[80%] mx-auto mt-1 pb-10 bg-[#ECECEB]">
      <div className="flex justify-center">
        <h1 className="text-[22px] text-[#171C49] bg-[#c9c9c3] border border-red-500 rounded-lg px-3 pb-1">Please fulfill the membership form</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <fieldset className="md:flex justify-between">
          {/* Personal info */}
          <div className="ml-2">
            <h1 className="text-[red] text-[18px]">Personal Information</h1>
            <div className="Field pb-2">
              <label>Name <sup className="text-[18px] text-[red]">*</sup></label>
              <input
                className="border border-[gray] px-3 pb-1"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Field pb-2">
              <label className="pr-2">Father name</label>
              <input
                className="border border-[gray] px-3 pb-1"
                name="father_name"
                value={formData.father_name}
                onChange={handleChange}
              />
            </div>
            <div className="Field pb-2">
              <label className="pr-2">Mother name</label>
              <input
                className="border border-[gray] px-3 pb-1"
                name="mother_name"
                value={formData.mother_name}
                onChange={handleChange}
              />
            </div>
            <div className="Field pb-2">
              <label>Email address <sup className="text-[18px] text-[red]">*</sup></label>
              <input
                className="border border-[gray] px-3 pb-1" 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="Field pb-2">
              <label>Image <sup className="text-[18px] text-[red]">*</sup></label>
                <input
                className="ml-4"
                type="file"
                name="avatar"
                onChange={handleChange} // Handle change event for file input
                required
              />
          </div>
            
            <div className="Field pb-2">
              <label className="pr-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="Field pb-2">
              <label className="pr-3">Blood</label>
              <select
                name="blood_group"
                value={formData.blood_group}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
              </select>
            </div>
            <div className="Field pb-2">
              <label className="pr-2">NID number</label>
              <input
                className="border border-[gray] px-3 pb-1" 
                name="nid_no"
                value={formData.nid_no}
                onChange={handleChange}
              />
            </div>
            <div className="Field pb-2">
              <label className="pr-2">Mobile number</label>
              <input
                className="border border-[gray] px-3 pb-1" 
                name="mobile_no"
                value={formData.mobile_no}
                onChange={handleChange}
              />
            </div>
            <div className="Field pb-2">
              <label className="pr-2">Present Address</label>
              <input
                className="border border-[gray] px-3 pb-1" 
                name="present_address"
                value={formData.present_address}
                onChange={handleChange}
              />
            </div>
            <div className="Field pb-2">
              <label className="pr-2">Permanent Address</label>
              <input
                className="border border-[gray] px-3 pb-1" 
                name="permanent_address"
                value={formData.permanent_address}
                onChange={handleChange}
              />
            </div>
          </div>


          {/* Professional info */}
          <div className="mr-2">
          <h1 className="text-[red] text-[18px]">Professional Information</h1>
            <div className="Field pb-2">
              <label className="pr-2">Membership Number</label>
              <input
                className="border border-[gray] px-3 pb-1" 
                name="membership_no"
                value={formData.membership_no}
                onChange={handleChange}
              />
            </div>
            <div className="Field pb-2">
              <label className="pr-2">Membership Date</label>
              <input
                className="border border-[gray] px-3 pb-1" 
                name="membership_date"
                value={formData.membership_date}
                onChange={handleChange}
              />
            </div>
            <div className="Field pb-2">
              <label className="pr-2">Membership Category</label>
              <input 
                className="border border-[gray] px-3 pb-1" 
                name = "membership_category"
                value={formData.membership_category}
                onChange={handleChange}
              />
            </div>
            <div className="Field pb-2">
              <label className="pr-2">Nominee Name</label>
              <input 
                className="border border-[gray] px-3 pb-1" 
                name = "nominee_name"
                value={formData.nominee_name}
                onChange={handleChange}
              />
            </div>
            <div className="Field pb-2">
              <label className="pr-2">Nominee Relation</label>
              <input 
                className="border border-[gray] px-3 pb-1" 
                name = "nominee_relation"
                value={formData.nominee_relation}
                onChange={handleChange}
              />
            </div>

            <div className="Field pb-2">
              <label className="pr-2">Nominee Date of Birth<sup className="text-[18px] text-[red]">*</sup></label>
              <input
                type="date"
                className="border border-[gray] px-3 pb-1" 
                name="nominee_dob"
                value={formData.nominee_dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="Field pb-2">
              <label className="pr-2">Present Job</label>
              <input
                className="border border-[gray] px-3 pb-1" 
                name="present_job"
                value={formData.present_job}
                onChange={handleChange}
              />
            </div>
            <div className="Field pb-2">
              <label className="pr-2">Professional Skills</label>
              <input
                className="border border-[gray] px-3 pb-1" 
                name="professional_skills"
                value={formData.professional_skills}
                onChange={handleChange}
              />
            </div>
            <div className="Field pb-2">
              <label className="pr-2">Chamber Address</label>
              <input
                className="border border-[gray] px-3 pb-1" 
                name="chamber_address"
                value={formData.chamber_address}
                onChange={handleChange}
              />
            </div>
          </div>

        </fieldset>
          <div className="md:flex">
            <button type="submit" className="bg-red-400 text-[#171C49] rounded-lg px-3 pb-1 mt-2 ml-2">
              Create account
            </button>
            <div className="md:pt-2 md:pl-5">
            {registrationStatus && <p>{registrationStatus}</p>}
            </div>
          </div>
      </form>
    </div>
  );
}

export default Membership_form;
