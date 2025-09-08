import { useState } from "react"
import Catalogo from "./components/Catalogo"
import NavCatalogo from "./components/NavCatalogo"
import '/src/style.css'

function App() {

  const [generoSelecionado, setGeneroSelecionado] = useState('Todos')

  return (
    <>
      <NavCatalogo selecionarGenero={setGeneroSelecionado} />

      <Catalogo genero={generoSelecionado} />

      <footer>
        <p>&copy; 2025 FIAP</p>
        <p>Feito por Paulo Arthur</p>
      </footer>
    </>
  )
}

export default App
