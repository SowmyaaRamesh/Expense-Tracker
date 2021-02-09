import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = (props) => {
  const { id, text, amount } = props.transaction;
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div>
      <li className={amount < 0 ? "minus" : "plus"}>
        {text} <span>₹{Math.abs(amount)}</span>
        <button onClick={() => deleteTransaction(id)} className="delete-btn">
          x
        </button>
      </li>
    </div>
  );
};
