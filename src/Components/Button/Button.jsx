import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import styles from './Button.module.css'

const Button = ({ children, onClick, loading }) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            {loading ? <FaSpinner className={styles.spinner} /> : children}
        </button>
    )
}

export default Button