import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import styles from './Button.module.css'

const Button = ({ children, onClick, loading, icon }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <FaSpinner className={styles.spinner} />
      ) : (
        <>
          {children}
          {icon && <span className={styles.icon}>{icon}</span>}
        </>
      )}
    </button>
  )
}

export default Button
