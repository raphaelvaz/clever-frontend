import { Container, FormArea } from './styles'

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

                    <button type="submit">Gerar Diário de Saúde</button>
                </form>
            </FormArea>
        </Container>
    )
}