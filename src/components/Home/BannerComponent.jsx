function BannerComponent() {
  const parrafos = [
    { parrafo: 'En Cacau Show, cada chocolate está hecho para transformar momentos sencillos en experiencias especiales. Ofrecemos irresistibles trufas, cremosas tabletas, chocolates artesanales y regalos de chocolate que combinan calidad, sabor y mucho cariño. Además, nuestra sección de Vajilla y Cocina presenta opciones únicas que combinan funcionalidad y estilo.' },
    { parrafo: 'Aquí, la pasión por el cacao se transforma en productos imperdibles: desde el clásico chocolate con leche hasta chocolates intensos y rellenos. Todo se prepara con ingredientes selectos y el cuidado que solo quienes entienden de chocolate pueden ofrecer.' },
    { parrafo: '¿Quieres sorprender a alguien o hacer un regalo? En Cacau Show encontrarás opciones para todos los gustos y ocasiones. Nos apasiona crear experiencias. Después de todo, creer en el poder de un pequeño momento de felicidad es lo que nos impulsa cada día.' },
    { parrafo: 'Descubre el mundo de Cacau Show y vive dulces momentos, llenos de sabor, cariño y buenos recuerdos.' },
  ]

  return (
    <section className="contendor-maximo"  >
      <figure style={{ borderRadius: '10px', backgroundColor: '#F2EFE8', padding: '20px', fontFamily: 'sagonasemibold' }} >
        <h2 className="titulo"> 🍫 Descubra o Mundo Cacau Show</h2>

        {parrafos.map((parrafo,id) => (
          <p key={id} style={{ color: '#1C1C1B', marginTop:'20px', fontSize:'20px', fontWeight:'500' }}>{parrafo.parrafo}</p>
        ))}
      </figure>
    </section>
  )
}

export default BannerComponent