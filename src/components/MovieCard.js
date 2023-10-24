import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'


const MovieCard = ({item, isSelected}) => {
  const {genreList} = useSelector(state=>state.movie)
  const navigate = useNavigate();
  
  return (
    <div onClick={()=>navigate(`/movies/${item.id}`)}>
    <div
        className={`card ${isSelected ? "selected" : ""}`}
        style={{
          backgroundImage:
            "url(" +
            `https://image.tmdb.org/t/p/w355_and_h200_multi_faces${item?.backdrop_path}` +
            ")",
        }}
      >
      <div className="overlay">
        <div className="items" />
        <div className="items head">
          <h1>{item.title}</h1>
          <hr />
        </div>
        
        {/* 장르는 배열이므로 map으로 보여준다-results의 장르 정보는 아이디만 있고 장르 이름은 별도의 리스트로 가져와야함. 장르는 홈이 로딩될때 무비 정보를 가져올 때 같이 불러옴- 우선 여기까지만 확인 */}
        <div className='genre'>
          {item.genre_ids.map((id,idx)=>
            <Badge bg="danger" key={idx}>{genreList.find(item=>item.id==id).name}</Badge>)}
            </div>
        <ul className="social-group">
          <li className="vote-average">
            <span className="imdb">IMDB</span>
            {item.vote_average}
          </li>
          <li className='users'>
            <FontAwesomeIcon icon={faUsers} className='users-icon' />
            <span className="users-text">{item.popularity}</span>
          </li>
          <li className="adult-info">
            <span>
              {item.adult ? "18+" : "under 18"}
            </span>
          </li>
        </ul>
         
      </div>
    </div>
    </div>
  )
}

export default MovieCard
