import { filmes } from "../db.js"

const ItensCatalogo = ( {genero} ) => {
    
    const filmesFiltrados = genero === 'Todos' ? filmes : filmes.filter(filme => filme.genero === genero)
    
    return (
        <section className="filmes">
            {filmesFiltrados.map(filme => (
                <a href= {filme.url} target="blank" key={filme.nome}>
                    <div className="item-filme">
                        <img src={filme.capa} alt={filme.nome} />
                        <h3> {filme.nome} </h3>
                    </div>
                </a>
            ))}
        </section>
    )
}

export default ItensCatalogo