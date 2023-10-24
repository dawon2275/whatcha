import React, { useEffect} from 'react';
import { Container, Row, Col, Badge} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import Video from '../components/Video';
import Review from '../components/Review';
import { movieAction } from '../redux/action/movieAction';
import { useDispatch, useSelector } from 'react-redux';

const Moviedetail = () => {
  /* let [showDetail, setShowDetail] = useState({});
  const API_KEY = process.env.REACT_APP_API_KEY; */

  /* 리덕스로 변환 */
  const dispatch = useDispatch();
  const {
    movieDetail,
  } = useSelector((state) => state.movie);
  let { id } = useParams();

  /* 리덕스 선언안할거면 이대로 써도 됨 */
  /* const detail = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

    let response = await fetch(url);
    let data = await response.json();
    setShowDetail(data);
    //console.log(data)
  };   
   useEffect(() => {
    detail();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDetail]);
 */

  useEffect(() => {
    dispatch(movieAction.getMovieDetail(id));
    dispatch(movieAction.getMovies());
  }, [id, dispatch]);

  return (
    <Container>
      <Row>
        <Col lg={6} className="detail_section detail_img_card">
          <div
            className="detail-img"
            style={{
              backgroundImage:
                "url(" +
                `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieDetail?.poster_path}` +
                ")",
            }}
          ></div>
        </Col>

        <Col lg={6} className="detail_section">
          <ul className="details-genres">
            {/* genres 배열이 있는지 확인 후 렌더링 */}
            {movieDetail.genres &&
              movieDetail.genres.map((genre, idx) => (
                <li key={idx}>{genre.name}</li>
              ))}
          </ul>
          <div className="detail_title">{movieDetail?.title}</div>
          <div className="detail_tagline">{movieDetail?.tagline}</div>
          <hr />
          <div className="detail_overview">{movieDetail?.overview}</div>
          <hr />

          <div className="detail_info">
            {/* <FontAwesomeIcon
              className="detail_star"
              icon={faStar}
              style={{ color: "#ecd227" }}
            /> */}
            <ul className="social-group">
          <li className="vote-average">
            <span className="imdb">IMDB</span>
            {movieDetail?.vote_average}
          </li>
          <li className='users'>
            <FontAwesomeIcon icon={faUsers} className='users-icon' />
            <span className="users-text">{movieDetail?.popularity}</span>
          </li>
          <li className="adult-info">
            <span>
              {movieDetail?.adult ? "18+" : "under 18"}
            </span>
          </li>
        </ul>
          </div>

          <hr />
          <div className="detail_info2">
            <div>
              <Badge bg='danger' text="light">
                Release Date
              </Badge>
              <span className="badge-text">{movieDetail?.release_date}</span>
            </div>
            <div>
            <Badge bg='danger' text="light">
                Budget
              </Badge>
              <span className="badge-text">{movieDetail?.budget}</span>
            </div>
            <div>
            <Badge bg='danger' text="light">
                Runtime
              </Badge>
              <span className="badge-text">{movieDetail?.runtime}</span>
            </div>
            <div>
            <Badge bg='danger' text="light">
                Popularity
              </Badge>
              <span className="badge-text">{movieDetail?.popularity}</span>
            </div>
          </div>
          <hr />

          <div>
            <Video />
          </div>
        </Col>
      </Row>

      <Review />
    </Container>
  );
};

export default Moviedetail;

