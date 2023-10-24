import React from 'react'
import { ReactComponent as Spinner } from './spinner.svg'
import styles from './Button.module.css'

const Button = ({ children, onClick, loading }) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            {loading ? <Spinner className={styles.spinner} /> : children}
        </button>
    )
}

export default Button