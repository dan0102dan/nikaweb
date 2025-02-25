import React, { useState, useEffect } from 'react'
import styles from './InputCode.module.css'
import { Button } from '../index'
import example from './example.jpg'

const InputCode = ({ value, onChange, onConfirm }) => {
    const [showHint, setShowHint] = useState(false)

    const toggleHint = () => {
        setShowHint(!showHint)
    }

    useEffect(() => {
        document.body.style.overflow = showHint ? 'hidden' : 'auto'
    }, [showHint])

    return (
        <div className={styles.inputContainer}>
            <div className={styles.hintLink} onClick={toggleHint}>
                Где найти номер
            </div>
            <div className={styles.inputRow}>
                <input
                    type="text"
                    maxLength="12"
                    value={value}
                    onChange={onChange}
                    onKeyDown={(e) => ['Enter', 'Tab'].includes(e.key) && onConfirm(e)}
                    placeholder="Ваш номер, например: 14.3S2613"
                    className={styles.input}
                />
            </div>
            <div
                className={`${styles.hintOverlay} ${showHint ? styles.show : ''}`}
                onClick={toggleHint}
            >
                <div className={styles.hintContent} onClick={(e) => e.stopPropagation()}>
                    <img src={example} alt='Пример номера' className={styles.hintImage} />
                    <p>Ваш номер находится на обратной стороне самого большого фото (формат А4).</p>
                    <Button onClick={toggleHint}>
                        Закрыть
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default InputCode
