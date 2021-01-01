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
      
      <div style={{ flex: "0" }}><BarritaArriba/></div>
      {/*<div className='barraSup'/>*/}

      <Router>
       
       <div style={{
          display: "flex",
          flexFlow: "row nowrap",
          flex: "1 1",
          alignItems: "stretch"}}
        >

        <div style={{width: "210px", flex: "0 0 auto" }}>
          <BarraLateral/>
       </div>
        {/* <BarraLateral/> */}
        <div style={{
          display: "flex", 
          flex: "1 1", 
          justifyContent: 'space-evenly',
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
