import React from 'react'
import styles from './Header.module.css'

const Header = ({ email }) => {
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Фотостудия <span className={styles.highlight}>НИКА</span>
                </h1>
                <p className={styles.subtitle}>выездные фотосъёмки в школах и детских садах г.Москва и МО</p>
                <p className={styles.subtitle}>
                    <a href={`mailto:${email}`}>{email}</a>
                </p>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.image}></div>
            </div>
        </div>
    )
}

export default Header
