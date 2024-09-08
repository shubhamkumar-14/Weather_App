import React from "react";
import image from "../../public/wheatherImg.png";
function WeatherCard({ data }) {
  return (
    <>
      <div className="border-[0.3px] border-gray-400  max-w-screen-sm ml-12 mr-12 rounded-md m-auto flex  gap-2  mt-10 mb-10 justify-center items-center text-center p-2">
        <div className="w-[770px] flex flex-col justify-center items-center">
          <img src={image} className="w-36 h-36 mt-5 mb-5" alt="" />
          <h1 className="text-5xl font-bold text-gray-300 mt-5 mb-5">{data.temp}°C</h1>
        </div>

        <div className="flex flex-wrap gap-3 w-[900px]">
          <div className="px-5 w-28 h-14 rounded-md flex flex-col items-center justify-center font-bold text-xl bg-slate-500 text-gray-200 m-2 ">
            weather: {data.weatherMain}
          </div>
          <div className=" w-28 h-14 rounded-md flex flex-col items-center justify-center font-bold text-xl bg-slate-500 text-gray-50 m-2">
            <span className="text-sm text-gray-300">speed:</span> {data.speed}{" "}
            m/s
          </div>
          <div className="w-28 h-14 rounded-md flex flex-col items-center justify-center font-bold text-xl bg-slate-500 text-gray-50 m-2">
            <span className="text-sm text-gray-300">visibility:</span>{" "}
            {data.visibility}
          </div>
          <div className="w-28 h-14  rounded-md flex flex-col items-center justify-center font-bold text-md bg-slate-500 text-gray-50 m-2 ">
            <span className="text-md text-gray-300 font-bold">feels:</span>
            {data.feels}°
          </div>
          <div className="w-28 h-14  rounded-md flex flex-col items-center justify-center font-bold text-md bg-slate-500 text-gray-50 m-2 text-md">
            <span className="text-sm text-gray-300">Pressure:</span>
            {data.pressure}
          </div>

          <div className="w-28 h-14  rounded-md flex flex-col items-center justify-center font-bold text-md bg-slate-500 text-gray-50 m-2 text-md">
            <span className="text-sm text-gray-300">Humidity:</span>
            {data.humidity}%
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
