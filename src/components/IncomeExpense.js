import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const incomeItems = amounts.filter((item) => item > 0);
  const income =
    incomeItems.length > 0
      ? incomeItems.reduce((acc, item) => (acc += item)).toFixed(2)
      : 0;

  const expenseItems = amounts.filter((item) => item < 0);
  const expense =
    expenseItems.length > 0
      ? expenseItems.reduce((acc, item) => (acc += item)) * -(1).toFixed(2)
      : 0;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+₹{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-₹{expense}</p>
      </div>
    </div>
  );
};
