import React from 'react'
import { useRouteError, useNavigate } from 'react-router-dom'
import { Button, Placeholder } from '../../Components/index'

const ErrorPage = () => {
    const navigate = useNavigate()

    const error = useRouteError()
    console.error(error)

    return (
        <Placeholder
            title={'Упс!'}
            description={'Произошла какая-то ошибка.'}
            errorInfo={error.statusText || error.message}
            icon={'😞'}
            action={<Button onClick={() => navigate('/')}>Перезагрузить</Button>}
        />
    )
}

export default ErrorPage