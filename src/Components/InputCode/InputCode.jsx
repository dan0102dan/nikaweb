import React from 'react'
import styles from './InputCode.module.css'

const InputCode = ({ value, onChange, onConfirm }) => {
    const handleKeyDown = (e) => {
        if (['Enter', 'Tab'].includes(e.key))
            onConfirm(e)
    }

    return (
        <div className={styles.coinInput}>
            <input
                type="text"
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
                placeholder='*****'
                autoFocus
            />
        </div>
    )
}

export default InputCode