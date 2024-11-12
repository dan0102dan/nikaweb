import React, { useState } from 'react'
import { Header, Section, InputCode, Button, QRCodeBlock } from '../../Components/index'
import { IoDownload } from "react-icons/io5"
import { default as data } from './data'

const Root = () => {
    const [code, setCode] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        setLoading(true)
        setError('')
        setSuccess('')

        const inputCode = code.trim().toUpperCase()

        if (!inputCode || /\W/.test(inputCode)) {
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
        }
        else if (!foundCode.public_url) {
            setError('Доступ к скачиванию ещё закрыт. Попробуйте позже.')
            setLoading(false)
            return
        }

        window.open(foundCode.public_url, '_blank')

        setSuccess('Загрузка началась. Спасибо!')
        setLoading(false)
    }

    return (
        <>
            <Header email="irina.foto6@yandex.ru" />
            <Section
                title="Введите номер Вашей индивидуальной фотографии"
                error={error}
                success={success}
            >
                <InputCode
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onConfirm={() => getData()}
                />
                <Button loading={loading} onClick={() => getData()} icon={<IoDownload />}>
                    {loading ? 'Загрузка...' : 'Скачать'}
                </Button>
            </Section>
            <QRCodeBlock />
        </>
    )
}

export default Root
