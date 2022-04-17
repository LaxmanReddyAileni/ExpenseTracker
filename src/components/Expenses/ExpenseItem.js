import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css"; //Importing CSS File

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate data={props.expenses} />
        <div className="expense-item__description">
          <h2>{props.expenses.title}</h2>
          <div className="expense-item__price ">${props.expenses.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
