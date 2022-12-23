import { render } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en <FirstApp />', () => {
    test('Debe hacer un mattch con el snapshot', () => {
        const title = 'Hola angel'
        render(<FirstApp title={title} />)
    })
})