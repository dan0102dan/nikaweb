import React from 'react'
import styles from './Section.module.css'

const Section = ({ title, children, error }) => {
    return (
        <div className={styles.section}>
            {title && <div className={styles.title}>{title}</div>}
            {children}
            {error && <div className={styles.error}>{error}</div>}
        </div>
    )
}

export default Section
