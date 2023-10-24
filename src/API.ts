import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://cloud-api.yandex.net/v1',
    headers: {
        authorization: 'GITHUB_SECRETS_YANDEX_KEY'
    }
})