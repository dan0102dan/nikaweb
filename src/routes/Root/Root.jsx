import React, { useState } from 'react'
import { Header, Section, InputCode, Button, QRCodeBlock } from '../../Components/index'
import { api } from '../../API'

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

        async function fetchAllFiles () {
            const limit = 100
            let offset = 0
            let allItems = []
            let hasMore = true

            try {
                while (hasMore) {
                    const response = await api.get('disk/resources/public', {
                        params: {
                            limit: limit,
                            type: 'dir',
                            offset: offset,
                            fields: 'name'
                        },
                    })

                    const { items } = response.data

                    if (items && items.length > 0) {
                        allItems = allItems.concat(items)
                        offset += limit
                    } else {
                        hasMore = false
                    }
                }

                console.log(`Всего получено элементов: ${allItems.length}`)
                return allItems
            } catch (error) {
                console.error('Ошибка при получении данных:', error)
                throw error
            }
        }

        try {
            const items = await fetchAllFiles()
            console.log(items)
            console.log(items.find(e => e.name.includes('3S2410')))

            const availableCodes = items.map((e) => e.name.replace('.zip', '').toUpperCase())

            if (!availableCodes.includes(code.toUpperCase())) {
                setError('Код не найден. Проверьте правильность ввода.')
                setLoading(false)
                return
            }

            try {
                const { data } = await api.get('disk/resources', {
                    params: {
                        path: code.toUpperCase() + '.zip',
                    },
                })

                if (!data.file) {
                    setError('Альбом еще не готов. Попробуйте позже.')
                    setLoading(false)
                    return
                }

                const downloadLink = document.createElement('a')
                downloadLink.href = data.file
                downloadLink.target = '_blank'
                downloadLink.download = data.name
                downloadLink.click()

                setSuccess('Загрузка началась. Спасибо!')
                setError('')
            } catch (error) {
                setError('Ошибка при получении файла. Попробуйте позже.')
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
