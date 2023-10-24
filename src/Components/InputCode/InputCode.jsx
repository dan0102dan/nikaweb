import React, { useEffect, useState } from 'react'
import styles from './InputCode.module.css'

const InputCode = ({ value, onChange, onConfirm }) => {
    const [placeholder, setPlaceholder] = useState('')

    useEffect(() => {
        let currentIndex = 0
        let placeholderText = generatePlaceholder(6)

        const generateAndErase = () => {
            setPlaceholder(placeholderText.substring(0, currentIndex))
            currentIndex++

            if (currentIndex > placeholderText.length) {
                clearInterval(interval)
                setTimeout(() => {
                    currentIndex = placeholderText.length
                    const eraseInterval = setInterval(() => {
                        setPlaceholder(placeholderText.substring(0, currentIndex))
                        currentIndex--

                        if (currentIndex < 0) {
                            clearInterval(eraseInterval)
                            placeholderText = generatePlaceholder(6)
                            currentIndex = 0
                            interval = setInterval(generateAndErase, 100)
                        }
                    }, 100)
                }, 5000)
            }
        }

        let interval = setInterval(generateAndErase, 100)
    }, [])

    const generatePlaceholder = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let result = ''
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length)
            result += characters[randomIndex]
        }

        return result
    }

    return (
        <div className={styles.coinInput}>
            <input
                type="text"
                value={value}
                onChange={onChange}
                onKeyDown={(e) => (['Enter', 'Tab'].includes(e.key)) && onConfirm(e)}
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputCode