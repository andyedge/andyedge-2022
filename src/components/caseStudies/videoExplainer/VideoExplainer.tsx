import StandardContainer from '../../../models/generic/standardContainer.model'
import TitleShare from '../../titleShare/TitleShare'
import VideoComponent from '../../VideoComponent'
import styles from './VideoExplainer.module.sass'

const VideoExplainer = ({ contents } : { contents : StandardContainer }) => (
    <div className={styles.container}>
        <TitleShare 
            title={{
                text: contents.preTitle as string,
                url: '',
                preText: '',
                newTab: true
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
                <div>
                    <VideoComponent videoUrl={contents.videoUrl} videoClassnames={{
                        videoDivClassname: styles.video_container,
                        videoClassname: styles.video,
                        playButtonClassname: 'play'
                    }}/>
                </div>
            </div>
        </div>
    </div>
)

export default VideoExplainer
