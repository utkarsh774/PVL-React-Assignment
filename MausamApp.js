import React, { useState, useEffect } from "react";
import picture from "../mausam.png";
function MausamApp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c8d7efa44d81482fc096ebc92da9c8d6`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="flex justify-center mt-20">
        <div
          className={`
      bg-[url(https://images.unsplash.com/photo-1513976993080-5ba0e9f0b51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80)]
      h-[60vh] w-[350px]
      bg-centre bg-cover
      rounded-xl
      relative
      
             `}
        >
          <div>
            <input
              className={`w-[30vh]    bg-white
                  text-black py-2 ml-14 mt-2 
                  opacity-70 font-bold absolute rounded-t-xl 
                  
                  rounded-b-xl`}
              type="search"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            ></input>
          </div>

          {!city ? (
            <p className="text-white absolute mt-40 text-2xl ml-20">
              No Data Found
            </p>
          ) : (
            <div className="flex justify-center">
              <div className="text-white absolute mt-36 text-2xl">{search}</div>
              <div className="text-white absolute mt-44 text-1xl">
                Temperature {city.temp}°C
              </div>
              <div className="text-white absolute mt-48 text-1xl">
                Humidity {city.humidity}||Pressure {city.pressure} Pa
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MausamApp;

// <div id="2" className = {`
// h-[25vh] w-[150px]
// md:h-[30vh] md:w-[250px]
// bg-[url(${Image2})]
// bg-centre bg-cover
// flex items-end flex justify-center
// rounded-xl m-4
// hover:scale-110
// ease-out duration-300
// relative
// `}
{
  /* <div className="w-full bg-gray-900 text-white py-2 font-bold text-center rounded-b-xl"> {movies[15].name} </div>
   */
}
