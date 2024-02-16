import AddForm from "../components/AddForm";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

// this data is just for testing the initial rendering of data
import testProducts from "../assets/data/testProducts.json";

import { useState } from "react";

// Componentes estilizado de Bootstrap
import Button from 'react-bootstrap/Button';
import { Collapse } from "react-bootstrap";

function ShoppingList() {

  const [ allProducts, setAllProducts ] = useState(testProducts) 
  // initial state. change to empty array when done with add functionality

  const [ isAddFormShowing, setIsAddFormShowing ] = useState(false)

  const handleToggleAddForm = () => {

    setIsAddFormShowing(!isAddFormShowing) // invierte el valor booleano del estado
  }

  return (
    <div>

      <h1>Shopping List</h1>

      {/* all elements of the shopping list will be here */}

      <Button 
      variant="outline-info" 
      size="lg"
      onClick={ handleToggleAddForm }
        >Ver Formulario de Añadir</Button>

      {/* { isAddFormShowing === true ? <AddForm 
        setAllProducts={setAllProducts}
        // allProducts={allProducts}
        // setIsAddFormShowing={setIsAddFormShowing}
      /> : null } */}

      <Collapse in={isAddFormShowing}>
        <div>
          <AddForm 
            setAllProducts={setAllProducts}
            // allProducts={allProducts}
            // setIsAddFormShowing={setIsAddFormShowing}
          />
        </div>
      </Collapse>
      


      <ProductList 
        allProducts={allProducts} 
        setAllProducts={setAllProducts}
      />
      

    </div>
  )
}

export default ShoppingList