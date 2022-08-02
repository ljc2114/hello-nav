import React from 'react';
import VideoJS from '../video';

const VideoBg = () => {
  const playerRef = React.useRef(null);
  const options = {
    controls: false,
    autoplay: true, // 如果true,浏览器准备好时开始回放。
    muted: true, // 默认情况下将会消除任何音频。
    loop: true, // 导致视频一结束就重新开始。
    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
    language: 'zh-CN',
    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
    sources: [
      {
        src: 'https://aav.hxsp004.com/static/videos/h/video.mp4',
        type: 'video/mp4'
      }
    ],
    notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
  }
  const onReady = (play: any) => {
    playerRef.current = play
    play.play()
  }
  return <VideoJS options={options}
    onReady={onReady} />
}
export default VideoBg