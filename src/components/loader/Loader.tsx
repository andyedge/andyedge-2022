import styles from './Loader.module.sass'
import { gsap } from 'gsap'
import { useEffect } from 'react'

declare interface LoaderProps {
    showLoader: boolean
}

const Loader = ({ showLoader } : LoaderProps ) => {
    const tl = gsap.timeline({repeat: -1, yoyo: true, repeatDelay: 1})

    useEffect(() => {
        const preloader = document.querySelector('.preloader')
        if (typeof window !== 'undefined' && preloader) {
            tl.fromTo(preloader, {
                strokeDashoffset: 300,
                strokeDasharray: 300
            },
            {
                ease: 'linear',
                strokeDashoffset: 0,
                strokeDasharray: 300,
                duration: 1
            })
        }
    }, [])

    if(!showLoader) {
        return null
    }

    return (
        <div className={styles.container}>
            <svg version='1.2' baseProfile='tiny' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='100px' height='100px' viewBox='0 0 100 100'>
                <path
                    className='preloader'
                    strokeWidth='11'
                    strokeLinecap='round'
                    fill='transparent'
                    d='M28.6,34c0,0,4.5-5.1,11.6-3.9 c7.2,1.2,9.7,7.7,9.8,12.1c0,0.9,0.1,16.3,0.1,16.3s1,11.5-9.2,14.9c-10.5,2.3-15.3-6.7-15.1-11.8C26.3,54.5,28.9,49,38.6,49 c16.8,0.8,23.5,3.7,28.8,0.7c5.5-2.6,10-10.3,4.6-18.3c-5.5-7.6-14.1-5.5-16.9-2.9c-2.2,2-4.4,4.4-4.9,9.2S50,59.1,50.1,60 c0.1,1,1.9,5.9,5.2,7.8c3.3,1.9,9.6,4.3,16.1-2'
                />
            </svg>
        </div>
    )
}

export default Loader