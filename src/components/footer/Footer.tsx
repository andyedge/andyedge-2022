import cn from 'classnames'
import Link from 'next/link'
import Icon from '../icon/Icon'
import Theme from '../theme/Theme'
import RichText from '../RichText'
import { FC } from 'react'
import CustomImage from '../image/Image'
import styles from './Footer.module.sass'
import Footer from '../../models/entities/footer.model'
import ContactModal from '../contactModal/ContactModal'

declare interface FooterProps {
  data: Footer
}

const Footer: FC<FooterProps> = ({ data } : FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div className={cn('container', styles.container)}>
          <div className={styles.col}>
            <div className={styles.box}>
              <Link href='/'>
                <div className={styles.logo}>
                  <CustomImage src={{image: data.logo}} />
                </div>
              </Link>
              <Theme className={styles.theme} />
            </div>
            <div className={cn(styles.item, styles.active)}>
              <div className={styles.category}>
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
            <div className={styles.info_alt}>
              <RichText richText={data.getInTouchContent} />
            </div>
            <ContactModal text={data.button.text} className={'button-default'} formId={data.formId}/>
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
