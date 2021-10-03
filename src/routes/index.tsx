import { Switch, Route } from 'react-router-dom'
import { Register } from '../pages/Register'
import { ResultsPage } from '../pages/ResultsPage'

export function Routes() {

    return (
        <Switch>
            <Route path="/" exact component={Register} />
            <Route path="/metrics" component={ResultsPage} />
        </Switch>
    )
}