import React from 'react'
import styles from './Header.module.css'

const Header = ({ address, name, email }) => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <h1>{name}</h1>
            </div>
            <div className={styles.info}>
                <p>{address}</p>
                <p>
                    <a href={`mailto:${email}`}>{email}</a>
                </p>
            </div>
        </div>
    )
}

export default Header
