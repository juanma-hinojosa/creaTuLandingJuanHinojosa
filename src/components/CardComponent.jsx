function CardComponent(props) {
  return (
    <article
      style={{
        border: "4px"
      }}
    >
      <img
        style={{
          width: "100%"
        }}
        src={props.img} alt="producto linea de clasicos" />
    </article>
  )
}

export default CardComponent