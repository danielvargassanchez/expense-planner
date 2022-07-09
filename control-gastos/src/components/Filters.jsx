import { userState, useEffect } from "react";

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filters shadow container">
      <form>
        <div className="form-field">
          <label htmlFor="">Filtrar gastos</label>
          <select
            name=""
            id=""
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">-- Todas las categorías --</option>
            <option value="saving">Ahorro</option>
            <option value="food">Comida</option>
            <option value="home">Casa</option>
            <option value="various">Gastos varios</option>
            <option value="leisure">Ocio</option>
            <option value="health">Salud</option>
            <option value="subscriptions">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
