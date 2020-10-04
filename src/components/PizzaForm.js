import React from "react"

const PizzaForm = ({pizza, handleInputChange, onHandleSubmit}) => {

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={pizza.topping} name="topping" onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="col">
          <select value={pizza.size} className="form-control" name="size" onChange={(e) => handleInputChange(e)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" name="Vegetarian" checked={null} onChange={(e) => handleInputChange(e)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={null} onChange={(e) => handleInputChange(e, "vegetarian")}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={onHandleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
