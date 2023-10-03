import { Outlet } from "react-router-dom";
import Cabecalho from "./cabecalho";
import Footer from "./footer";

export default function Body() {
    return (
        <div>
            <Cabecalho />
            <Outlet />
            <Footer />
        </div>
    )
}