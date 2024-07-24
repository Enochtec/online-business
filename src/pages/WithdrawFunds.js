import React from 'react';
import './WithdrawFunds.css';

const WithdrawFunds = () => {
  return (
    <div id="withdrawFunds">
      <h3>Withdraw Funds</h3>
      <p>Request to withdraw your funds.</p>
      <form>
        <label htmlFor="withdrawAmount">Amount:</label>
        <input type="number" id="withdrawAmount" name="amount" />
        <label htmlFor="withdrawMethod">Withdrawal Method:</label>
        <select id="withdrawMethod" name="method">
          <option value="mpesa">M-Pesa</option>
          <option value="bank">Bank Transfer</option>
        </select>
        <button type="submit">Withdraw</button>
      </form>
    </div>
  );
};

export default WithdrawFunds;
