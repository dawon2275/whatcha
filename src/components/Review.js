import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

const Review = () => {
  let [review, setReview] = useState(null || {});
  let [showContent, setShowContent] = useState(false);
  let { id } = useParams();

  const showReviews = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    setReview(data);
    //console.log(data);
  };

  useEffect(() => {
    showReviews();
   
  }, [review]);


  return (
    <div>
      <div className="review-btns">
        <button
          onClick={() => setShowContent(!showContent)}
          className="review-btn"
        >
          REVIEWS
        </button>
      </div>

      {review.results &&
        review.results.map((item) => {
          return showContent ? (
            <div className="review-area">
              <h4> {item.author}</h4>
              <p> {item.content}</p>
            </div>
          ) : (
            ""
          );
        })}      
    </div>
  );
};

export default Review;