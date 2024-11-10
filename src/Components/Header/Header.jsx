import React from 'react'
import styles from './Header.module.css'
import { FaEnvelope } from 'react-icons/fa'
import image from './text.png'

const Header = ({ email }) => {
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Фотостудия <span className={styles.highlight}>"НИКА"</span>
                </h1>
                <p className={styles.subtitle}>Выездные фотосъёмки в школах и детских садах</p>
                <p className={styles.subtitle}>г. Москва и Московская область</p>
                <p className={styles.subtitle}>
                    <a href={`mailto:${email}`} className={styles.emailLink}>
                        <FaEnvelope className={styles.icon} /> {email}
                    </a>
                </p>
            </div>
            <div className={styles.imageContainer}>
                <img src={image} alt='' className={styles.image} />
            </div>
        </div>
    )
}

export default Header
