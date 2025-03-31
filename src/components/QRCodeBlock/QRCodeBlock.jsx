import React from 'react'
import QRCode from '../../assets/t_me-fotonika.jpg'

const QRCodeBlock = () => (
    <div className="glassContainer glassContainer--qr">
        <div className="title">Присоединяйтесь к нам в Telegram!</div>
        <div className="subtitle">
            Сканируйте QR-код или нажмите на него, чтобы перейти в канал.
        </div>
        <a className="qrImage" href="https://t.me/fotonika" target="_blank" rel="noopener noreferrer">
            <img src={QRCode} alt="QR Code в Telegram" />
        </a>
    </div>
)

export default QRCodeBlock
