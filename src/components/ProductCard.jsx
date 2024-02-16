import { useState } from "react";
import UpdateForm from "./UpdateForm";

function ProductCard(props) {
  // console.log(props)

  const [ isUpdateFormShowing, setIsUpdateFormShowing ] = useState(false)

  const { name, price, isPurchased } = props.eachProduct

  const handleToggleUpdateForm = () => {
    setIsUpdateFormShowing(!isUpdateFormShowing)
  }
  // const handleToggleUpdateForm = () => setIsUpdateFormShowing(!isUpdateFormShowing)

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>
        <b>Price:</b> {price}€
      </p>
      <p>{isPurchased === true ? "✅ Purchased" : "🟡 Pending"}</p>
      <button onClick={handleToggleUpdateForm}>Ver formulario de Edit</button>

      { isUpdateFormShowing === true ? 
        <UpdateForm 
          eachProduct={props.eachProduct}
          index={props.index}
          setAllProducts={props.setAllProducts}
        /> 
      : null }

    </div>
  );
}

export default ProductCard;
