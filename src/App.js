import './App.css';
import React, { useRef } from 'react';
import {Provider} from 'react-redux'
import BarraLateral from './shared/BarraLateral';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Pages
import PageInventario from './paginas/paginaInventario/PageInventario';
import PageVentas from './paginas/paginaVentas/PageVentas';
import PageResumen from './paginas/paginaResumen/PageResumen';
import PageCalculadora from './paginas/paginaCalculadora/PageCalculadora';
// Classes
import Inventario from './shared/Inventario';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        flexFlow: "column",
        alignItems: "stretch",
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
                  <PageInventario/>
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
    </Provider>
  );
  
}

export default App;
