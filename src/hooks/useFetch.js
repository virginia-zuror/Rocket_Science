import axios from 'axios'
import { useState } from 'react'

const useFetch = (keyword) => {
    const [info, setInfo]= useState([]);
    const baseUrl = 'https://api.spacexdata.com/v4/'
    const getInfo =()=>{
        axios
            .get(`${baseUrl}${keyword}`)
            .then((res)=> setInfo(res.data))
            .catch(function (error){
                console.log(error);
            })
    };

  return (
    {getInfo, info}
  )
}

export  {useFetch};