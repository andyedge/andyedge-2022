import React, { useState, FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'
import styles from './Header.module.sass'
import Image from '../image/Image'
import Header from '../../models/entities/header.model'
import MegaMenu from '../megaMenu/MegaMenu'
import ContactModal from '../contactModal/ContactModal'
import Icon from '../icon/Icon'

declare interface HeaderProps {
  data: Header
}

const HeaderComponent: FC<HeaderProps> = ({ data } : HeaderProps) => {
  const [visibleNav, setVisibleNav] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const closeModal = () => setIsModalVisible(false)
  const openModal = () => setIsModalVisible(true)

  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={cn('container', styles.container)}>
        <Link href='/'>
          <a className={styles.logo}>
            <Image src={data.logo.image} srcDark={data.logo.darkImage}/>
          </a>
        </Link>
        <div className={cn(styles.wrap, { [styles.active]: visibleNav })}>
          <nav className={styles.nav}>
            {data.links.map((link, index) => {
              const isActive = router.pathname === link.url
              return (
                <Link
                  href={link.url}
                  key={index}
                >
                  <a className={cn(styles.link, isActive && styles.active)}>{link.text}</a>
                </Link>
              )
            })}
            <MegaMenu
              data={data.megaMenu}
              isActive={router.pathname === '/'}
            />
            <button className={cn("button-circle-stroke", styles.share)}>
              <Icon name="download" size={18} />
            </button>
            <button className={cn('button-stroke button-small', styles.contact)} onClick={openModal}>
              {data.ctaButton.text}
            </button>
          </nav>
        </div>
        <button className={cn("button-circle-stroke", styles.share)}>
          <Icon name="download" size={18} />
        </button>
        <button className={cn('button-stroke button-small', styles.contact)} onClick={openModal}>
          {data.ctaButton.text}
        </button>
        <ContactModal isModalVisible={isModalVisible} onClose={closeModal}/>
        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
      </div>
    </header>
  );
};

export default HeaderComponent;