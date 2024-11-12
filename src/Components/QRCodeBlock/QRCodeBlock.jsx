import React from 'react'
import { Section } from '../index'
import styles from './QRCodeBlock.module.css'
import QRCode from './t_me-fotonika.png'

const QRCodeBlock = () => {
    return (
        <Section
            title="Присоединяйтесь к нам в Telegram!">
            <div className={styles.subtitle}>Сканируйте QR-код или нажмите на него, чтобы перейти в наш канал.</div>
            <a href="https://t.me/fotonika" target="_blank" rel="noopener noreferrer">
                <img src={QRCode} alt="QR Code в Telegram" className={styles.qrImage} />
            </a>
        </Section>
    )
}

export default QRCodeBlock
