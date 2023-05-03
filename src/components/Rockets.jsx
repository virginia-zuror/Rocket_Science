
import "./Rockets.css";


import { useEffect} from "react";
import { useFetch } from '../hooks/useFetch';

export const Rockets = () => {
  
  const {getInfo, info} = useFetch('rockets')

  useEffect(() => {
    getInfo();
  });

  return (
   <div id="rockets" className="rockets">
      <h3>Rockets</h3>
      <div className="All_rockets">
        {info.map((rk) => (
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
