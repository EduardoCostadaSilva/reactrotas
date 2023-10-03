import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../componentes/body";
import PontosPositivos from "../componentes/PontosPositivos";
import Sobre from "../screens/Sobre";
import Usuario from "../screens/Usuario";




const RoutesRoot = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Body />} path="/" >
                    <Route element={<PontosPositivos />} path="/" />
                    <Route element={<Sobre />} path="/sobre" />
                    <Route element={<Usuario />} path="/usuario" />
                   
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesRoot;