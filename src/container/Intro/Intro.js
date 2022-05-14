import React from 'react'
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'

import video from '../../assets/video.mp4'

import './Intro.css'

const Intro = () => {

    const [playVideo, setPlayVideo] = React.useState(false)

    const vidRef = React.useRef();

    const handleVideo = () => {
        setPlayVideo(!playVideo)

        if(playVideo) {
            vidRef.current.pause();
        } else {
            vidRef.current.play();
        }
    }

  return (
    <div className='video'>
        <video ref={vidRef} src={video} type="video/mp4" loop controls={false} muted />

        <div className='video-overlay flex__center'>
            <div className='video-overlay__circle flex__center' onClick={handleVideo}>
                {playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color="#fff" fontSize={30} />}
            </div>

        </div>
        
    </div>
  )
}

export default Intro