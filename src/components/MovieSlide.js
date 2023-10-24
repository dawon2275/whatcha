import "react-multi-carousel/lib/styles.css";
import React from "react";
import Carousel from "react-multi-carousel";
import MovieCard from "./MovieCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MovieSlide = ({ movie }) => {
  return (
    <>
       <Carousel responsive={responsive} showDots={true}>
        {movie.results.map((item, idx) => (
          <div key={idx} className="each-slider">
            <MovieCard item={item} />
          </div>
        ))}
      </Carousel>
    </>
  );
};


export default MovieSlide;
