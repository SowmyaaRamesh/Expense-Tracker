import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text: text,
      amount: parseInt(amount),
    };
    addTransaction(newTransaction);
  };

  const handleClick = () => {
    const amt = type === "expense" ? -1 * amount : amount;
    setAmount(amt);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} className="form">
        <div className="form-control">
          <label htmlFor="text">Transaction</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <input
            type="radio"
            id="income"
            name="radio-button"
            value={type}
            onClick={() => setType("income")}
          />
          <label htmlFor="income">Income</label>
          <input
            type="radio"
            id="expense"
            name="radio-button"
            value={type}
            onClick={() => setType("expense")}
          />
          <label htmlFor="expense">Expense</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              // console.log(e.target.value);
              setAmount(e.target.value);
            }}
            placeholder="Enter amount..."
          />
        </div>

        <button className="btn" onClick={handleClick}>
          Add transaction
        </button>
      </form>
    </div>
  );
};
