import cn from 'classnames'
import Link from 'next/link'
import Icon from '../icon/Icon'
import Theme from '../theme/Theme'
import RichText from '../RichText'
import { FC, useState } from 'react'
import Button from '../button/Button'
import CustomImage from '../image/Image'
import styles from './Footer.module.sass'
import Footer from '../../models/entities/footer.model'

declare interface FooterProps {
  data: Footer
}

const Footer: FC<FooterProps> = ({ data } : FooterProps) => {
  const [visible, setVisible] = useState(false)
  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div className={cn('container', styles.container)}>
          <div className={styles.col}>
            <div className={styles.box}>
              <Link href='/'>
                <div className={styles.logo}>
                  <CustomImage src={data.logo} />
                </div>
              </Link>
              <Theme className={styles.theme} />
            </div>
            <div className={cn(styles.item, { [styles.active]: visible })}>
              <div className={styles.category} onClick={() => setVisible(!visible)}>
                Navigation
                <Icon name='arrow-bottom' size={10} />
              </div>
              <div className={styles.menu}>
                {data.pageLinks.map((item, index) => (
                  <Link href={`/${item.url}`} key={index}>
                    <a className={styles.category}>{item.text}</a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <h6 className={styles.category}>{data.contactText}</h6>
            <div className={styles.info}>
              <RichText richText={data.contactContent} />
            </div>
          </div>
          <div className={styles.col}>
            <h6 className={styles.category}>{data.getInTouchText}</h6>
            <div className={styles.info}>
              <RichText richText={data.getInTouchContent} />
            </div>
            <Button link={data.button} size={'tiny'}/>
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <div className={cn('container', styles.container)}>
          <div className={styles.copyright}>
            {data.copyrightText}
          </div>
          <div className={styles.socials}>
            {data.socialLinks.map((item, index) => (
              <a
                className={styles.social}
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                key={index}
              >
                <Icon name={item.icon} size={item.size} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
