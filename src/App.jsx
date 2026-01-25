import './App.css'
import CardComponent from './components/CardComponent'
import ItemListContainer from './components/ItemListContainer'
import NavbarComponent from './components/NavbarComponent'

function App() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>

      <main>
        <section className="section-grid contendor-maximo">
          <h2 className="titulo">El Regalo Perfecto para ella :)</h2>
          <img
            style={{
              width: "100%"
            }}
            src="https://www.cacaushow.com.br/dw/image/v2/BFJD_PRD/on/demandware.static/-/Sites-CacauShow-Library/default/dw230596d4/Home/Banner-Carrossel/1264x530_ajustado_harry.png" alt="" />
        </section>

        <section className="section-grid contendor-maximo">
          <h2 className="titulo">Especiales</h2>

          <div className="products-container">
            <ItemListContainer />
            <ItemListContainer />
            <ItemListContainer />
            <ItemListContainer />
          </div>
        </section>


        <section className="section-grid contendor-maximo">
          <h2 className="titulo">Linea de Clasicos</h2>
          <h5>Rafaela</h5>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: "20px"
            }}
          >


            <CardComponent
              img="https://www.cacaushow.com.br/dw/image/v2/BFJD_PRD/on/demandware.static/-/Sites-CacauShow-Library/default/dw4189b8dc/Home/Linhas/banner_1080x1500_nossas-linhas_lacreme.png"
            />
            <CardComponent
              img="https://www.cacaushow.com.br/dw/image/v2/BFJD_PRD/on/demandware.static/-/Sites-CacauShow-Library/default/dwa816b1e6/Home/Linhas/banner_1080x1500_nossas-linhas_especiais.png"

            />
            <CardComponent
              img="https://www.cacaushow.com.br/dw/image/v2/BFJD_PRD/on/demandware.static/-/Sites-CacauShow-Library/default/dwa8c661f8/Home/Linhas/banner_1080x1500_nossas-linhas_dreams.png"

            />
            <CardComponent
              img="https://www.cacaushow.com.br/dw/image/v2/BFJD_PRD/on/demandware.static/-/Sites-CacauShow-Library/default/dw03b437a0/Home/Linhas/banner_1080x1500_nossas-linhas_lanut.png"

            />
          </div>
        </section>


        <section className="section-grid contendor-maximo">
          <h2 className="titulo">Todos los Momentos van de la mano con Cacau Show</h2>

          <div className="products-container">
            <ItemListContainer />
          </div>
        </section>

        <section className="section-grid contendor-maximo">
          <img
            style={{
              width: "100%"
            }}
            src="https://www.cacaushow.com.br/dw/image/v2/BFJD_PRD/on/demandware.static/-/Sites-CacauShow-Library/default/dwa2fb163a/Home/Banner-Carrossel/1264x530_ursinhos.png" alt="Lo que mas le gusta a Rafa despues de Harry Potter" />
        </section>
      </main>
    </>
  )
}

export default App
