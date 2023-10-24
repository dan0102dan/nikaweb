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
            const { data } = await api.get('disk/resources',
                {
                    params: {
                        path: code + '.zip'
                    }
                })

            if (!data.file)
                setError({ message: 'Файл не найден' })
            console.log(data)

            const downloadLink = document.createElement('a')
            downloadLink.href = data.file
            downloadLink.target = '_blank'
            downloadLink.download = data.name
            downloadLink.click()
        }
        catch (e) {
            console.error(e)
            setError(e.response.data)
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