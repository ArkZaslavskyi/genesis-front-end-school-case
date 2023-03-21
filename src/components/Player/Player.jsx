import { useEffect, useRef } from "react";
import Hls from "hls.js";

export const Player = ({ link }) => {
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
  
  return (
    <>
      <video ref={videoRef} width="400" controls preload="auto" data-setup="{}" autoPlay={false} >
        {/* <source src={link} type="application/x-mpegURL"></source> */}
      </video>
    </>
  )
};