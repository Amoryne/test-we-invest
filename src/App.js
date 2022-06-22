import { useState } from "react";
import { useEffect } from "react";
import Decrement from "./components/decrement";
import Increment from "./components/increment";
import Multiply from "./components/Multiply";
import Reset from "./components/Reset";
import House from "./components/house.png";
import Logo from "./components/logo.png";

function App() {
  const initialState = 0;

  const [count, setCount] = useState(initialState);

  useEffect(() => {
    console.log("composant is mounted");
    setCount(count + 10);
  }, []);

  const IncrementCountState = () => {
    setCount(count + 1);
  };

  const decrementCountState = () => {
    setCount(count - 1);
  };

  const multiplyCountState = () => {
    setCount(count * 2);
  };

  const resetCountState = () => {
    setCount(initialState);
  };

  return (
    <div className="rounded-lg px-10 py-5 ">
      <div className="flex justify-center  mt-5 mb-8">
        <img src={Logo} alt="logo we invest" />
      </div>

      <img className="" src={House} alt="background house" />

      <div className="flex justify-center">
        <h2
          className="border-4 border-myblue rounded-xl hover:animate-pulse bg-gradient-to-r from-orange-500 to-orange-700 hover:border-white font-borealis text-6xl  text-white  w-auto  text-center px-8 py-9
        "
        >
          {count}
        </h2>
      </div>
      <div className="flex justify-evenly flex-wrap mt-10 gap-5">
        <Decrement decrement={decrementCountState} />
        <Multiply multiply={multiplyCountState} />
        <Increment increment={IncrementCountState} />
        <div className="">
          <Reset reset={resetCountState} />
        </div>
      </div>
      <p className="flex justify-center mt-10 font-borealis text-myblue text-2xl">
        By Amoryne Jolimont
      </p>
    </div>
  );
}

export default App;
