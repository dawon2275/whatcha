import React from 'react'

const Banner = ({ movie }) => {
    //console.log(movie)
  return (
    <div style={{
        // eslint-disable-next-line no-useless-concat
        backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` + ")"
    }} className='banner'>
        
        <div className='banner-info'>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
    </div>
  )
}

export default Banner
