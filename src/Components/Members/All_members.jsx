import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function All_members() {
  const [memberList, setMemberList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  useEffect(() => {
    const fetchMemberList = async () => {
      try {
        const response = await axios.get("https://oyster-app-jzgsj.ondigitalocean.app/api/members");
        setMemberList(response.data);
        setLoading(false);
        console.log("here is the reponse member", response);
      } catch (error) {
        setError("Failed to fetch member list. Please try again later.");
        setLoading(false);
      }
    };

    fetchMemberList();
  }, []);

  const handleMemberDetail = (memberId) => {
    // Navigate to the Member_detail page with memberId as a parameter
    navigate(`/member-detail/${memberId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-[90%] mx-auto">
      <h1 className="text-[20px] my-4">Member List</h1>
      <ul className="grid grid-cols-6 gap-0">
        {memberList.map((member) => (
          <li key={member.id} className="border rounded-md hover:scale-105 hover:transition-all hover:duration-1000 hover:ease-in-out h-[230px] w-[200px]">
            <div className="max-w-[90%] mx-auto">
              <div className="text-center">
                <div className="h-[120px] w-[120px] mx-auto mb-5 rounded-[100%] overflow-hidden">
                    <img className="h-full w-full object-fill" src={member.avatar} alt="image" />
                </div>
                <h3>{member.name}</h3>
                <h3>{member.email}</h3>
                <div className="bg-[gray] mt-3">
                  {/* Pass member.id to handleMemberDetail */}
                  <button onClick={() => handleMemberDetail(member.id)} className="text-white hover:text-yellow-500">Details</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default All_members;
