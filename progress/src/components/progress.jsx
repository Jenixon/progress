import { useEffect, useState } from "react";

const Progress = () => {
  
    const [bar, setBar] = useState(0);
    
  
    useEffect(() => {
      const interval = setInterval(() => {
        setBar((prevBarValue) => {
          if (prevBarValue >= 100) {
            clearInterval(interval);   ///....to clear the data if it goes beyond 100
            return 100;
          }
          return Math.min(prevBarValue + 5, 100);


        });
      }, 1000);

      return()=>{
        clearInterval(interval)
      }
  
   
    }, []);///.........dependency array[] only ones runs

  return (
    <div className="h-8 w-64 rounded-full border-4 border-black overflow-hidden">
      <div
        className="h-full w-[256px] bg-orange-600 transition-transform duration-500"
        style={{ transform: `translateX(${bar-100}%)` }} ///....translateX - left + right
      ></div>
    </div>
  );
};

export default Progress;



