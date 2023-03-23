import { useEffect, useRef } from "react";
import Hls from "hls.js";
import css from "./Player.module.css";

export const Player = ({ link, preview, controls, name = "" }) => {
  const videoRef = useRef(null);
  const interval = useRef(null);

  useEffect(() => {
    if (Hls.isSupported() && videoRef) {
      var hls = new Hls();

      hls.loadSource(link);
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        videoRef.current.currentTime = localStorage.getItem(name) ?? 0;
        videoRef.play();
      });
    }
  }, [link, name])

  const handleMouseOver = (e) => {
    e.target.muted = true;
    e.target.play();
  }
  const handleMouseleave = (e) => {
    e.target.pause();
    e.target.muted = false;
  }

  const handleVideoPlaying = (e) => {
    // console.log('video is playing...' )

    interval.current = setInterval(() => {
      // console.log(videoRef.current.currentTime);
      localStorage.setItem(name, videoRef.current.currentTime);
    }, 1000) 
  }
  
  const handleVideoPause = (e) => {
    // console.log('video is pausing...')

    clearInterval(interval.current)
  }

  return (
    <>
      <video
        className={css.video}
        ref={videoRef}
        poster={preview}
        controls={controls}
        preload="auto"
        autoPlay={false}
        // 
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseleave}
        // 
        onPlaying={handleVideoPlaying}
        onPause={handleVideoPause}
      >
        {/* <source src={link} type="application/x-mpegURL"></source> */}
      </video>
    </>
  )
};