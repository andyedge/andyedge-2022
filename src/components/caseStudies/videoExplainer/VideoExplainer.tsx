import { useState } from 'react'
import VideoComponent from '../../VideoComponent'
import styles from './VideoExplainer.module.sass'
import TitleShare from '../../titleShare/TitleShare'
import StandardContainer from '../../../models/generic/standardContainer.model'

const VideoExplainer = ({ contents }: { contents: StandardContainer }) => {
    const [playing, setPlaying] = useState<boolean>(false);

    const videoPlayingHandler = (newStatus: boolean) => {
        setPlaying(newStatus);
    }

    return (
        <div className={styles.container}>
            <TitleShare
                title={{
                    text: contents.preTitle as string,
                    url: '',
                    preText: '',
                    newTab: true,
                    action: ''
                }}
                section='medium_case'
                background='#fff'
            />
            <div className='container'>
                <div className={styles.explainer_container}>
                    <div>
                        <h5>{contents.title}</h5>
                        <p>{contents.subtitle}</p>
                    </div>
                    {contents.videoUrl ?
                        <div>
                            <VideoComponent
                                videoUrl={contents.videoUrl}
                                videoClassnames={{
                                    videoDivClassname: styles.video_container,
                                    videoClassname: styles.video,
                                    playButtonClassname: 'play'
                                }}
                                playing={playing}
                                playingHandler={videoPlayingHandler}
                            />
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}

export default VideoExplainer
