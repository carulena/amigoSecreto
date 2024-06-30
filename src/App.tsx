import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Formulario from "./componentes/Fomulario/Formulario";
import Card from "./componentes/Card/Card";
import Configuracao from "./Paginas/Configuracao/Configuracao";
import Sorteio from "./Paginas/Sorteio/Sorteio";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Card>
        <Routes>
            <Route path="/" element={<Configuracao/>} />
            <Route path="/sorteio" element={<Sorteio/>} />
        </Routes>
        </Card>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
