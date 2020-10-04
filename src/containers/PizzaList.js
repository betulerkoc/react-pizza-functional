import React, { useState, useEffect } from "react";
import Pizza from "../components/Pizza";

function PizzaList({handleEditPizza}) {

  const [pizzas, setPizzas] = useState([]);


    const getPizzas = () =>{
      fetch('http://localhost:3000/pizzas')
      .then(response => response.json())
      .then(data => {
        setPizzas(data)
      })
  }

  useEffect(()=>{
    getPizzas()
  },[])


  const renderPizzas = () => {
    return pizzas.map(data => <Pizza topping={data.topping} size={data.size} vegetarian={data.vegetarian} key={data.id} handleEditPizza={handleEditPizza}/>)
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          renderPizzas()  
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
