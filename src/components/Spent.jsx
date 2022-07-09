import { formatDate } from "../helpers";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import iconSave from "../img/icono_ahorro.svg";
import iconHome from "../img/icono_casa.svg";
import iconFood from "../img/icono_comida.svg";
import iconSpent from "../img/icono_gastos.svg";
import iconLeisure from "../img/icono_ocio.svg";
import iconHealth from "../img/icono_salud.svg";
import iconSubscriptions from "../img/icono_suscripciones.svg";

const dictIcons = {
  saving: iconSave,
  food: iconFood,
  home: iconHome,
  various: iconSpent,
  leisure: iconLeisure,
  health: iconHealth,
  subscriptions: iconSubscriptions,
};
const Spent = ({ spent, setSpentEdit, handlerDeleteSpent }) => {
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setSpentEdit(spent)}>Editar</SwipeAction>
    </LeadingActions>
  );
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => {
          handlerDeleteSpent(spent);
        }}
        destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="spent shadow">
          <div className="spent-content">
            <img src={dictIcons[spent.category]} alt="image category" />

            <div className="spent-description">
              <p className="categoria">{spent.category}</p>
              <p className="spent-name">{spent.name}</p>
              <p className="spent-date">
                Agregado el: <span>{formatDate(spent.date)}</span>
              </p>
            </div>
          </div>
          <p className="spent-quantity">${spent.quantity}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Spent;
