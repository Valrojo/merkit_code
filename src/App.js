import './App.css';
import React from 'react';
import BarraLateral from './componentes/BarraLateral';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import PageInventario from './paginas/PageInventario';
import PageVentas from './paginas/PageVentas';
import PageResumen from './paginas/PageResumen';
import PageCalculadora from './paginas/PageCalculadora';
import Inventario from './clases/Inventario';

function App() {
  let refInventario = new Inventario();

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
              <Route exact path = '/'>
                <PageVentas/>
              </Route>
              <Route path = '/inventario'>
                <PageInventario inventario={refInventario}/>
              </Route>
              <Route path = '/resumen'>
                <PageResumen/>
              </Route>
              <Route path = '/calculadora'>
                <PageCalculadora/>
              </Route> 
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
  
}

export default App;
