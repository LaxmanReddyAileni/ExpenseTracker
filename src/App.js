import React,{useState} from 'react'
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Car Insurance",
    date: new Date(2021, 2, 28),
    amount: 200,
  },
  { id: "e2", title: "GYM", date: new Date(2021, 3, 28), amount: 258.95 },
  { id: "e3", title: "Restaurent", date: new Date(2022, 4, 18), amount: 150 },
  { id: "e4", title: "Cricket", date: new Date(2022, 9, 15), amount: 56.97 },
];

const App = () => {
 
const [expenses,setExpenses]=useState(DUMMY_DATA)
  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses)=>{return [expenseData,...prevExpenses]})
  };

  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
};

export default App;
