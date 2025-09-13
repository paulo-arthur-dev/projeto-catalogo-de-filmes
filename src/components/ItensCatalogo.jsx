const filmes = [
    { nome: "Matrix", genero: "Ficção Científica", capa: "/assets/capa-matrix.jpg", url: 'https://www.imdb.com/pt/title/tt0133093/?ref_=mv_close' },
    { nome: "Missão Impossível", genero: "Ação", capa: "/assets/capa-missao-impossivel.jpg", url: 'https://www.imdb.com/pt/title/tt0117060/?ref_=nv_sr_srsg_3_tt_8_nm_0_in_0_q_missao%2520impo' },
    { nome: "Velozes e Furiosos", genero: "Ação", capa: "/assets/capa-velozes-e-furiosos.jpg", url: 'https://www.imdb.com/pt/title/tt0232500/?ref_=nv_sr_srsg_3_tt_8_nm_0_in_0_q_velozes%2520e%2520' },
    { nome: "Exterminador do Futuro", genero: "Ação", capa: "/assets/capa-exterminador.jpg", url: 'https://www.imdb.com/pt/title/tt0088247/?ref_=nv_sr_srsg_5_tt_8_nm_0_in_0_q_exterminador%2520' },
    { nome: "De Volta Para o Futuro", genero: "Ficção Científica", capa: "/assets/capa-de-volta-para-o-futuro.jpg", url: 'https://www.imdb.com/pt/title/tt0088763/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_de%2520volta%2520para%2520' },
    { nome: "Divertidamente", genero: "Animação", capa: "/assets/capa-divertidamente.jpg", url: 'https://www.imdb.com/pt/title/tt2096673/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_divertida' },
    { nome: "Interestelar", genero: "Ficção Científica", capa: "/assets/capa-interestelar.jpg", url: 'https://www.imdb.com/pt/title/tt0816692/?ref_=nv_sr_srsg_0_tt_7_nm_1_in_0_q_insterestelar' },
    { nome: "John Wick", genero: "Ação", capa: "/assets/capa-john-wick.jpg", url: 'https://www.imdb.com/pt/title/tt2911666/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_jonh%2520wick' },
    { nome: "Procurando Nemo", genero: "Animação", capa: "/assets/capa-nemo.jpg", url: 'https://www.imdb.com/pt/title/tt0266543/?ref_=nv_sr_srsg_0_tt_5_nm_3_in_0_q_nemo' },
    { nome: "O Rei Leão", genero: "Animação", capa: "/assets/capa-rei-leao.jpg", url: 'https://www.imdb.com/pt/title/tt0110357/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_rei%2520leao' },
    { nome: "Tenet", genero: "Ação", capa: "/assets/capa-tenet.jpg", url: 'https://www.imdb.com/pt/title/tt6723592/?ref_=nv_sr_srsg_0_tt_6_nm_2_in_0_q_tenet' },
    { nome: "Toy Story", genero: "Animação", capa: "/assets/capa-toy-story.jpg", url: 'https://www.imdb.com/pt/title/tt0114709/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_toy%2520st' },
    { nome: "Vingadores Ultimato", genero: "Ficção Científica", capa: "/assets/capa-ultimato.jpg", url: 'https://www.imdb.com/pt/title/tt4154796/?ref_=nv_sr_srsg_3_tt_8_nm_0_in_0_q_ultimato' },
    { nome: "As Branquelas", genero: "Comédia", capa: "/assets/capa-branquelas.jpg", url: 'https://www.imdb.com/pt/title/tt0381707/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_as%2520branquelas' },
    { nome: "Corra!", genero: "Suspense", capa: "/assets/capa-corra.jpg", url: 'https://www.imdb.com/pt/title/tt5052448/?ref_=nv_sr_srsg_3_tt_7_nm_1_in_0_q_corra' },
    { nome: "Forrest Gump", genero: "Comédia", capa: "/assets/capa-forrest-gump.jpg", url: 'https://www.imdb.com/pt/title/tt0109830/?ref_=nv_sr_srsg_0_tt_1_nm_7_in_0_q_forrest' },
    { nome: "Ilha do Medo", genero: "Suspense", capa: "/assets/capa-ilha-do-medo.jpg", url: 'https://www.imdb.com/pt/title/tt1130884/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_ilha%2520do%2520' },
    { nome: "Minha Mãe é uma Peça", genero: "Comédia", capa: "/assets/capa-minha-mae-e-uma-peca.jpg", url: 'https://www.imdb.com/pt/title/tt2464018/?ref_=nv_sr_srsg_1_tt_8_nm_0_in_0_q_minha%2520mae%2520%25C3%25A9' },
    { nome: "Monstros S.A", genero: "Animação", capa: "/assets/capa-monstros-sa.jpg", url: 'https://www.imdb.com/pt/title/tt0198781/?ref_=nv_sr_srsg_1_tt_7_nm_0_in_0_q_monstros%2520sa' },
    { nome: "Taxi Driver", genero: "Suspense", capa: "/assets/capa-taxi-driver.jpg", url: 'https://www.imdb.com/pt/title/tt0075314/?ref_=nv_sr_srsg_1_tt_8_nm_0_in_0_q_taxi%2520dr' },
    { nome: "Tropa de Elite", genero: "Ação", capa: "/assets/capa-tropa-de-elite.jpg", url: 'https://www.imdb.com/pt/title/tt0861739/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_tropa%2520de%2520' },
    { nome: "Wall-E", genero: "Animação", capa: "/assets/capa-walle.jpg", url: 'https://www.imdb.com/pt/title/tt0910970/?ref_=nv_sr_srsg_2_tt_7_nm_1_in_0_q_wall-e' }
]

const ItensCatalogo = ( {genero} ) => {
    const filmesFiltrados = genero === 'Todos' ? filmes : filmes.filter(filme => filme.genero === genero)
    
    return (
        <section className="filmes">
            {filmesFiltrados.map(filme => (
                <a href= {filme.url} target="blank">
                    <div key={filme.nome} className="item-filme">
                        <img src={filme.capa} alt={filme.nome} />
                        <h3> {filme.nome} </h3>
                    </div>
                </a>
            ))}
        </section>
    )
}

export default ItensCatalogo