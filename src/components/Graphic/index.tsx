import { Container, CustomButton, Content } from './styles'
import avatarImg from '../../assets/avatar.svg'
import { Heart } from '../../assets/svgComponents/Heart'
import { Group } from '../../assets/svgComponents/Group'
import { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { useAccount } from '../../hooks/useAccount';
import { useMetrics } from '../../hooks/useMetrics';

type graphType = 'bpm' | 'pa'

type graphData = (string | number)[][] | (string | string)[][]

export function Graphic() {
    const { account } = useAccount();
    const { metrics } = useMetrics();
    const [type, setType] = useState<graphType>('bpm');
    const [graphData, setGraphData] = useState<graphData>([]);

    useEffect(() => {
        if (type === 'bpm') {
            const data = metrics.map(metric => {
                return [new Date(metric.date).toLocaleTimeString(), metric.bpm]
            });
            setGraphData([...[['', '']], ...data]);
        } else {
            const data = metrics.map(metric => {
                return [new Date(metric.date).toLocaleTimeString(), metric.pamin, metric.pamax]
            });
            setGraphData([...[['', '', '']], ...data]);
        }
    }, [type, metrics])

    return (
        <Container>
            <Content>
                <header>
                    <img src={avatarImg} alt='avatar' />
                    <strong>{account.name}</strong>
                    <span>{`${Math.floor(((Date.now() - new Date(account.birthDate).getTime()) / 31557600000))} anos`}</span>
                    <div>
                        <span>Diário de Saúde</span>
                        <span>{new Date(metrics[0].date).toLocaleDateString()}</span>
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
                        data={graphData}
                    />
                </div>
            </Content>
        </Container>
    )
}