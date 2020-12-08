import './App.css';
import React from 'react';
import BarraLateral from './componentes/BarraLateral';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Ventas from './paginas/Ventas';
import Inventario from './paginas/Inventario';
import Resumen from './paginas/Resumen';
import Calculadora from './paginas/Calculadora';

function App() {


  return (
    <>
    <Router>

      <BarraLateral />
      <Switch>
        <Route path = '/' exact component={Ventas}/>
        <Route path = '/inventario' component={Inventario}/>
        <Route path = '/resumen' component={Resumen}/>
        <Route path = '/calculadora' component={Calculadora}/>
      </Switch>
    </Router>
    </>

  );
  
}

export default App;
