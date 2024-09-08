import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(false);
  
  const handleInputField = (cityName) => {
    setInput(cityName)
  }

  const handleApi = async () => {
    const apiKey = "0d2f6546cdaef8dad480f350333d420c";
    await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((json) =>
        setData({
          cityName: json.city.name,
          temp: Math.floor(json.list[0].main.temp),
          feels: Math.floor(json.list[0].main.feels_like),
          visibility: Math.floor(json.list[0].visibility),
          weatherMain: json.list[0].weather[0].main,
          description: json.list[0].weather[0].description,
          speed: Math.floor(json.list[0].wind.speed),
          humidity: Math.round(json.list[0].main.humidity),
          pressure: json.list[0].main.pressure
        })
      );
  };

  useEffect(() => {
    handleApi();
  }, [input]);

  return (
    <>
      <div className="pb-1 pt-1 bg-slate-600 text-white max-w-screen-sm mt-5 m-auto rounded-lg">
        <Home handleInputField={handleInputField}/>
        <WeatherCard data={data} />
      </div>
    </>
  );
}

export default App;
