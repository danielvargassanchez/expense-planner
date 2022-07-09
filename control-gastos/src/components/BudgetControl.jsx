import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { calculatePercent } from "../helpers";

const BudgetControl = ({ budget, spents, handleResetApp }) => {
  const [percent, setPercent] = useState(0);
  const [available, setAvailable] = useState(0);
  const [spentMoney, setSpentMoney] = useState(0);

  useEffect(() => {
    const totalSpentMoney = spents.reduce(
      (total, spent) => total + spent.quantity,
      0
    );
    const availableTotal = budget - totalSpentMoney;
    const advancePercent = calculatePercent(budget, availableTotal).toFixed(2);

    setSpentMoney(totalSpentMoney);
    setAvailable(availableTotal);
    setPercent(advancePercent);
  }, [spents]);

  const formatQuantity = (quantity) => {
    return quantity.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <div className="container-budget container shadow two-columns">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percent > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: "#3B82F6",
          })}
          value={percent}
          text={`${percent}%`}
        />
      </div>

      <div className="content-budget">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear App
        </button>
        <p>
          <span>Presupuesto:</span> {formatQuantity(budget)}
        </p>
        <p className={available < 0 ? "negative" : ""}>
          <span>Disponible:</span> {formatQuantity(available)}
        </p>
        <p>
          <span>Gastado:</span> {formatQuantity(spentMoney)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
