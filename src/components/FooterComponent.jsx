function FooterComponent() {
  return (
    <footer style={styles.footerContainer} >
      <section
        className="contendor-maximo"
      >
        <span >© Copyright 2026 | Sitio web copia de <a href="https://www.cacaushow.com.br/" target="_blank" rel="noopener noreferrer">Cacau Show</a> | Desarrollado Por <a href="https://github.com/juanma-hinojosa" target="_blank" rel="noopener noreferrer">Juan Hinojosa</a></span>
      </section>
    </footer>
  )
}


export default FooterComponent

const styles = {
  footerContainer: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#31261e',
    fontSize: '13px',
    color: '#e5dfd4'
  }
}