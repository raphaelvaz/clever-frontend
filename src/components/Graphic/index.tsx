import { Container, CustomButton, Content } from './styles'
import avatarImg from '../../assets/avatar.svg'
import { Heart } from '../../assets/svgComponents/Heart'
import { Group } from '../../assets/svgComponents/Group'
import { useState } from 'react';
import Chart from 'react-google-charts';
import { useAccount } from '../../hooks/useAccount';

type graphType = 'bpm' | 'pa'

export function Graphic() {
    const { account } = useAccount();
    const [type, setType] = useState<graphType>('bpm');

    return (
        <Container>
            <Content>
                <header>
                    <img src={avatarImg} alt='avatar' />
                    <strong>{account.name}</strong>
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
                <div>
                    <Chart
                        width={'540px'}
                        height={'288px'}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['', ''],
                            [new Date('2021-09-17 02:00:00').toLocaleTimeString(), 88],
                            [new Date('2021-09-17 06:00:00').toLocaleTimeString(), 76],
                            [new Date('2021-09-17 10:00:00').toLocaleTimeString(), 90],
                            [new Date('2021-09-17 14:00:00').toLocaleTimeString(), 110],
                            [new Date('2021-09-17 18:00:00').toLocaleTimeString(), 99],
                            [new Date('2021-09-17 22:00:00').toLocaleTimeString(), 103],
                        ]}
                    />
                </div>
            </Content>
        </Container>
    )
}