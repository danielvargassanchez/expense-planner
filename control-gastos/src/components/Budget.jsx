import { useState } from "react";
import Message from "./Message";

const Budget = ({ budget, setBudget, setIsValid }) => {
  const [message, setMessage] = useState("");
  const handlerBudget = (e) => {
    e.preventDefault();
    if (!budget || budget <= 0) {
      setMessage("No es un presupuesto válido");
      setIsValid(false);
      return;
    }
    setMessage("");
    setIsValid(true);
  };
  return (
    <div className="container-budget container shadow">
      <form className="form-content" onSubmit={handlerBudget}>
        <div className="form-field">
          <label htmlFor="">Definir presupuesto</label>
          <input
            type="number"
            className="new-budget"
            placeholder="Añade tu presupuesto"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
          <input type="submit" value="Añadir" />

          {message && <Message type="error"> {message}</Message>}
        </div>
      </form>
    </div>
  );
};

export default Budget;
