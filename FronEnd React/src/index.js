import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cadastro from './Pages/Cadastro/Cadastro';
import Home from './Pages/Home/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Promocoes from './Pages/Promocoes/Promocoes';
import Destinos from './Pages/Destinos/Destinos'
import Contato from './Pages/Contato/Contato';
import Cliente from "./components/Cliente/Perfil";
import CriarDestino from './components/Sugestoes/CriarSugestaoDestino'
import SugestoesDestinos from './components/Sugestoes/SugestaoDestinos'
import PutOrDeleteSujestões from './components/Sugestoes/PutOrDeleteSujestões'
import CadastroUser from './components/CadastroUser/index'


ReactDOM.render(
  <React.StrictMode>
    
      <Router>
      <Header></Header>
        <Routes>
          <Route exact path="/"  element={<Home/>}></Route>
          <Route exact path="/Cadastro"  element={<Cadastro/>}></Route>
          <Route exact path="/Promocoes"  element={<Promocoes/>}></Route>
          <Route exact path="/AllDestinos"  element={<Destinos/>}></Route>
          <Route exact path="/Contato"  element={<Contato/>}></Route>
          <Route exact path="/user" element={<CadastroUser/>}></Route>

          <Route exact path="/Cliente" element={<Cliente/>} />
          <Route exact path="/CriarDestino" element={<CriarDestino/>} />
          <Route exact path="/destino" element={<SugestoesDestinos/>} />
          <Route exact path="/PutDeleteDestinos" element={<PutOrDeleteSujestões/>} />
          <Route path="/Destinos-Update/:idDestino" element={<CriarDestino/>}/>
        </Routes>
        <Footer></Footer>
      </Router>
     
  </React.StrictMode>,
  document.getElementById('root')
);