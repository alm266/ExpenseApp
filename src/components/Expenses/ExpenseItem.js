import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // [prevVal, newVal]
  const [title, setTitle] = useState(props.title); // react hook
  // All hooks start with 'use'
  // Must be called inside react component (with 1 exception)

  const clickHandler = () => {
    setTitle("Updated!"); // Doesn't immediately change. Schedules change to be done
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
