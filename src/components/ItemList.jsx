import ItemComponent from "./Item";


function ItemList({data}) {
  return(
    <div className="products-container">

      {data.map((prod) => <ItemComponent key={prod.id}  prod={prod} /> )}
    </div>
  )
}

export default ItemList