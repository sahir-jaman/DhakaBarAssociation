// import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Constitution from "./Components/About/Constitution";
import Header from "./Components/Header/Header";
import Membership_form from "./Components/Members/Membership_form"
import All_members from "./Components/Members/All_members";
import Member_detail from "./Components/Members/Member_detail";
import Contact from "./Components/Contact/Contact";
import EventPage from "./Components/Events/events";
import MediaPage from "./Components/Media/MediaPage";
import BroadcastFairPage from "./Components/Media/BroadCastFairPage";

function App() {
  return (
    <>
     <BrowserRouter>
     <div className="bg-[#F7F7F7]">
        <Header />
      </div>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about-bpa" element={<About/>} />
          <Route path="/constitution" element={<Constitution/>} />
          <Route path="/membership-form" element={ <Membership_form/>} />
          <Route path="/all-members" element={ <All_members/>} />
          <Route path="/member-detail/:memberId" element={<Member_detail />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/events" element={<EventPage/>} />
          <Route path="/media" element={<MediaPage/>} />
          <Route path="/broadcast-fair" element={<BroadcastFairPage/>} />
        </Routes>  
      </BrowserRouter>
    </>
  );
}

export default App;
