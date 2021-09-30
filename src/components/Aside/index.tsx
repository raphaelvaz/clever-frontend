import { Container, Logo } from './styles'

import logoImg from '../../assets/logo.svg'
import runImg from '../../assets/run.png'
export function Aside() {
    return (
        <Container>
            <Logo src={logoImg} alt='logo' />
            <strong>Relatório de saúde em gráficos</strong>
        </Container>
    )
}