const generos = [
    'Todos',
    'Ficção Científica',
    'Ação',
    'Comédia',
    'Suspense',
    'Animação'
]

const NavCatalogo = ({selecionarGenero}) => {
  return (
    <header className="nav-catalogo">
        <h1>Catálogo de Filmes</h1>
        
        <nav>
            <ul>
                {generos.map(genero => (
                    <li key={genero}>
                        <button onClick={() => selecionarGenero(genero)}> {genero} </button>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default NavCatalogo