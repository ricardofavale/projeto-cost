//area de import-------------------------------------------------------

/* Fora de uso
import './App.css';
import {useState} from 'react'
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form'
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
*/

import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

//area de compilação---------------------------------------------------
function App() {

  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home/>}/>

        <Route exact path="/contato" element={<Contato/>}/>

        <Route exact path="/empresa" element={<Empresa/>}/>
      </Routes>

      <Footer/>
    </Router>
  );
}

//area de export
export default App;

