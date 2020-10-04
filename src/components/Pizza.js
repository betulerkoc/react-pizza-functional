import React from "react"

const Pizza = ({topping, size, vegetarian, handleEditPizza}) => {
  console.log(handleEditPizza)
  console.log(topping)

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "vegetarian" : "-"}</td>
      <td><button type="button" className="btn btn-primary" onClick={handleEditPizza}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
