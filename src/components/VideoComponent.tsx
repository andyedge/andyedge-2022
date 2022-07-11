import Icon from "./icon/Icon";
import { useRef, useState, useEffect } from "react";

declare interface VideoComponentProps {
  videoUrl: string
  videoClassnames: {
    videoDivClassname: string
    videoClassname: string
    playButtonClassname: string
  }
  playing: boolean
  playingHandler: (a: boolean) => void
}

const VideoComponent = ({ videoUrl, videoClassnames, playing, playingHandler }: VideoComponentProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [topPosition, setTopPosition] = useState <number> (0);
  const { videoDivClassname, videoClassname, playButtonClassname } = videoClassnames;

  const videoHandler = (e: any) => {
    const elementName = e.target.localName;
    switch (elementName) {
      case 'path':
      case 'button':
        if (!playing) {
          videoRef.current?.play();
          playingHandler(true);
        } else {
          videoRef.current?.pause();
          playingHandler(false);
        }
        break;

      default:
        if (playing) {
          videoRef.current?.pause();
          playingHandler(false);
        }
        break;
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current?.play();
      } else {
        videoRef.current?.pause();
      }
    }
  }, [playing])

  const videoFullscreen = () => {
    videoRef.current?.requestFullscreen();
  }

  const resizeEvent = () => {
    const top = videoRef.current?.clientHeight || 0
    setTopPosition(top / 2);
  }
  
  useEffect(() => {
    resizeEvent()
    window.addEventListener('resize', resizeEvent)
    return () => window.removeEventListener('resize', resizeEvent)
  }, [])

  return (
    <div key={'video-div'} className={videoDivClassname}>
      <video
        id="contact_video"
        ref={videoRef}
        className={videoClassname}
        style={playing ? { cursor: 'pointer' } : { cursor: 'default' }}
        src={videoUrl}
        onPlay={() => playingHandler(true)}
        onPause={() => playingHandler(false)}
        onClick={(e) => videoHandler(e)}
        onDoubleClick={() => videoFullscreen()}
      ></video>
      <button
        className={playButtonClassname}
        style={{
          top: topPosition,
          opacity: playing ? 0 : 1,
        }}
        onClick={(e) => videoHandler(e)}
      >
        <Icon name="play" size={40} />
      </button>
    </div>
  )
}

export default VideoComponent;