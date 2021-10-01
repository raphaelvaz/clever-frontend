import { useMemo, useState } from 'react';
import { Container, FormArea, HourSelectContainer, Button, RadioBox, MetricsContainer } from './styles'
import heartIcon from '../../assets/heartRate.svg'
import pressureIcon from '../../assets/group.svg'

interface Metric {
    date: string;
    bpm: number;
    pamin: number;
    pamax: number;
}

export function Content() {
    const HOURS_AVAILABLE = ['02:00:00', '06:00:00', '10:00:00', '14:00:00', '18:00:00', '22:00:00']
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedHour, setSelectedHour] = useState('02:00:00');
    const [pagination, setPagination] = useState(1);
    const [bpm, setBpm] = useState('');
    const [pamin, setPamin] = useState('');
    const [pamax, setPamax] = useState('');

    const [metrics, setMetrics] = useState<Metric[]>([]);


    const metricDate = useMemo(() => {
        const date = `${selectedDay} ${selectedHour}`
        console.log(metrics);
        return date;
    }, [selectedDay, selectedHour])

    function handleNext() {
        if (pagination < 6) {
            setMetrics([...metrics, { date: metricDate, bpm: Number(bpm), pamin: Number(pamin), pamax: Number(pamax) }])
            setPagination(pagination + 1)
            setSelectedHour(HOURS_AVAILABLE[pagination])
            setBpm('');
            setPamin('');
            setPamax('');
        }

    }

    return (
        <Container>
            <FormArea>
                <h2>Diário de saúde</h2>
                <span>Crie seu relatório diário de saúde</span>
                <form>
                    <label htmlFor="name">Nome completo</label>
                    <input name="name" value={name} onChange={(e) => setName(e.target.value)} type="text" />

                    <label htmlFor="birthDate">Data de nascimento</label>
                    <input name="birthDate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} type="date" />

                    <label htmlFor="date">Para qual dia você deseja gerar o gráfico de saúde?</label>
                    <input name="date" type="date" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)} />

                    {selectedDay && (
                        <>
                            <label htmlFor="date">Selecione a hora para preencher os dados</label>
                            <HourSelectContainer>
                                <RadioBox isSelected={pagination === 1 || pagination > 1} type='button'>02:00</RadioBox>
                                <RadioBox isSelected={pagination === 2 || pagination > 2} type='button'>06:00</RadioBox>
                                <RadioBox isSelected={pagination === 3 || pagination > 3} type='button'>10:00</RadioBox>
                                <RadioBox isSelected={pagination === 4 || pagination > 4} type='button'>14:00</RadioBox>
                                <RadioBox isSelected={pagination === 5 || pagination > 5} type='button'>18:00</RadioBox>
                                <RadioBox isSelected={pagination === 6 || pagination > 6} type='button'>22:00</RadioBox>
                            </HourSelectContainer>

                            <MetricsContainer>
                                <div>
                                    <div>
                                        <img src={heartIcon} alt='heart icon' />
                                        <strong>BPM</strong>
                                    </div>
                                    <input name="bpm" type="text" value={bpm} onChange={(e) => setBpm(e.target.value)} />
                                </div>
                                <div>
                                    <div>
                                        <img src={pressureIcon} alt='heart icon' />
                                        <strong>PRESSÃO ARTERIAL</strong>
                                    </div>
                                    <input name="pamin" type="text" value={pamin} onChange={(e) => setPamin(e.target.value)} />
                                    <input name="pamax" type="text" value={pamax} onChange={(e) => setPamax(e.target.value)} />
                                </div>
                                <button type='button' onClick={handleNext}>próximo</button>
                            </MetricsContainer>
                        </>
                    )}

                    <Button type="submit">Gerar Diário de Saúde</Button>
                </form>
            </FormArea>
        </Container>
    )
}