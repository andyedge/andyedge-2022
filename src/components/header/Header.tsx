import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'
import styles from './Header.module.sass'
import Image from '../image/Image'
import Header from '../../models/header.model'
import MegaMenu from '../megaMenu/MegaMenu'

const HeaderComponent = ({ data } : { data: Header}) => {
  const [visibleNav, setVisibleNav] = useState(false);
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={cn('container', styles.container)}>
        <Link href='/'>
          <a className={styles.logo}>
            <Image src={data.logo}/>
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
              className={styles.group}
              item={{}}
              text={data.megaMenu}
              setValue={setVisibleNav}
            />
          </nav>
        </div>
        <Link
          href='/'
        >
          <a className={cn('button-stroke button-small', styles.button)}> {data.ctaButton.text} </a>          
        </Link>
        <button
          className={cn(styles.burger, { [styles.active]: visibleNav })}
          onClick={() => setVisibleNav(!visibleNav)}
        ></button>
      </div>
    </header>
  );
};

export default HeaderComponent;