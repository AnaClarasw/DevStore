import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Produtos from './pages/produtos';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Produtos} />
            </Switch>
        </BrowserRouter>
    )
}