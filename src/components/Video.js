import React, { useState, useEffect } from 'react'
import {Button, Modal} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const Video = () => {
    let [show, setShow] = useState(false);
    
    //클릭하면 예고영상이 보여지기
    const trailerShow = () => setShow(true);
    const trailerShowClose = () => setShow(false);
    let [youtube, setYoutube] = useState(null);

    const API_KEY = process.env.REACT_APP_API_KEY;
    let { id } = useParams();
  
    const showVideo = async () => {
        let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
  
        let response = await fetch(url);
        let data = await response.json();
        setYoutube(data.results[0]);; //비디오 자료는 서버에서 다운로드 받을 때 순차적으로 다운받아서 실행해주므로 인덱스를 명시
      //console.log(data)
    };
  
    useEffect(() => {
        showVideo();
      }, [youtube]);

  return (
    <div>
      <Button variant='outline-danger' onClick={trailerShow}>
        Watch Trailer
      </Button>

      <Modal
        size={"xl"}
        clasName ="video-section"
        show={show}
        onHide={trailerShowClose}
    >
        <Modal.Header closeButton>
            <Modal.Title>Watch Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <YouTube
                videoId={youtube?.key}
                opts={{
                    width: "1080",
                    height: "740",
                    playerVars: {
                        autoplay: 1, 
                        loop: true
                    }
                 }} 
            />
        </Modal.Body>
    </Modal>
    </div>
  )
}

export default Video