import { Container, CustomButton } from './styles'
import avatarImg from '../../assets/avatar.svg'
import { Heart } from '../../assets/svgComponents/Heart'
import { Group } from '../../assets/svgComponents/Group'
import { useState } from 'react';

type graphType = 'bpm' | 'pa'

export function Graphic() {
    const [type, setType] = useState<graphType>('bpm');

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
                <CustomButton active={type === 'bpm'} onClick={() => setType('bpm')}>
                    <div>
                        <Heart fill={type === 'bpm' ? '#fff' : '#40465C'} />
                        <strong>BPM</strong>
                    </div>
                </CustomButton>
                <CustomButton active={type === 'pa'} onClick={() => setType('pa')} >
                    <div>
                        <Group fill={type === 'pa' ? '#fff' : '#40465C'} />
                        <strong>PA</strong>
                    </div>
                </CustomButton>
            </main>
        </Container>
    )
}