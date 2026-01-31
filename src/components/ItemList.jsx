import ItemComponent from "./Item";


function ItemList({data}) {
  return(
    <div className="products-container">

      {data.map((prod) => <ItemComponent key={prod.id}  prod={prod} /> )}
      {/* <ItemComponent /> */}
      {/* <ItemComponent /> */}
      {/* <ItemComponent /> */}
      {/* <ItemComponent /> */}
    </div>
  )
}

export default ItemList