import { useNavigate } from "react-router-dom";
import { navlinks } from "../constants";
import { useEffect, useState } from "react";
import { FaCloud } from "react-icons/fa";

interface Weather {
  temp: number;
}

const Navbar = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState<Weather>({ temp: 0.0 });

  useEffect(() => {
    const id = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const apiKey = "430b018e006a543efa380109980e75ef";
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
              throw new Error("Failed to fetch weather data");
            }
            const data = await response.json();
            setWeather({ temp: data?.main?.temp });
            console.log("resp is ", response);
            console.log(weather);
          });
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="w-full h-[45px] bg-[#1A1A1A] flex justify-between items-center">
      <div className="w-[70%]   h-full items-center flex justify-around  ">
        {navlinks?.map((nav: any, index: number) => {
          return (
            <p
              key={index}
              onClick={() => navigate(nav?.link)}
              className="h-full flex justify-center items-center cursor-pointer font-semibold text-white w-[12%] text-center hover:text-white hover:bg-[#04594D]"
            >
              {nav?.title}
            </p>
          );
        })}
      </div>
      <div className="w-[15%] h-full flex gap-5">
        <p className="text-[18px] flex items-center justify-center text-white font-medium">
          {time}
        </p>
        <div className="flex gap-2 items-center justify-around">
          <FaCloud className="text-white text-2xl" />
          {weather?.temp === 0.0 ? (
            <p className="text-[22px] text-white font-semibold">
              {((weather?.temp - 273) * 100) / 100}
            </p>
          ) : (
            <p className="text-[18px] text-white font-semibold">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
