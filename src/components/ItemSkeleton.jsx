import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

function ItemSkeleton() {
  return (
    <article
      style={{ border: '1px solid rgb(199, 199, 199)', borderRadius: '5px' }}
    >
      <figure>
        <Skeleton height={250} />
      </figure>

      <div className="product-content-skeleton" style={{padding:'20px'}} >
        <header>
          <Skeleton count={2} height={25} width={250}/>
        </header>

        <span>
          <Skeleton height={25} width={100} />
        </span>

        <div className="price-container-skeleton" style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end'}} >
          <div className="price">
            <Skeleton width={150} height={50} />
          </div>

          <div>
            <Skeleton width={100} height={30} />
          </div>
        </div>
      </div>

      <footer style={{backgroundColor:'rgb(45, 138, 45)', padding:'10px 0', textAlign:'center'}} >
        <Skeleton width={150} />
      </footer>
    </article>
  )
}



export default ItemSkeleton

