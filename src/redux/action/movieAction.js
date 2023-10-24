import api from "../api";
/* 
리덕스 미들웨어  
- 두 개의 개체 사이에서 원만히 통신할 수 있도록 돕는 역할
- 리덕스 미들웨어는 액션과 리듀서 사이의 중간자
- [액션] => [미들웨어] => [리듀서] => [스토어]
- 비동기 처리 작업을 간편하게 가능
- 리듀서는 순수 함수(pure function)로 작성되어야 하며, 액션과 이전 상태를 받아서 새로운 상태를 반환하는 단순한 함수 -> 같은 액션이 dispatch되었을 때 항상 같은 new state를 반환해야합니다.
*/

const API_KEY = process.env.REACT_APP_API_KEY
function getMovies() {    
    return async(dispatch) => {
        try {
            dispatch({type:"GET_MOVIES_REQUEST"})

            const popularMoiveApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            const upcomingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)

            /* 장르 정보를 요청하는 api */
            const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)

            let [popularMovies, topRatedMovies, upcomingMovies, genreList] = await Promise.all([
                popularMoiveApi, 
                topRatedApi, 
                upcomingApi,
                genreApi
            ]);
            console.log("장르리스트:", genreList)
    
            dispatch({
                type: "GET_MOVIE_SUCCESS",
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upcomingMovies: upcomingMovies.data,
                    genreList: genreList.data.genres
                }    
            })
            console.log(popularMovies)
            console.log(topRatedMovies)
            console.log(upcomingMovies)
        } catch(error) {
            //에러 핸들링하는 곳
            dispatch({type: "GET_MOVIES_FAILURE"})
        }
    }
} 

/* 디테일 페이지 액션 - 선택한 영화의 id를 넘겨줘야하므로 별도로 함수를 선언*/
const getMovieDetail = (id) => async(dispatch)=> {
    try {
     dispatch({ type: "GET_MOVIE_DETAIL_REQUEST"});
 
     const getMovieDetailApi = api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);      
 
     let [movieDetail] = await Promise.all([
       getMovieDetailApi
     ])
     console.log('action 페이지 movieDetail:', movieDetail)
     dispatch({
       type: "GET_MOVIE_DETAIL_SUCCESS",
       payload: {
         movieDetail: movieDetail.data
       }
     })
     //console.log('action 페이지 movieDetail결과:', movieDetail)
   } catch (error) {
     dispatch({ type: "GET_MOVIE_DETAIL_FAIL", payload: error.error });
   }
 };
 

export const movieAction = {
    getMovies, getMovieDetail
}
