import { useEffect, useRef } from "react";
import Hls from "hls.js";

export const Player = ({ link }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported() && videoRef) {
      // var video = document.getElementById('video');
      var hls = new Hls();
      // bind them together
      hls.loadSource(link);
      hls.attachMedia(videoRef);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log('video and hls.js are now bound together !');
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