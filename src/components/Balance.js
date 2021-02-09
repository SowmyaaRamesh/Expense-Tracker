import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  //Balance calculation

  const amounts = transactions.map((transaction) => transaction.amount);
  // console.log(amounts);

  const total = amounts.length
    ? amounts.reduce((acc, item) => (acc += item)).toFixed(2)
    : 0;
  // console.log(total);

  return (
    <>
      <h2>YOUR BALANCE : ₹{total}</h2>
    </>
  );
};
