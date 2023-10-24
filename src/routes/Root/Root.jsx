import React, { useState } from 'react'
import { Header, Section, InputCode, Button } from '../../Components/index'
import { api } from '../../API'

const Root = () => {
    const [code, setCode] = useState('')
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        setLoading(true)
        try {
            const { data: { items } } = await api.get('disk/resources/files', {
                params: {
                    limit: 100,
                    media_type: 'compressed'
                }
            })
            console.log(items.map(e => e.name.replace('.zip', '')))

            try {
                const { data } = await api.get('disk/resources',
                    {
                        params: {
                            path: code + '.zip'
                        }
                    })

                if (!data.file)
                    setError({ message: 'Архив не найден' })

                console.log(items.map(e => e.name.replace('.zip', '')))
                console.log(data)

                const downloadLink = document.createElement('a')
                downloadLink.href = data.file
                downloadLink.target = '_blank'
                downloadLink.download = data.name
                downloadLink.click()
            }
            catch {
                if (items.map(e => e.name.replace('.zip', '')).includes(code))
                    setError({ message: 'Архив ещё не готов, попробуйте позже' })
            }
        }
        catch (e) {
            console.error(e)
            setError({ message: 'Получили ошибку с сервера, попробуйте позже' })
        }
        setLoading(false)
    }

    return (
        <>
            <Header address={'г.Москва и МО '} name={'Фотостудия НИКА'} email={'irina.foto6@yandex.ru'} />
            <Section title='Введите код фотосъемки' error={error.message}>
                <InputCode value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onConfirm={() => getData()}
                />
                <Button
                    loading={loading}
                    onClick={() => getData()}
                >
                    Скачать
                </Button>
            </Section>
        </>
    )
}

export default Root