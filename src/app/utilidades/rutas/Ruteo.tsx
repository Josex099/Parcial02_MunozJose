import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";

import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

import { ConciCrear } from "../../componentes/conciertos/ConciertoCrear";
import { ConciListar } from "../../componentes/conciertos/ConciertoListar";
import { CoonciAdmin } from "../../componentes/conciertos/ConciertoAdmin";


export const Ruteo = () => {
    return(
        <Routes>
            <Route path="/" element={<Inicio/>}/>

            <Route path="/crearcor" element={<ConciCrear />}/>
            <Route path="/camlis" element={<ConciListar />}/>
            <Route path="/camadm" element={<CoonciAdmin />}/>



            

            <Route path="*" element={<NoEncontrado />}/>
        </Routes>
    )
};
