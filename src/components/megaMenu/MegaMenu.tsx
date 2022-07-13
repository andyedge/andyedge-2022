import { useState } from 'react'
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
  setValue: (param1: boolean) => void
  isActive: boolean
}

const MegaMenu = ({ setValue, isActive, data } : MegaMenuProps) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setValue(false);
    setVisible(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={styles.group}>
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
        {visible && (
          <div className={styles.body}>
            <div className={styles.inner}>
              <div className={styles.row}>
                <div className={styles.col}>
                  <Link href='/why'>
                    <a className={styles.direction}>
                        <h3 className={styles.info}>{data.leftTitle}</h3>
                        <div className={styles.preview}>
                          <CustomImage src={data.logo}/>
                        </div>
                    </a>
                  </Link>
                  <div className={styles.menu}>
                    {data.leftLinks.map((item, index) => (
                      // <Link
                      //   className={styles.box}
                      //   activeClassName={styles.active}
                      //   href={item.link}
                      //   key={index}
                      //   onClick={() => handleClick()}
                      // >
                      // </Link>
                      <a key={index} href={item.preTitle} className={styles.box}>
                        <div className={styles.icon}>
                          <CustomImage src={item.image as ImageType}/>
                        </div>
                        <h5 className={styles.subtitle}>{item.title}</h5>
                      </a>
                    ))}
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.line}>
                    <div className={styles.cell}>
                      <div className={styles.image_container}>
                        <h6 className={`status-black`}>
                            {data.labelText}
                        </h6>
                        <CustomImage src={data.bigImage} props={{customAttr: {objectFit: 'cover'}}}/>
                      </div>
                      <div className={styles.central_section}>
                        <div>
                          <div className={styles.picture}>
                            <CustomImage src={data.logo} />
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
                    <div className={styles.cell}>
                      {data.rightItems.map((item, index) => (
                        <div className={styles.right_section} key={index}>
                          <div className={styles.board_image}>
                            <CustomImage src={item.leftImage} />
                          </div>
                          <div className={styles.right_section_info}>
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
                          </div>
                        </div>
                      ))}
                    </div>
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