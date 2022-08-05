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
                    action: '',
                    buttonColor: ''
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
                        <div className={styles.video_container}>
                            <iframe
                                className={styles.video}
                                src={contents.videoUrl}
                                allowFullScreen
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
