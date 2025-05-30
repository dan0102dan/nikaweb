# Фотостудия "НИКА"

Добро пожаловать в репозиторий веб-сайта фотостудии **"НИКА"**!

## О проекте

Этот проект представляет собой веб-приложение для фотостудии "НИКА", предлагающее выездные фотосессии в школах и детских садах Москвы и Московской области. Пользователи могут вводить уникальный код для загрузки своих фотографий.

## Структура проекта

- **`src/`**: Исходный код приложения.
  - **`Components/`**: Реактивные компоненты.
  - **`routes/`**: Маршруты приложения.
- **`.github/workflows/`**: Конфигурации GitHub Actions для деплоя.
- **`public/`**: Публичные ресурсы сайта.
- **`scripts/`**: Скрипты для автоматизации задач.
- **`package.json`**: Зависимости и скрипты проекта.
- **`tsconfig.json`**: Конфигурация TypeScript.

## Установка

1. **Клонируйте репозиторий:**

    ```sh
    git clone https://github.com/dan0102dan/nikaweb
    cd nikaweb
    ```

2. **Установите зависимости:**

    ```sh
    npm install
    ```

## Использование

1. **Запуск в режиме разработки:**

    ```sh
    npm start
    ```

    Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

2. **Сборка для продакшена:**

    ```sh
    npm run build
    ```

    Сборка будет доступна в папке `build/`.

## Деплой

Деплой осуществляется с помощью GitHub Actions. Файл конфигурации находится в [deploy.yml](.github/workflows/deploy.yml).

## Скрипты

- **`fetchCodes.js`**: Скрипт для обновления [data.json](/src/routes/Root/data.json) с использованием API Яндекс.Диска. Находится в [fetchCodes.js](/scripts/fetchCodes.js).

## API

Конфигурация API находится в [API.js](/src/API.js). Используется Axios для запросов к Яндекс.Диску.

## Лицензия

Этот проект лицензирован под [CC BY-NC License](https://creativecommons.org/licenses/by-nc-nd/4.0/).