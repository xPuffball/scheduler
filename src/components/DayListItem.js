import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

function DayListItem(props) {

  const formatSpots = function(spots) {
    if (spots === 0) {
      return "No spots remaining";
    }
    if (spots === 1) {
      return "1 spot remaining";
    }
    return `${spots} spots remaining`;
  }

  const dayClassName = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  return (
    <li className={dayClassName} onClick={() => props.setDay(props.name)} data-testid="day">
      <h2 >{props.name}</h2> 
      <h3 >{formatSpots(props.spots)}</h3>
    </li>
  );
}

export default DayListItem