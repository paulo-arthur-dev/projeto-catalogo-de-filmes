import ItensCatalogo from "./ItensCatalogo"

const Catalogo = ({ genero }) => {
  return (
    <section>
        <h2 className="genero-titulo"> {genero} </h2>

        <ItensCatalogo genero={genero} />
    </section>
  )
}

export default Catalogo