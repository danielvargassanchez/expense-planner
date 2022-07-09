import { useState, useEffect } from "react";
import CloseBtn from "../img/cerrar.svg";
import Message from "./Message";

const Modal = ({
  setShowModal,
  animateModal,
  setAnimateModal,
  saveSpent,
  spentEdit,
  setSpentEdit 
}) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(spentEdit).length > 0) {
      setName(spentEdit.name);
      setQuantity(spentEdit.quantity);
      setCategory(spentEdit.category);
      setId(spentEdit.id);
      setDate(spentEdit.date);
    }
  }, []);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if ([name, quantity, category].includes("")) {
      setMessage("Todos los datos son obligatorios");
      setTimeout(() => {
        setMessage("");
      }, 2000);
      return;
    }
    saveSpent({ name, quantity, category, id, date });
  };

  const closeModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setShowModal(false);
      setSpentEdit({});
    }, 500);
  };
  return (
    <div className="modal">
      <div className="close-modal">
        <img src={CloseBtn} alt="close modal" onClick={closeModal} />
      </div>
      <form
        className={`form-content ${animateModal ? "animate" : "close"}`}
        onSubmit={handlerSubmit}
      >
        <legend> {spentEdit.name ? "Editar gasto" : "Nuevo gasto"}</legend>
        {message && <Message type="error"> {message} </Message>}
        <div className="form-field">
          <label htmlFor="name">Nombre gasto</label>
          <input
            id="name"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="quantity">Cantidad</label>
          <input
            id="quantity"
            type="number"
            placeholder="Añade la cantidad Ej. 300"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="form-field">
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="saving">Ahorro</option>
            <option value="food">Comida</option>
            <option value="home">Casa</option>
            <option value="various">Gastos varios</option>
            <option value="leisure">Ocio</option>
            <option value="health">Salud</option>
            <option value="subscriptions">Suscripciones</option>
          </select>
        </div>

        <input
          type="submit"
          value={spentEdit.name ? "Guardar cambios" : "Añadir gasto"}
        />
      </form>
    </div>
  );
};

export default Modal;
