import { useEffect, useState } from "react";
import { Heading } from "../components/heading";
import axios from "axios";

export function Trending() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        setData(response.data.coins);
      } catch (err) {
        console.log("This is the err" + err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white  border-box h-132 w-72">
      <div className="font-bold p-2 text-xl">Trending Coins (24h)</div>
      <Component obj={data[0]} />
      <Component obj={data[1]} />
      <Component obj={data[2]} />
    </div>
  );
}

function Component({ obj }) {
  if (!obj) {
    return null;
  }
  return (
    <div className="flex justify-between p-2">
      <div className="flex">
        <img src={obj.item.thumb} className="h-5 w-5 items-center"></img>
        <div className="px-1">
          {obj.item.name} ({obj.item.symbol})
        </div>
      </div>
      <div className="bg-green-300 text-green-500 border-box h-8 w-18 rounded-md">
        <div className="text-center">
          {Math.floor(obj.item.data.price_change_percentage_24h.eur * 100) /
            100 +
            "%"}
        </div>
      </div>
    </div>
  );
}
