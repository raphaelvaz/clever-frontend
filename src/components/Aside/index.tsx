import { Container } from './styles'

import logoImg from '../../assets/logo.svg'
import runImg from '../../assets/run.png'
export function Aside() {
    return (
        <Container>
            <img src={logoImg} alt='logo' />
            <strong>Relatório de saúde em gráficos</strong>
        </Container>
    )
}