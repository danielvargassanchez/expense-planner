import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import SpentList from "./components/SpentList";
import Filters from "./components/Filters";
import { generateId } from "./helpers";
import IconNewBudget from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget")) ?? 0
  );
  const [isValid, setIsValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [spents, setSpents] = useState(
    localStorage.getItem("spents")
      ? JSON.parse(localStorage.getItem("spents"))
      : []
  );
  const [spentEdit, setSpentEdit] = useState({});
  const [filter, setFilter] = useState("");
  const [spentFilters, setSpentFilter] = useState([]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem("budget")) ?? 0;
    const spentsList = JSON.parse(localStorage.getItem("spents")) ?? [];
    setSpents(spentsList);
    setBudget(budgetLS);
    setIsValid(budgetLS > 0);
  }, []);

  useEffect(() => {
    if (Object.keys(spentEdit).length > 0) {
      setShowModal(true);
      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [spentEdit]);

  useEffect(() => {
    localStorage.setItem("spents", JSON.stringify(spents));
  }, [spents]);

  useEffect(() => {
    if (filter) {
      const filterSpents = spents.filter((spent) => spent.category === filter);
      setSpentFilter(filterSpents);
    }
  }, [filter]);

  useEffect(() => {
    localStorage.setItem("budget", budget);
  }, [budget]);

  const handlerNewBudget = () => {
    setShowModal(true);
    setSpentEdit({});
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const handlerDeleteSpent = (spent) => {
    const filteredList = spents.filter(
      (spentItem) => spentItem.id !== spent.id
    );
    setSpents(filteredList);
  };

  const saveSpent = (spent) => {
    if (spent.id) {
      const updatedSpents = spents.map((state) =>
        state.id === spent.id ? spent : state
      );
      setSpents(updatedSpents);
      setSpentEdit({});
    } else {
      spent.id = generateId();
      spent.date = Date.now();
      setSpents([...spents, spent]);
    }

    setAnimateModal(false);
    setTimeout(() => {
      setShowModal(false);
    }, 500);
  };

  const handleResetApp = () => {
    const option = confirm("¿Desear reiniciar el presupuesto de gastos?");
    if (option) {
      setBudget(0);
      setSpents([]);
      setSpentEdit([]);
      setIsValid(false);
    }
  };

  return (
    <div className={showModal ? "fix" : ""}>
      <Header
        spents={spents}
        budget={budget}
        setBudget={setBudget}
        isValid={isValid}
        setIsValid={setIsValid}
        handleResetApp={handleResetApp}
      />
      {isValid && (
        <>
          <main>
            <Filters filter={filter} setFilter={setFilter} />
            <SpentList
              spents={spents}
              setSpentEdit={setSpentEdit}
              handlerDeleteSpent={handlerDeleteSpent}
              filter={filter}
              spentFilters={spentFilters}
            />
          </main>
          <div className="new-spent">
            <img
              src={IconNewBudget}
              alt="icon new budget"
              onClick={handlerNewBudget}
            />
          </div>
        </>
      )}

      {showModal && (
        <Modal
          setShowModal={setShowModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveSpent={saveSpent}
          spentEdit={spentEdit}
          setSpentEdit={setSpentEdit}
        />
      )}
    </div>
  );
}

export default App;
