import { Container, CustomButton } from './styles'
import avatarImg from '../../assets/avatar.svg'
import { Heart } from '../../assets/svgComponents/Heart'
import { Group } from '../../assets/svgComponents/Group'

export function Graphic() {
    return (
        <Container>
            <header>
                <img src={avatarImg} alt='avatar' />
                <strong>Maria José</strong>
                <span> 39 anos</span>
                <div>
                    <span>Diário de Saúde</span>
                    <span>14/09/2021</span>
                </div>
            </header>
            <main>
                <CustomButton>
                    <div>
                        <Heart fill={'#40465C'} />
                        <strong>BPM</strong>
                    </div>
                </CustomButton>
                <CustomButton>
                    <div>
                        <Group fill={'#40465C'} />
                        <strong>PA</strong>
                    </div>
                </CustomButton>
            </main>
        </Container>
    )
}