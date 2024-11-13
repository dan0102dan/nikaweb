import React from 'react'
import styles from './Header.module.css'
import { FaEnvelope } from 'react-icons/fa'
import image from './text.png'

const Header = ({ email }) => {
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <div className={styles.title}>
                    Фотостудия <span className={styles.highlight}>«НИКА»</span>
                </div>
                <div className={styles.subtitle} style={{ marginBottom: 2 }}>Выездные фотосъёмки в школах и детских садах</div>
                <div className={styles.subtitle}>г. Москва и Московская область</div>
                <div className={styles.subtitle}>
                    <a href={`mailto:${email}`} className={styles.emailLink}>
                        <FaEnvelope className={styles.icon} /> {email}
                    </a>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src={image} alt='' className={styles.image} />
            </div>
        </div>
    )
}

export default Header
