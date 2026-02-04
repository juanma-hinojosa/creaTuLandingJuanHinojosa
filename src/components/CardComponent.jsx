function CardComponent({img}) {
  return (
    <article
      style={{
        border: "4px",
        overflow: 'hidden'
      }}
    >
      <img
        style={{
          width: "100%"
        }}
        src={img.img} alt="producto linea de clasicos" />
    </article>
  )
}

export default CardComponent