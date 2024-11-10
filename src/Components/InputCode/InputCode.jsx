import React, { useState, useEffect } from 'react'
import styles from './InputCode.module.css'
import { FaQuestionCircle } from 'react-icons/fa'
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
            <input
                type="text"
                value={value}
                onChange={onChange}
                onKeyDown={(e) => ['Enter', 'Tab'].includes(e.key) && onConfirm(e)}
                placeholder="Ваш номер"
                className={styles.input}
            />
            <FaQuestionCircle className={styles.hintIcon} onClick={toggleHint} />

            {showHint && (
                <div className={styles.hintOverlay} onClick={toggleHint}>
                    <div className={styles.hintContent} onClick={(e) => e.stopPropagation()}>
                        <img src={example} alt='' className={styles.hintImage} />
                        <p>Ваш номер находится на обратной стороне самого большого фото (формат А4).</p>
                        <button className={styles.closeButton} onClick={toggleHint}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default InputCode
