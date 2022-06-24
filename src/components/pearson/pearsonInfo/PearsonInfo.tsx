import { FC } from 'react'

import Pearson from '../../../models/entities/pearson.model'
import Button from '../../button/Button'
import RichText from '../../RichText'
import TitleShare from '../../titleShare/TitleShare'
import styles from './PearsonInfo.module.sass'
import VideoComponent from '../../VideoComponent'
import CustomImage from '../../image/Image'
import ScrollParallax from '../../ScrollParallax'
import RowComponent from '../../rowComponent/RowComponent'

declare interface PearsonInfoProps {
    contents: Pearson
}


const PearsonInfo: FC<PearsonInfoProps> = ({ contents }: PearsonInfoProps) => {
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
                                    <Button text={item.link.text} link={item.link.url} size='tiny' />
                                </div>
                            </ScrollParallax>
                        ))}
                    </aside>
                    <div>
                        <VideoComponent
                            videoUrl={contents.standardContainer2.videoUrl}
                            videoClassnames={{
                                videoDivClassname: styles.video_container,
                                videoClassname: styles.video,
                                playButtonClassname: 'play'
                            }}
                        />
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
                <section className={styles.explore_section}>
                    <h6>{contents.standardContainer3.preTitle}</h6>
                    <h3 className='h2'>{contents.standardContainer3.title}</h3>
                    <div>
                        <RichText richText={contents.standardContainer3.text} />
                    </div>
                    <Button text={contents.standardContainer3.ctaText} link={contents.standardContainer3.ctaPageLink} size='tiny'/>
                </section>
            </div>
            {/* <RowComponent items={contents.caseFeatures} headContent={contents.standardContainer4}/> */}
            <TitleShare
                title={contents.bigTitle3}
                section={'first_title'}
                background={''}
            />
        </section>
    )
}

export default PearsonInfo