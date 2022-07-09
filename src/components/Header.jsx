import React from "react";
import Budget from "./Budget";
import BudgetControl from "./BudgetControl";


const Header = ({ spents, budget, setBudget, isValid, setIsValid, handleResetApp }) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValid ? (
        <BudgetControl budget={budget} spents={spents} handleResetApp={handleResetApp}/>
      ) : (
        <Budget budget={budget} setBudget={setBudget} setIsValid={setIsValid} />
      )}
    </header>
  );
};

export default Header;
