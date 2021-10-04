import { FormEvent, useMemo, useState } from 'react';
import { Container, FormArea, HourSelectContainer, Button, RadioBox, MetricsContainer } from './styles'
import heartIcon from '../../assets/heartRate.svg'
import pressureIcon from '../../assets/group.svg'
import { useAccount } from '../../hooks/useAccount';
import { useMetrics } from '../../hooks/useMetrics';
import { useHistory } from 'react-router';

interface Metric {
    date: string;
    bpm: number;
    pamin: number;
    pamax: number;
}

export function ContentForm() {
    const { createAccount } = useAccount();
    const { createMetrics } = useMetrics();
    const history = useHistory();
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

    const [isLoading, setIsLoading] = useState(false);

    const metricDate = useMemo(() => {
        const date = `${selectedDay} ${selectedHour}`
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
        } else {
            setMetrics([...metrics, { date: metricDate, bpm: Number(bpm), pamin: Number(pamin), pamax: Number(pamax) }])
            setPagination(pagination + 1)
        }

    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        setIsLoading(true);

        const account = await createAccount({ name, birthDate })

        await createMetrics({ account_id: account.id, metrics });

        setIsLoading(false);

        history.push('/metrics')
    }

    return (
        <Container>
            <FormArea>
                <h2>Diário de saúde</h2>
                <span>Crie seu relatório diário de saúde</span>
                <form onSubmit={handleSubmit}>
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
                                <RadioBox isSelected={pagination === 1 || pagination > 1}>02:00</RadioBox>
                                <RadioBox isSelected={pagination === 2 || pagination > 2}>06:00</RadioBox>
                                <RadioBox isSelected={pagination === 3 || pagination > 3}>10:00</RadioBox>
                                <RadioBox isSelected={pagination === 4 || pagination > 4}>14:00</RadioBox>
                                <RadioBox isSelected={pagination === 5 || pagination > 5}>18:00</RadioBox>
                                <RadioBox isSelected={pagination === 6 || pagination > 6}>22:00</RadioBox>
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
                                <button type='button' disabled={pagination > 6} onClick={handleNext}>{pagination < 6 ? 'Próximo' : 'Finalizar'}</button>
                            </MetricsContainer>
                        </>
                    )}

                    <Button disabled={isLoading} type="submit">{isLoading ? 'Carregando...' : 'Gerar Diário de Saúde'}</Button>
                </form>
            </FormArea>
        </Container>
    )
}