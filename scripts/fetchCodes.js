import { api } from '../src/API.js'
import fs from 'fs'

console.log('Yandex Key:', process.env.YANDEX_KEY)
console.log('TEST:', process.env.TEST)

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

            if (items && items.length > 0) {
                allItems = allItems.concat(items.map(({ name, path, public_url }) => {
                    const transformedName = name.replace('.zip', '').toUpperCase()

                    if (path === `disk:/${name}`)
                        return { name: transformedName, public_url }

                    return { name: transformedName }
                }))

                offset += limit
            } else {
                hasMore = false
            }
            console.log(`Архивов найдено: ${allItems.length}`)
        }

        console.log(`Всего получено элементов: ${allItems.length}`)

        fs.writeFileSync('src/routes/Root/data.json', JSON.stringify(allItems))
        console.log('Файл data.json успешно сохранен.')
    } catch (e) {
        console.error('Ошибка при получении данных:', e.message)
        return
    }
}

fetchAllFiles()
