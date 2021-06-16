import React from "react";
import classnames from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props) {

  const formatSpots = function(spaces) {
    if(spaces === 0) {
      return `no spots remaining`
    } else if (spaces === 1) {
      return "1 spot remaining"
    } 
    return `${spaces} spots remaining`
  }
  const ListItemClass = classnames("day-list__item", {
  "day-list__item--selected": props.selected,
  "day-list__item--full": props.spots === 0});
  return (
    <li className={ListItemClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}