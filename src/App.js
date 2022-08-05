import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas.js";
import { GlobalStyle } from "./Components/GlobalStyle";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { BtnTema } from "./Components/UI/index.js";
import SwitcherTema from "./Components/SwitcherTema/index.jsx";


function App() {

  const [tema, setTema] = useState(true);
  const toggleTema = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={tema ? temaEscuro : temaClaro} >
      <GlobalStyle/>
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
