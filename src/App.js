import React from "react"
import './App.css';
import Header from "./components/Header"
import Balance from "./components/Balance"
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddNewTransaction from "./components/AddNewTransaction";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </div>
  );
}

export default App;
