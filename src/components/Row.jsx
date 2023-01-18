import React, { useEffect, useState } from 'react'
import './Row.css'
import Axios from '../constants/Axios'
import { API_KEY } from '../constants/Constants'
import YouTube from 'react-youtube'

function Row(props) {
  const [state, setState] = useState([])
  const [trailer, setTrailer] = useState('')

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }

  useEffect(() => {
    console.log('hai');
    Axios.get(`3/trending/all/day?api_key=${API_KEY}`).then((response) => {
      console.log(response);
      setState(response.data.results)
    })
  }, [])

  const handleMovieTrailer = (id) => {
    Axios.get(`3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
        setTrailer(response.data.results[0])
      }

    })
  }



  return (
    <div className='row'>
      <h4 className='title'>{props.title}</h4>
      <div className='trendings'>

        {
          state.map((obj, index) =>
            <img key={index} onClick={() => handleMovieTrailer(obj.id)} className='posters' src={obj ? props.url + `${obj.backdrop_path}` : ''} alt="" />
          )
        }

      </div>
      {trailer && <YouTube videoId={trailer.key} opts={opts} />}
    </div>
  )
}

export default Row