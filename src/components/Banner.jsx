import React, { useEffect, useState } from 'react'
import './Banner.css'
import Axios from '../constants/Axios'
import { API_KEY } from '../constants/Constants'
import { IMG_URL_500 } from '../constants/Constants'

function Banner() {
    const [movies, setMovies] = useState({})

    useEffect(() => {
        const r = Math.floor(Math.random() * 10)
        Axios.get(`3/trending/all/day?api_key=${API_KEY}`).then((response) => {
            console.log(response);
            setMovies(response.data.results[r])
        }).catch(() => {

        })
    }, [])



    return (
        <div className='banner'>
            <div className='outer'>
                <div className='poster'>
                    <img className='image' src={movies ? IMG_URL_500 + `${movies.backdrop_path}` : null} alt='banner' />
                </div>
                <div>
                    <h1>{movies.title || movies.name}</h1>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                    <p className='overview'>{movies ? movies.overview : ''}</p>
                    <h3>&#9733; Rating {movies ? movies.vote_average : ''}</h3>
                </div>
            </div>
        </div>
    )
}

export default Banner