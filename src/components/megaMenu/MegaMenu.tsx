import { useEffect, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import OutsideClickHandler from 'react-outside-click-handler'

import styles from './megaMenu.module.sass'
import Icon from '../icon/Icon'
import MegaMenu from '../../models/entities/megaMenu.model'
import CustomImage from '../image/Image'
import ImageType from '../../models/generic/image.model'

declare interface MegaMenuProps {
  data: MegaMenu
  isActive: boolean
}

const MegaMenu = ({ isActive, data }: MegaMenuProps) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const LeftSection  = () => (
    <div className={styles.col}>
      <Link href='/why'>
        <a className={styles.direction}>
          <h3 className={styles.info}>{data.leftTitle}</h3>
          <div className={styles.preview}>
            <CustomImage src={data.logo} />
          </div>
        </a>
      </Link>
      <div className={styles.menu}>
        {data.leftLinks.map((item, index) => (
          <Link key={index} href={`/${item.preTitle}`}>
            <a className={styles.box}>
              <div className={styles.icon}>
                <CustomImage src={item.image as ImageType} />
              </div>
              <h5 className={styles.subtitle}>{item.title}</h5>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )

  const CentralSection = () => (
    <div className={styles.cell}>
      <div className={styles.image_container}>
        <h6 className={`status-black`}>
          {data.labelText}
        </h6>
        <CustomImage src={data.bigImage} props={{ customAttr: { objectFit: 'cover' } }} />
      </div>
      <div className={styles.central_section}>
        <div>
          <div className={styles.picture}>
            <CustomImage src={data.profileImage} />
          </div>
          <div className={styles.titles}>
            <h5>{data.centralSectionTitle}</h5>
            <h6>{data.centralSectionSubtitle}</h6>
          </div>
        </div>
        <h5 className='status-stroke-black'>{data.centralSectionLabel}</h5>
      </div>
      <p className={styles.central_text}>{data.centralSectionText}</p>
    </div>
  )

  const RightSection = () => (
    <div className={styles.cell}>
      {data.rightItems.map((item, index) => (
        <div className={styles.right_section} key={index}>
          <div className={styles.board_image}>
            <CustomImage src={item.leftImage} />
          </div>
          <Link href={`/${item.link}`}>
            <a className={styles.right_section_info}>
              <h5 className={`status-${item.labelBackground}`}>{item.labelText}</h5>
              <div className={styles.products}>
                <div className={styles.product_logo}>
                  <CustomImage src={item.logo} />
                </div>
                <div>
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )

  const handleResize = () => setIsMobile(window.innerWidth <= 1023)

  useEffect(() => {
    if(typeof window !== 'undefined') {
      handleResize()
      window.addEventListener('resize', handleResize)
    }
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={styles.group}>
        {isMobile ? (
          <Link href='/'>
            <a className={styles.head}>{data.dropdownText}</a>
          </Link>
        ) : (
          <div
            className={cn(
              styles.head,
              { [styles.open]: visible },
              { [styles.active]: isActive }
            )}
            onClick={() => setVisible(!visible)}
          >
            {data.dropdownText}
            <Icon name='arrow-bottom' size={9} />
          </div>
        )}
        {visible && (
          <div className={styles.body}>
            <div className={styles.inner}>
              <div className={styles.row}>
                <LeftSection />
                <div className={styles.col}>
                  <div className={styles.line}>
                    <CentralSection />
                    <RightSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default MegaMenu