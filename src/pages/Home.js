import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/movieAction';
import Banner from '../components/Banner';
import Loading from '../components/Loading';
import MovieSlide from '../components/MovieSlide';

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(state=>state.movie);
  //console.log("home", popularMovies)
    
useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  }

  return (   
    <div>
        <Banner movie={popularMovies.results[14]} />
        <div className='contents'>
            <h2>What's Popular</h2>
            <MovieSlide movie={popularMovies} />
            <h2>Top Rated Movies</h2>
            <MovieSlide movie={topRatedMovies}  />
            <h2>Upcoming Movies</h2>      
            <MovieSlide movie={upcomingMovies}/>
        </div>
    </div>
  )
}

export default Home
