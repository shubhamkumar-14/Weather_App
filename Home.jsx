import { useState } from "react";

function Home({ handleInputField }) {

  const [input , setInput] = useState("");

  const handlbutton = (e) => {
    e.preventDefault();
    handleInputField(input);
    setInput("");
  }
  return (
    <div>
      <h1 className="text-center text-2xl font-bold pb-4 text-gray-100">Weather App</h1>
      <form action="">
        <div className="flex justify-around">
          <input
            type="text"
            className="w-80 h-10 rounded-md pl-2 bg-transparent border-gray-400  outline-none border font-bold"
            placeholder="enter city name"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="px-3 py-2  rounded-md hover:bg-blue-600 bg-blue-700 cursor-pointer"
            onClick={(e)=> handlbutton(e)}
          >
            Get Weather
          </button>
        </div>
      </form>
    </div>
  );
}

export default Home;
