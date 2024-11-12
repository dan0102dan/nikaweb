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

        if (!code.trim()) {
            setError('Пожалуйста, введите номер.')
            setLoading(false)
            return
        }

        try {
            if (!names.includes(code.toUpperCase())) {
                setError('Номер не найден. Проверьте правильность ввода.')
                setLoading(false)
                return
            }

            try {
                const { data } = await api.get('disk/resources', {
                    params: {
                        path: code.toUpperCase() + '.zip',
                    },
                })

                //const downloadLink = document.createElement('a')
                //downloadLink.href = data.public_url
                //downloadLink.target = '_blank'
                //downloadLink.download = data.name
                window.open(data.public_url, "_blank");

                setSuccess('Загрузка началась. Спасибо!')
                setError('')
            } catch (error) {
                setError('Доступ к скачиванию ещё закрыт. Попробуйте позже.')
                console.error(error)
            }
        } catch (error) {
            setError('Произошла ошибка. Попробуйте позже.')
            console.error(error)
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
