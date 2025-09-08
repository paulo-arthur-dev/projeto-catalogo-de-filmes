const filmes = [
    { nome: "Matrix", genero: "Ficção Científica", capa: "/src/assets/capa-matrix.jpg" },
    { nome: "Missão Impossível", genero: "Ação", capa: "/src/assets/capa-missao-impossivel.jpg" },
    { nome: "Velozes e Furiosos", genero: "Ação", capa: "/src/assets/capa-velozes-e-furiosos.jpg" },
    { nome: "Exterminador do Futuro", genero: "Ação", capa: "/src/assets/capa-exterminador.jpg" },
    { nome: "De Volta Para o Futuro", genero: "Ficção Científica", capa: "/src/assets/capa-de-volta-para-o-futuro.jpg" },
    { nome: "Divertidamente", genero: "Animação", capa: "/src/assets/capa-divertidamente.jpg" },
    { nome: "Interestelar", genero: "Ficção Científica", capa: "/src/assets/capa-interestelar.jpg" },
    { nome: "John Wick", genero: "Ação", capa: "/src/assets/capa-john-wick.jpg" },
    { nome: "Procurando Nemo", genero: "Animação", capa: "/src/assets/capa-nemo.jpg" },
    { nome: "O Rei Leão", genero: "Animação", capa: "/src/assets/capa-rei-leao.jpg" },
    { nome: "Tenet", genero: "Ação", capa: "/src/assets/capa-tenet.jpg" },
    { nome: "Toy Story", genero: "Animação", capa: "/src/assets/capa-toy-story.jpg" },
    { nome: "Vingadores Ultimato", genero: "Ficção Científica", capa: "/src/assets/capa-ultimato.jpg" },
    { nome: "As Branquelas", genero: "Comédia", capa: "/src/assets/capa-branquelas.jpg" },
    { nome: "Corra!", genero: "Suspense", capa: "/src/assets/capa-corra.jpg" },
    { nome: "Forrest Gump", genero: "Comédia", capa: "/src/assets/capa-forrest-gump.jpg" },
    { nome: "Ilha do Medo", genero: "Suspense", capa: "/src/assets/capa-ilha-do-medo.jpg" },
    { nome: "Minha Mãe é uma Peça", genero: "Comédia", capa: "/src/assets/capa-minha-mae-e-uma-peca.jpg" },
    { nome: "Monstros S.A", genero: "Animação", capa: "/src/assets/capa-monstros-sa.jpg" },
    { nome: "Taxi Driver", genero: "Suspense", capa: "/src/assets/capa-taxi-driver.jpg" },
    { nome: "Tropa de Elite", genero: "Ação", capa: "/src/assets/capa-tropa-de-elite.jpg" },
    { nome: "Wall-E", genero: "Animação", capa: "/src/assets/capa-walle.jpg" }
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