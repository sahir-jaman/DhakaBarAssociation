import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import "aos/dist/aos.css";

function App() {
  return (
    <>
      <div className="bg-[#F7F7F7]">
        <Header />
      </div>
      <div className="w-full bg-[#0d1130]">
        <div className="text-white">
          <Slider/>
        </div>
      </div>
    </>
  );
}

export default App;
