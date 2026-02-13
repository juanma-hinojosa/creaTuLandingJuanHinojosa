function ItemImg({ prod }) {
  return (
    <article
      style={{
        borderRadius: '4px',
        border: '1px solid grey',
        overflow: 'hidden'
      }}
    >
      <figure
        style={{
          width: '100%'
        }}
      >
        <img
          src={prod.img}
          alt="Descripción clara del producto"
          loading="lazy"
          style={{
            width: '100%'
          }}
        />
      </figure>

      <footer
        style={{

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px'
        }}
      >
        <button type="button" style={{
          width: '100%',
          textTransform: 'uppercase',
          color: 'white',
          fontWeight: 'bolder',
          fontSize: '.9rem',
          padding: '15px',
          borderRadius: '5px',
          border:'transparent',
          backgroundColor:'rgb(45, 138, 45)'
        }}>
          {prod.titulo}
        </button>
      </footer>
    </article>
  )
}

export default ItemImg