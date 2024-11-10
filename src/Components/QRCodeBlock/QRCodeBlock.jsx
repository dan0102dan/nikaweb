import React from 'react'
import styles from './QRCodeBlock.module.css'
import QRCode from './t_me-fotonika.jpg'

const QRCodeBlock = () => {
    return (
        <div className={styles.qrBlock}>
            <h2 className={styles.title}>Присоединяйтесь к нам в Telegram!</h2>
            <p className={styles.subtitle}>Сканируйте QR-код или нажмите на него, чтобы перейти в наш канал.</p>
            <a href="https://t.me/fotonika" target="_blank" rel="noopener noreferrer">
                <img src={QRCode} alt="QR Code to Telegram" className={styles.qrImage} />
            </a>
        </div>
    )
}

export default QRCodeBlock
