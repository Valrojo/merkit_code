import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import BarraLateral from './componentes/BarraLateral';
import BarritaArriba from './componentes/BarritaArriba'

import Ventas from './paginas/Ventas';
import Inventario from './paginas/Inventario';
import Resumen from './paginas/Resumen';
import Calculadora from './paginas/Calculadora';

function App() {


  return (
    <div style={{ 
      height: "100vh", 
      display: "flex",
      flexFlow: "column nowrap" }}
    >
      
        <div style={{/*  display: 'flex', flexFlow: 'col', flex: */}}><BarritaArriba/></div>
        {/*<div className='barraSup'/>*/}

        <Router>
        
          <div style={{
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "stretch"}}
            >

            <div style={{width: "210px", flex: "1" }}>
              <BarraLateral/>
            </div>
            
            <div style={{
              display: "flex", 
              flex: "5.2", 
              flexFlow: "column reverse"
              }}>
              <Switch>
                <Route path = '/' exact component={Ventas}/>
                <Route path = '/inventario' component={Inventario}/>
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
