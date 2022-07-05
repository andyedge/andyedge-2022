import { FC, useState } from 'react'
import RichText from '../../RichText'
import Button from '../../button/Button'
import CustomImage from '../../image/Image'
import styles from './PearsonInfo.module.sass'
import VideoComponent from '../../VideoComponent'
import ScrollParallax from '../../ScrollParallax'
import TitleShare from '../../titleShare/TitleShare'
import RowComponent from '../../rowComponent/RowComponent'
import Pearson from '../../../models/entities/pearson.model'

declare interface PearsonInfoProps {
    contents: Pearson
}

const PearsonInfo: FC<PearsonInfoProps> = ({ contents }: PearsonInfoProps) => {
    const [playing, setPlaying] = useState<boolean>(false);

    const videoPlayingHandler = (newStatus: boolean) => {
        setPlaying(newStatus);
    }

    return (
        <section className={styles.container}>
            <TitleShare
                title={contents.bigTitle1}
                section={'first_title'}
                background={''}
            />
            <div className='container'>
                <div className={styles.right_content}>
                    <h3 className='h2'>{contents.standardContainer2.title}</h3>
                    <p>{contents.standardContainer2.subtitle}</p>
                </div>
                <div className={styles.design_system}>
                    <aside>
                        {contents.standardContainer2.bulletsContainer?.map((item, index) => (
                            <ScrollParallax animateIn='fadeInUp' delay={(index + 1) * 100} key={index}>
                                <div>
                                    <h5>{item.title}</h5>
                                    <p>{item.text}</p>
                                    <Button link={item.link} size='tiny' />
                                </div>
                            </ScrollParallax>
                        ))}
                    </aside>
                    <div>
                        {contents.standardContainer2.videoUrl ?
                            <VideoComponent
                                videoUrl={contents.standardContainer2.videoUrl}
                                videoClassnames={{
                                    videoDivClassname: styles.video_container,
                                    videoClassname: styles.video,
                                    playButtonClassname: 'play'
                                }}
                                playing={playing}
                                playingHandler={videoPlayingHandler}
                            />
                            :
                            null
                        }
                        <div className={styles.video_caption}>
                            <RichText richText={contents.standardContainer2.text} />
                        </div>
                    </div>
                </div>
            </div>
            <TitleShare
                title={contents.bigTitle2}
                section={'first_title'}
                background={''}
            />
            <div className='container'>
                <div className={styles.image1}>
                    <CustomImage src={contents.bigImage} />
                </div>
            </div>
            <RowComponent
                items={contents.caseFeatures}
                headContent={contents.standardContainer3}
                isTitle={true}
                isPearson={true}
            />
            <div className='container'>
                <div className={styles.overlapped_images}>
                    <ScrollParallax animateIn='fadeInUp' delay={100}>
                        <CustomImage src={contents.underlappedImage} />
                    </ScrollParallax>
                    <ScrollParallax animateIn='fadeInUp' delay={300}>
                        <CustomImage src={contents.overlappedImage} />
                    </ScrollParallax>
                </div>
            </div>
            <TitleShare
                title={contents.bigTitle3}
                section={'two_rows_title'}
                background={''}
            />
            <div className='container-fluid'>
                <div className={styles.solution_banner}>
                    <CustomImage src={contents.bigImage2} />
                </div>
            </div>
            <RowComponent
                items={contents.solutionList}
                headContent={contents.standardContainer4}
                isTitle={true}
                isPearson={true}
            />
        </section>
    )
}

export default PearsonInfo