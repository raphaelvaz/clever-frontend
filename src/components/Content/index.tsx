import { useState } from 'react';
import { Container, FormArea, HourSelectContainer } from './styles'

export function Content() {


    return (
        <Container>
            <FormArea>
                <h2>Diário de saúde</h2>
                <span>Crie seu relatório diário de saúde</span>
                <form>
                    <label htmlFor="name">Nome completo</label>
                    <input name="name" type="text" />

                    <label htmlFor="birthDate">Data de nascimento</label>
                    <input name="birthDate" type="date" />

                    <label htmlFor="date">Para qual dia você deseja gerar o gráfico de saúde?</label>
                    <input name="date" type="date" />
                    <label htmlFor="date">Selecione a hora para preencher os dados</label>

                    <HourSelectContainer>
                        <div>02:00</div>
                        <div>06:00</div>
                        <div>10:00</div>
                        <div>14:00</div>
                        <div>18:00</div>
                        <div>22:00</div>
                    </HourSelectContainer>
                    <button type="submit">Gerar Diário de Saúde</button>
                </form>
            </FormArea>
        </Container>
    )
}