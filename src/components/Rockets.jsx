import axios from "axios";
import "./Rockets.css";
import { useEffect, useState } from "react";

export const Rockets = () => {
  const [rockets, setRockets] = useState([]);

  const getAllRockets = () => {
    axios
      .get("https://api.spacexdata.com/v4/rockets")
      .then((res) => setRockets(res.data))
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllRockets();
  }, []);

  return (
    <div id="rockets" className="rockets">
      <h3>Rockets</h3>
      <div className="All_rockets">
        {rockets &&
          rockets.map((rk) => (
            <figure key={rk.id} className="card">
              <h4>{rk.name}</h4>
              <h5>{rk.type.split(' ').map((letter) => letter.charAt(0).toUpperCase() + letter.slice(1)).join(' ')}</h5>
              <p>{rk.country}</p>
               <p>First flight: {rk.first_flight}</p>
              <p>{rk.description}</p>
              <div className="images">
                {rk?.flickr_images?.map((url) => (
                  <img
                    key={url}
                    src={url}
                    alt={rk.name}
                    className="ImageRocket"
                  />
                ))}
              </div>
            </figure>
          ))}
      </div>
    </div>
  );
};
