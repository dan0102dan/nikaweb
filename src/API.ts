import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://cloud-api.yandex.net/v1',
    headers: {
        authorization: 'AQAAAAATjo-BAAbNL2irX8Bly0W-sZMYe51sHuY'
    }
})