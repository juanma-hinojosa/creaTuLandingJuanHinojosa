function CardComponent({img}) {
  return (
    <article
      style={{
        borderRadius: "10px",
        overflow: 'hidden'
      }}
    >
      <img
        style={{
          width: "100%",
          display: "block",
          borderRadius: "10px"
        }}
        src={img.img} alt="producto linea de clasicos" />
    </article>
  )
}

export default CardComponent