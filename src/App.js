import React, {Fragment, useState, useEffect} from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
function App() {

  const [pizza, setPizza] = useState({
    topping: "",
    size: "",
    vegetarian: false,
  })

  const handleInputChange = (e) => {
    setPizza({ ...pizza, [e.target.name]: e.target.value });
    console.log(pizza);
  };

  const onHandleSubmit = event => {
    event.preventDefault()
    fetch('http://localhost:3000/pizzas', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pizza)
    }).then(
      setPizza(pizza)
    );
  }

  const handleEditPizza = () => {
    console.log(pizza)
  }

  return (
    <Fragment>
      <Header />
      <PizzaForm pizza={pizza} handleInputChange={handleInputChange} onHandleSubmit={onHandleSubmit}/>
      <PizzaList handleEditPizza={handleEditPizza}/>
    </Fragment>
  );
}

export default App;

