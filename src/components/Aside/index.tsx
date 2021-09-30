import { Container, Logo } from './styles'

import logoImg from '../../assets/logo.svg'
import runImg from '../../assets/runningwoman.png'
export function Aside() {
    return (
        <Container>
            <Logo src={logoImg} alt='logo' />
            <strong>Relatório de saúde em gráficos</strong>
            <span>Em poucos segundos, transforme os seus dados de saúde em gráficos de fácil leitura.</span>
        </Container>
    )
}