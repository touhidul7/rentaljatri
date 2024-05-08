import React, { useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const Home = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div>
      <h1 className="text-center text-xl font-bold">
        This is Home/Zatri section
      </h1>
      <div>
        <button onClick={handleToggle}>
          {isToggled ? <FaToggleOn size={30} /> : <FaToggleOff size={30} />}
        </button>
        {isToggled && <div>The toggle is on!</div>}
      </div>
    </div>
  );
};

export default Home;
