import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Pesquisa from "../Pages/Pesquisa"
import PesquisaCompleta from "../Pages/Pesquisa Completa"
import Export from "../Pages/Export"
import ExportComplete from "../Pages/ExportComplete"

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Pesquisa/>}/>
                    <Route exact path="/complete" element={<PesquisaCompleta/>}/>
                    <Route exact path="*" element={<Pesquisa/>}/>
                    <Route exact path="/export" element={<Export/>}/>
                    <Route exact path="/exportcomplete" element={<ExportComplete/>}/>
                </Routes>
            </Fragment>
            
        </BrowserRouter>
    )
}

export default RoutesApp;