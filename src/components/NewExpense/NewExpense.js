import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const [clicked, setClicked] = useState(false);
  const buttonHandler = () => {
    setClicked(true);
  };
  const buttonCloseHandler = () => {
    setClicked(false);
  };

  const SaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpenseHandler(expenseData);
    setClicked(false);
  };

  return (
    <div className="new-expense">
      {!clicked && <button onClick={buttonHandler}>Add Expense</button>}
      {clicked && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseData}
          closeHandler={buttonCloseHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
