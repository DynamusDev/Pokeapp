import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Pokedex } from './pages/Pokedex';
import { Legendaries } from './pages/Legendaries';
import { Documentation } from './pages/Documentation'

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/pokedex' component={Pokedex} />
        <Route path='/legendaries' component={Legendaries} />
        <Route path='/documentation' component={Documentation} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;