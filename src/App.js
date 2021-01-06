import './App.css';
import React, { Fragment } from 'react';
import BarraLateral from './componentes/BarraLateral';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Ventas from './paginas/Ventas';
import PageInventario from './paginas/PageInventario';
import Resumen from './paginas/Resumen';
import Calculadora from './paginas/Calculadora';

function App() {
  return (
    <div style={{ 
      height: "100vh", 
      display: "flex",
      flexFlow: "column nowrap" }}
    >
      <div className='barraSup'/>
      <Router>
        <div style={{
          display: "flex",
          flexFlow: "row nowrap",
          flex: "1 1",
          alignItems: "stretch"}}
        >
          <div style={{ width: "210px", flex: "0 0 auto" }}>
            <BarraLateral/>
          </div>
          <div style={{ flex: "1 1" }}>
            <Switch>
              <Route path = '/' exact component={Ventas}/>
              <Route path = '/inventario' component={PageInventario}/>
              <Route path = '/resumen' component={Resumen}/>
              <Route path = '/calculadora' component={Calculadora}/>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
  
}

export default App;
