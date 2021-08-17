import React from 'react'
import { Container } from './style'

export function LoadingPageAdmin() {
    return (
        <Container>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <h1>Carregando...</h1>
        </Container>
    )
}
