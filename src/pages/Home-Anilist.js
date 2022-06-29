

















import React, { useState } from 'react'
import "../css/style.css";
import { useLazyQuery } from '@apollo/client';
import { GET_ANIME_DETAIL } from '../graphql/Queries-Anilist'
function HomeAnilist() {
    const [citySearched, setCitySearched] = useState('')
    const [AnimeDetail, { loading, data, error }] = useLazyQuery(GET_ANIME_DETAIL, {
        variables: { id: citySearched }
    })
    if (error) return <h1> Error found</h1>
    if (data) {
        console.log(data);
    }

    return (
        
        <div className='home'>
            <h1>Search For Weather</h1>
            <input type="text" placeholder="City name..." onChange={(event) => setCitySearched(event.target.value)}></input>
            <button onClick={() => AnimeDetail()}> Search</button>
            <div className='weather'>
                {data && (
                    <>
                        <h1>{data.Media.bannerImage}</h1>
                        <img 
      src= {data.Media.bannerImage} className="photo"
      alt="new"
      />
                        {/* <h1>Temperature : {data.getCityByName.weather.temperature.actual}</h1>
                <h1>Description : {data.getCityByName.weather.summary.description}</h1>
                <h1>Wind Speed : {data.getCityByName.weather.wind.speed}</h1> */}
                    </>
                )}

            </div>
        </div>
    )
}

export default HomeAnilist