import { useState } from "react"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddForm(props) {
  console.log(props)

  const [ nameInput, setNameInput] = useState("")
  const [ priceInput, setPriceInput ] = useState(0)

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    let realInputValue = event.target.value
    // realInputValue = realInputValue.toUpperCase()
    setNameInput(realInputValue)
  }

  const handlePriceChange = (event) => {
    setPriceInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault() // remover cualquier comportamiento predeterminado de este evento
    // console.log("intentando entregar formulario")

    // ejemplo de prevenir duplicados
    // let found = props.allProducts.filter((eachProduct) => {
    //   return eachProduct.name === nameInput
    // })
    // if (found.length !== 0) {
    //   alert("producto ya añadido")
    //   return
    // }

    // 1. recopilar la informacion de los campos
    const nuevoProducto = {
      name: nameInput,
      price: priceInput,
      isPurchased: false
    }
    console.log(nuevoProducto)

    // 2. Actualizar la lista
    // forma 1. recibiendo el estado por props
    // let clone = JSON.parse(JSON.stringify(props.allProducts))
    // clone.unshift(nuevoProducto) // o push()
    // props.setAllProducts(clone)

    // forma 2. no necesitamos recibir el estado por props
    props.setAllProducts((valorActualDelEstado) => {
      // valorActualDelEstado es allProducts
      console.log(valorActualDelEstado)
      let clone = JSON.parse(JSON.stringify(valorActualDelEstado))
      clone.unshift(nuevoProducto)
      return clone // retornamos lo queremos que sea el nuevo valor
    })

    // props.setIsAddFormShowing(false)

  }

  return (
    <div className="add-form">
      
      <h2>Add Form</h2>

      <Form onSubmit={handleSubmit}>

        <Form.Group>
          <Form.Label htmlFor="name">Name: </Form.Label>
          <Form.Control 
            placeholder="potatoes" 
            type="text" 
            name="name" 
            onChange={handleNameChange} 
            value={nameInput}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="price">Price: </Form.Label>
          <Form.Control
            type="number" 
            name="price"
            onChange={handlePriceChange}
            value={priceInput}
          />
        </Form.Group>

        <Button>Add</Button>

      </Form>

    </div>
  )
}

export default AddForm