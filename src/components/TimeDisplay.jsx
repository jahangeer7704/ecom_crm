import React, { useState, useEffect } from "react";

const TimeDisplay = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const days = now.getDay(); // Days of the week (0-6)
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      setTime({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="grid  items-center justify-center  bg-white">
      <div className="text-xl flex space-x-4 text-gray-700">
        <div className="flex flex-col  items-center ">
          <span className="text-xs">Days  </span>
          <span className="text-3xl font-bold">
          {`${time.days.toString().padStart(2, "0")} :`}
          </span>  
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs">Hours</span>  
          <span className="text-3xl font-bold">
          {`${time.hours.toString().padStart(2, "0")} :`}
          </span>  
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs">Minutes</span>
          <span className="text-3xl font-bold">
          { `${time.minutes.toString().padStart(2, "0")} :`}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs">Seconds</span>
          <span className="text-3xl font-bold">
          { `${time.seconds.toString().padStart(2, "0")}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimeDisplay;
