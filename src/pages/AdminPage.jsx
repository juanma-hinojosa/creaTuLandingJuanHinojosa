import { useEffect, useState } from "react";
// import { addNewProduct, getProducts, getSingleITem, updateItem, updateMultipleItems } from "../service/firebase";

function AdminPage() {
  const [singleItem, setSingleITem] = useState(null)

  // useEffect(() => {
  //   getProducts
  // }, [])

  // const handleNew = () => {
  //   addNewProduct()
  // }


  // const handleUpdate = () => {
  //   updateItem('aVBBq8iBUuDsOwfFTCQY')

  // }

  // const handleUpdateMultiple = () => {
  //   updateMultipleItems()
  // }

  // const handleSingleItem = () => {
  //   getSingleITem('i5FWorbWuposaHMsuECE')
  //     .then(item => setSingleITem(item))
  // }


   {/* // const subirProd = () => {
  //   console.log('SUBIENDO DATA...')
  //   const collASubir = collection(db, "items")
  //   productos.map((prod) => addDoc(collASubir, prod))
  //  */}

  return (
    <main>
      <h1>AdminPage</h1>

      <button onClick={handleNew}>Agregar</button>
      <button onClick={handleUpdate}>Actualizar</button>
      <button onClick={handleUpdateMultiple}>Actualizar Lote</button>

      <button onClick={handleSingleItem}>Obtener Item</button>

      {singleItem && (
        <p>
          {singleItem.name} - {singleItem.price}
        </p>
      )}



     

   {/* <button onClick={subirProd}>SUBIR DATA</button> */}
    </main>
  )
}

export default AdminPage