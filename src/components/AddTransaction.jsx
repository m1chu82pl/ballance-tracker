import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("")
  const { addTransaction } = useContext(GlobalContext);

  const handleEnterText = (e) => {
    setText(e.target.value)
  }

  const handleEnterAmount = (e) => {
    setAmount(e.target.value)
  }

  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
    setText("");
    setAmount("");
  }
  

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={handleEnterText} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={handleEnterAmount} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
