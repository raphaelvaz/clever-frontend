import { useState } from 'react';
import { Container, FormArea, HourSelectContainer, Button, RadioBox } from './styles'

export function Content() {
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedHour, setSelectedHour] = useState('');

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
                                <RadioBox isSelected={selectedHour === '02:00'} type='button' onClick={() => setSelectedHour('02:00')}>02:00</RadioBox>
                                <RadioBox isSelected={selectedHour === '06:00'} type='button' onClick={() => setSelectedHour('06:00')}>06:00</RadioBox>
                                <RadioBox isSelected={selectedHour === '10:00'} type='button' onClick={() => setSelectedHour('10:00')}>10:00</RadioBox>
                                <RadioBox isSelected={selectedHour === '14:00'} type='button' onClick={() => setSelectedHour('14:00')}>14:00</RadioBox>
                                <RadioBox isSelected={selectedHour === '18:00'} type='button' onClick={() => setSelectedHour('18:00')}>18:00</RadioBox>
                                <RadioBox isSelected={selectedHour === '22:00'} type='button' onClick={() => setSelectedHour('22:00')}>22:00</RadioBox>
                            </HourSelectContainer>
                        </>
                    )}

                    <Button type="submit">Gerar Diário de Saúde</Button>
                </form>
            </FormArea>
        </Container>
    )
}