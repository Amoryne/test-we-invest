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
      <img className=""src={House} alt="background house" />
     
      <div className="flex justify-center">
        

        <h2 className="border-2 border-myblue hover:border-white font-borealis text-2xl  text-white  w-64  text-center p-8 py-5
        ">
          {count}
        </h2>
         </div>
        <div className="flex justify-evenly flex-wrap mt-10 gap-5">
          <Decrement decrement={decrementCountState} />
          <Multiply multiply={multiplyCountState} />
          <Increment increment={IncrementCountState} />
          
      </div>
      <div className="flex justify-center mt-5">
      <Reset reset={resetCountState} />
      </div>
    </div>
  );
}

export default App;
