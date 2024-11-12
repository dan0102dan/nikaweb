import React, { useState } from 'react'
import { Header, Section, InputCode, Button, QRCodeBlock } from '../../Components/index'
import { api } from '../../API'
import { default as names } from './names'

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

        if (!inputCode) {
            setError('Пожалуйста, введите номер.')
            setLoading(false)
            return
        }

        if (!names.includes(inputCode)) {
            setError('Номер не найден. Проверьте правильность ввода.')
            setLoading(false)
            return
        }

        const newWindow = window.open('', '_blank')

        try {
            const { data } = await api.get('disk/resources', {
                params: {
                    path: inputCode + '.zip',
                },
            })

            if (!data.public_url) {
                setError('Доступ к скачиванию ещё закрыт. Попробуйте позже.')
                newWindow.close()
                setLoading(false)
                return
            }

            newWindow.location.href = data.public_url

            setSuccess('Загрузка началась. Спасибо!')
        } catch (e) {
            setError('Ошибка при загрузке файла. Попробуйте позже.')
            console.error(e)
            newWindow.close()
        } finally {
            setLoading(false)
        }
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
                <Button loading={loading} onClick={() => getData()}>
                    {loading ? 'Загрузка...' : 'Скачать'}
                </Button>
            </Section>
            <QRCodeBlock />
        </>
    )
}

export default Root
