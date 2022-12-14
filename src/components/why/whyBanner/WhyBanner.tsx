import cn from 'classnames'
import RichText from '../../RichText'
import CustomImage from '../../image/Image'
import { useEffect, useState } from 'react'
import ScrollParallax from '../../ScrollParallax'
import useDarkMode from '@fisch0920/use-dark-mode'
import styles from './WhyBanner.module.sass'
import StandardContainer from '../../../models/generic/standardContainer.model'

declare interface WhyBannerProps {
  content: StandardContainer
}

const WhyBanner = ({ content } : WhyBannerProps) => {
  const wrapStyle = content.mediaPosition?.toLowerCase() === 'right' ? { marginRight: 'auto' } : { marginLeft: 'auto' };
  const darkMode = useDarkMode(false);
  const [srcLine, setSrcLine] = useState('');
  const [srcLighthouse, setSrcLighthouse] = useState('');  

  useEffect(() => {
    if (darkMode.value) {
      setSrcLine('/images/bg-line-03-dark.svg');
      setSrcLighthouse('/images/lighthouse-light-dark.svg');
    } else {
      setSrcLine('/images/bg-line-03.svg');
      setSrcLighthouse('/images/lighthouse-light.svg');
    }
  }, [darkMode.value]);

  return (
    <>
      <div className={styles.section}>
        <div className={cn(styles.container_section)}>
          <div className={styles.wrap} style={wrapStyle}>
            <h2 className={cn('h2', styles.title)}>
              {content.title}
            </h2>
            {
              content.text ?
                <div className={styles.text}>
                  <RichText
                    richText={content.text}
                  />
                </div>
                :
                null
            }
          </div>
          {
            content.imagesContainer && content.imagesContainer.length > 0 ?
              <>
                <ScrollParallax className={styles.background_div} animateIn='fadeInUp'>
                  <CustomImage src={content.imagesContainer[0]} />
                </ScrollParallax>
                <ScrollParallax className={styles.lines} animateIn='fadeInUp' delay={500}>
                  <img
                    src={srcLine}
                    alt='bg-line-03'
                  />
                </ScrollParallax>
                <ScrollParallax className={styles.lighthouse} animateIn='fadeInUp' delay={800}>
                  <img
                    src={srcLighthouse}
                    alt='lighthouse-light'
                  />
                </ScrollParallax>
              </>
              :
              null
          }
        </div>
      </div>
    </>
  );
}

export default WhyBanner;