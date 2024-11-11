import { api } from '../src/API.js'
import fs from 'fs'

async function fetchAllFiles () {
    const limit = 100
    let offset = 0
    let allItems = []
    let hasMore = true

    try {
        while (hasMore) {
            const response = await api.get('disk/resources/files', {
                params: {
                    limit: limit,
                    media_type: 'compressed',
                    offset: offset,
                },
            })

            const { items } = response.data
            console.log(`Уже найдено: ${allItems.length}`)

            if (items && items.length > 0) {
                allItems = allItems.concat(items)
                offset += limit
            } else {
                hasMore = false
            }
        }

        console.log(`Всего получено элементов: ${allItems.length}`)

        const names = allItems.map((item) => item.name)

        fs.writeFileSync('src/routes/Root/names.json', JSON.stringify(names, null, 2))
        console.log('Файл names.json успешно сохранен.')
    } catch (error) {
        console.error('Ошибка при получении данных:', error)
        throw error
    }
}

fetchAllFiles()
