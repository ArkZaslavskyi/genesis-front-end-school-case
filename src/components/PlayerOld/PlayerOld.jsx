import { Component } from "react";
import Hls from "hls.js";

export default class PlayerOld extends Component {

  componentDidMount() {
    if (Hls.isSupported() && this.player) {
      const videoUrl = this.props.link;
      const video = this.player;
      const hls = new Hls();
      // bind them together
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MEDIA_ATTACHED
        , function () {
        console.log('video and hls.js are now bound together !');
        // video.play();
      }
      );
    }
  }
  
  render() {

    return (
      <>
        <video ref={(player) => this.player = player} width="400" controls preload="auto" data-setup="{}" autoPlay={false} >
          {/* <source src={link} type="application/x-mpegURL"></source> */}
        </video>
      </>
    )
  }
};