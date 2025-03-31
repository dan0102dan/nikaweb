import React, { useState, useEffect } from 'react'
import { Button } from '../index'
import data from '../../data/data'
import example from '../../assets/example.webp'

const InputCode = () => {
    const [code, setCode] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const [showHint, setShowHint] = useState(false)

    const toggleHint = () => {
        setShowHint(!showHint)
    }

    useEffect(() => {
        document.body.style.overflow = showHint ? 'hidden' : 'auto'
    }, [showHint])

    const getData = async () => {
        setLoading(true)
        setError('')
        setSuccess('')

        const inputCode = code.trim().toUpperCase()

        if (!inputCode || /[^\w.]/.test(inputCode)) {
            setError('Пожалуйста, введите корректный номер.')
            setLoading(false)
            return
        }

        if (!data || !data.length) {
            setError('Данные недоступны. Попробуйте позже.')
            setLoading(false)
            return
        }

        const foundCode = data.find(e => e.name === inputCode)

        if (!foundCode) {
            setError('Номер не найден. Проверьте правильность ввода.')
            setLoading(false)
            return
        } else if (!foundCode.public_url) {
            setError('Доступ к скачиванию ещё закрыт. Попробуйте позже.')
            setLoading(false)
            return
        }

        window.open(foundCode.public_url, '_blank')
        setSuccess('Загрузка началась. Спасибо!')
        setLoading(false)
    }

    return (
        <div className="inputContainer">
            <div className="glassContainer glassContainer--input">
                <div className="title">
                    Введите номер фотосъёмки, который был выдан вместе с готовыми фотографиями.
                </div>
                <div className="hintLink" onClick={toggleHint}>
                    Где найти номер
                </div>
                <div className="inputRow">
                    <input
                        type="text"
                        maxLength="12"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        onKeyDown={(e) => ['Enter', 'Tab'].includes(e.key) && getData()}
                        placeholder="Например: 14.3S2613"
                        className="input"
                    />
                    <Button loading={loading} onClick={getData}>
                        {loading ? 'Загрузка...' : 'Скачать'}
                    </Button>
                </div>
                {error && <div className="error">{error}</div>}
                {success && <div className="success">{success}</div>}
            </div>

            <div
                className={`hintOverlay${showHint ? ' show' : ''}`}
                onClick={toggleHint}
            >
                <div className="hintContent" onClick={(e) => e.stopPropagation()}>
                    <img src={example} alt='Пример номера' className="hintImage" />
                    <p>Номер был выдан вместе с готовыми фотографиями (прикреплён к файлу).</p>
                    <Button onClick={toggleHint}>Закрыть</Button>
                </div>
            </div>
        </div>
    )
}

export default InputCode
