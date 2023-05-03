import { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'

import './History.css'

const History = () => {
    const {getInfo, info} = useFetch('history');

    useEffect(()=>{
      getInfo()
    })
  return (
    <div id='history' className='history'>
      <h3>History</h3>
      <div className='All_history'>
        {info.map((his)=>(
          <article key={his.id}>
            <h4>{his.title}</h4>
            <h5>{his.event_date_utc.split('').splice(8,2)}/{his.event_date_utc.split('').splice(5, 2)}/{his.event_date_utc.split('').splice(0,4)}</h5>
            <p>{his.details}</p>
            <a href={his.links.article}>Link to the article.</a>
          </article>
        ))}
      </div>

    </div>
  )
}

export default History