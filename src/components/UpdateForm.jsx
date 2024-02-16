import { useState } from "react"

function UpdateForm(props) {

  console.log(props)

  // one state for each input
  const [name, setName] = useState(props.eachProduct.name)
  const [price, setPrice] = useState(props.eachProduct.price)
  const [isPurchased, setIsPurchased] = useState(props.eachProduct.isPurchased)

  // handleChange function for each input 
  const handleProductInput = (event) => setName(event.target.value)
  const handlePriceInput = (event) => setPrice(event.target.value) 
  const handleIsPurchasedInput = (event) => setIsPurchased(event.target.checked) // here is checked, as the input is of type checked
  
  const handleSubmit = (event) => {
    event.preventDefault() // prevents default behaviour of HTML, gives us control over submits

    // ...update product here
    const updatedProductValues = {
      name: name,
      price: price,
      isPurchased: isPurchased
    }
    console.log(updatedProductValues)

    // tenemos que actualizar el elemento especifica de la lista total de products

    // tenemos que saber cual es el producto a actualizar (podemos hacerlo por indice o podemos filtrar el array por nombre o cualquier propiedad que no se repita)
    console.log(props.index)
    // tenemos que actualizar la lista
    console.log(props.setAllProducts)

    props.setAllProducts((estadoActual) => {
      // estadoActual es allProducts
      const clone = JSON.parse(JSON.stringify(estadoActual))

      // ejemplo de reemplazar por completo toda la data del objeto
      // clone[props.index] = updatedProductValues

      // ejemplo de reemplazar unicamente las propiedades por separado
      clone[props.index].name = name // usa el estado para actualizar el valor de la propiedad
      clone[props.index].price = price
      clone[props.index].isPurchased = isPurchased

      return clone //este va a ser el nuevo estado
    })

  }

  return (
    <div className="update-form">
      <form onSubmit={handleSubmit}>

          <label htmlFor="name">Name: </label>
          <input onChange={handleProductInput} type="text" name="name" value={name} />
          <br />
          <label htmlFor="price">Price: </label>
          <input onChange={handlePriceInput} type="number" name="price" value={price}/>
          <br />
          <label htmlFor="isPurchased">Purchased: </label>
          <input onChange={handleIsPurchasedInput} type="checkbox" name="isPurchased" checked={isPurchased}/>
          <br />
          <button type="Submit">Update</button> 

      </form>
    </div>
  )
}

export default UpdateForm