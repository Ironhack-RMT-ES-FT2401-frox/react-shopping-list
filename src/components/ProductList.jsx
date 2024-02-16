import ProductCard from "./ProductCard";

function ProductList(props) {

  return (
    <div>
      
      <h2>Product List</h2>

      {/* the list of the products will be here */}
      {/* it will render a ProductCard for each product in the list */}

      {props.allProducts.map((eachProduct, index) => {
        return (
          <ProductCard 
            key={index} 
            eachProduct={eachProduct} 
            index={index}
            setAllProducts={props.setAllProducts}
          />
        )
      })}

    </div>
  )
}

export default ProductList