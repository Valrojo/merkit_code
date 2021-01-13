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
      display: "flex",
      height: "100vh",
      width: "100vw",
      flexFlow: "column",
      alignItems: "stretch"
    }}
    >
      <div className='barraSup'/>
      <Router>
        <div style={{
          display: "flex",
          flex: "1 1 auto",
          alignItems: "stretch" }}
        >
          <div style={{ width: "210px", height: "100%", flex: "none" }}>
            <BarraLateral/>
          </div>
          <div style={{
            display: "flex",
            flex: "1",
            minHeight: "0",
            alignItems: "stretch" }}
          >
            <Switch>
              <Route exact path = '/'>
                <PageVentas/>
              </Route>
              <Route path = '/inventario'>
                <PageInventario inventario={refInventario}/>
              </Route>
              <Route path = '/resumen'>
                <PageResumen inventario={refInventario}/>
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
