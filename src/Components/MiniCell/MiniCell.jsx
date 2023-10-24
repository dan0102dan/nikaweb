import React from 'react'
import styles from './MiniCell.module.css'

const MiniCell = ({ title }) => {
    return (
        <div className={styles.cell}>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
            </div>
        </div >
    )
}

export default MiniCell