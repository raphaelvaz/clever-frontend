import { Switch, Route } from 'react-router-dom'
import { Register } from '../pages/Register'

export function Routes() {

    return (
        <Switch>
            <Route path="/" exact component={Register} />
        </Switch>
    )
}