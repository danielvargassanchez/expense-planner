import Spent from "./Spent";

const SpentList = ({
  spents,
  setSpentEdit,
  handlerDeleteSpent,
  filter,
  spentFilters,
}) => {
  return (
    <div className="spent-list container">
      {filter ? (
        <>
          <h2>
            {" "}
            {spentFilters.length
              ? "Gastos"
              : "No hay gastos en el filtro seleccionado"}
          </h2>
          {spentFilters.map((spent) => (
            <Spent
              key={spent.id}
              spent={spent}
              setSpentEdit={setSpentEdit}
              handlerDeleteSpent={handlerDeleteSpent}
            />
          ))}
        </>
      ) : (
        <>
          <h2> {spents.length ? "Gastos" : "No hay gastos"}</h2>
          {spents.map((spent) => (
            <Spent
              key={spent.id}
              spent={spent}
              setSpentEdit={setSpentEdit}
              handlerDeleteSpent={handlerDeleteSpent}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default SpentList;
