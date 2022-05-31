import Icon from "./icon/Icon";
import { useRef, useState } from "react";

const VideoComponent = ({ videoUrl, videoClassnames }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const { videoDivClassname, videoClassname, playButtonClassname } = videoClassnames;

  const videoHandler = (e: any) => {
    const elementName = e.target.localName;

    switch (elementName) {
      case 'path':
        if (!playing) {
          videoRef.current?.play();
          setPlaying(true);
        } else {
          videoRef.current?.pause();
          setPlaying(false);
        }
        break;

      default:
        if (playing) {
          videoRef.current?.pause();
          setPlaying(false);
        }
        break;
    }
  };

  const videoFullscreen = () => {
    videoRef.current?.requestFullscreen();
  }

  return (
    <div key={'video-div'} className={videoDivClassname}>
      <video
        id="contact_video"
        ref={videoRef}
        className={videoClassname}
        style={playing ? { cursor: 'pointer' } : { cursor: 'default' }}
        src={videoUrl}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onClick={(e) => videoHandler(e)}
        onDoubleClick={() => videoFullscreen()}
      ></video>
      <button
        className={playButtonClassname}
        style={playing ? { opacity: 0 } : { opacity: 1 }}
        onClick={(e) => videoHandler(e)}
      >
        <Icon name="play" size="40" />
      </button>
    </div>
  )
}

export default VideoComponent;