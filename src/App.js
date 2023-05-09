import * as React from "react";
import {Routes, Route} from 'react-router-dom';
import {Navbar} from './navbar';
import Tiempo from './tiempo';
import Ancestro from './longitud';
import Convertidor from './peso';
import {Footer} from './footer';

function App(){
  return(
    <>
      <Navbar/>
      <Routes>
          <Route index element={<Tiempo/>} />
          <Route path="tiempo" element={<Tiempo/>}/>
          <Route path="longitud" element={<Ancestro/>}/>
          <Route path="peso" element={<Convertidor/>} />
      </Routes>
      <Footer/>
    </>
  );
}
     
export default App;

