const filmes = [
    { nome: "Matrix", genero: "Ficção Científica", capa: "/assets/capa-matrix.jpg" },
    { nome: "Missão Impossível", genero: "Ação", capa: "/assets/capa-missao-impossivel.jpg" },
    { nome: "Velozes e Furiosos", genero: "Ação", capa: "/assets/capa-velozes-e-furiosos.jpg" },
    { nome: "Exterminador do Futuro", genero: "Ação", capa: "/assets/capa-exterminador.jpg" },
    { nome: "De Volta Para o Futuro", genero: "Ficção Científica", capa: "/assets/capa-de-volta-para-o-futuro.jpg" },
    { nome: "Divertidamente", genero: "Animação", capa: "/assets/capa-divertidamente.jpg" },
    { nome: "Interestelar", genero: "Ficção Científica", capa: "/assets/capa-interestelar.jpg" },
    { nome: "John Wick", genero: "Ação", capa: "/assets/capa-john-wick.jpg" },
    { nome: "Procurando Nemo", genero: "Animação", capa: "/assets/capa-nemo.jpg" },
    { nome: "O Rei Leão", genero: "Animação", capa: "/assets/capa-rei-leao.jpg" },
    { nome: "Tenet", genero: "Ação", capa: "/assets/capa-tenet.jpg" },
    { nome: "Toy Story", genero: "Animação", capa: "/assets/capa-toy-story.jpg" },
    { nome: "Vingadores Ultimato", genero: "Ficção Científica", capa: "/assets/capa-ultimato.jpg" },
    { nome: "As Branquelas", genero: "Comédia", capa: "/assets/capa-branquelas.jpg" },
    { nome: "Corra!", genero: "Suspense", capa: "/assets/capa-corra.jpg" },
    { nome: "Forrest Gump", genero: "Comédia", capa: "/assets/capa-forrest-gump.jpg" },
    { nome: "Ilha do Medo", genero: "Suspense", capa: "/assets/capa-ilha-do-medo.jpg" },
    { nome: "Minha Mãe é uma Peça", genero: "Comédia", capa: "/assets/capa-minha-mae-e-uma-peca.jpg" },
    { nome: "Monstros S.A", genero: "Animação", capa: "/assets/capa-monstros-sa.jpg" },
    { nome: "Taxi Driver", genero: "Suspense", capa: "/assets/capa-taxi-driver.jpg" },
    { nome: "Tropa de Elite", genero: "Ação", capa: "/assets/capa-tropa-de-elite.jpg" },
    { nome: "Wall-E", genero: "Animação", capa: "/assets/capa-walle.jpg" }
]

const ItensCatalogo = ( {genero} ) => {
    const filmesFiltrados = genero === 'Todos' ? filmes : filmes.filter(filme => filme.genero === genero)
    
    return (
        <section className="filmes">
            {filmesFiltrados.map(filme => (
                <div key={filme.nome} className="item-filme">
                    <img src={filme.capa} alt={filme.nome} />
                    <h3> {filme.nome} </h3>
                </div>
            ))}
        </section>
    )
}

export default ItensCatalogo