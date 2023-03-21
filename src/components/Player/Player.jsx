import { useEffect, useRef } from "react";
import Hls from "hls.js";
import css from "./Player.module.css";

export const Player = ({ link, preview }) => {
  const videoRef = useRef(null);
  
  useEffect(() => {
    if (Hls.isSupported() && videoRef) {
      var hls = new Hls();

      hls.loadSource(link);
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        videoRef.play();
      });
    }
  }, [link])

  const handleMouseOver = (e) => {
    e.target.muted = true;
    e.target.play();
  }
  const handleMouseleave = (e) => {
    e.target.pause();
    e.target.muted = false;
  }

  
  return (
    <>
      <video
        className={css.video}
        ref={videoRef}
        poster={preview}
        controls preload="auto" data-setup="{}" autoPlay={false}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseleave}
      >
        {/* <source src={link} type="application/x-mpegURL"></source> */}
      </video>
    </>
  )
};