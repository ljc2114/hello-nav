import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoJS = (props: any) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef<any>(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
      });
    } else {
      const player = playerRef.current;
      player.src(options.sources[0].src);      
      player.autoplay(true);

    }
  }, [options, videoRef]);
  
  return (
    <div data-vjs-player>
      <video ref={videoRef} id='video1' className="video-js vjs-big-play-centered" />
    </div>
  );
}

export default VideoJS;