import React from 'react';
import './Dashboard.css';
import Countdown from './Countdown';

const Dashboard = ({ username, usernameParagraph }) => {
  return (
    <div id="dashboard">
      <h3>Dashboard</h3>
      <div className="countdown">
        <Countdown />
      </div>
      <div className="dashboard-content">
        <div className="user-info">
          <div className="info-block">
            <h4>NAME</h4>
            <p><span id="usernameDisplay">{username}</span></p>
          </div>
          <div className="info-block">
            <h4>USERNAME</h4>
            <p><span id="usernameParagraph">{usernameParagraph}</span></p>
          </div>
          <div className="info-block">
            <h4>ACCOUNT STATUS</h4>
            <p>INACTIVE</p>
          </div>
          <div className="info-block">
            <h4>CURRENT BALANCE</h4>
            <p>KSH 0</p>
          </div>
          <div className="info-block">
            <h4>TOTAL MONEY IN</h4>
            <p>KSH 0</p>
          </div>
          <div className="info-block">
            <h4>TOTAL WITHDRAWALS</h4>
            <p>KSH 0</p>
          </div>
        </div>
      </div>
      <div className="activate">
        <h4>HOW TO ACTIVATE YOUR ACCOUNT</h4>
        <p style={{color: 'red'}}>NOTE: Account activation is ONLY via pochi la biashara</p>
        <p>Follow the procedures below to activate your account</p>
        <p>~Got to lipa na mpesa</p>
        <p>~Pochi La Biashara 0115223085 (Zadock)</p>
        <p>~Amount KSH.500</p>
        <p>~Enter M-pesa pin to complete the transaction</p>
        <p>~Once done, copy the M-PESA code (i.e QL72N6QO2G)</p>
        <p>~And <a href="#" style={{textDecoration: 'none'}}>Click Here</a> paste the code to activate your account instantly.</p>
      </div>
      <div className="conduct">
        <h4>YOU CAN FIND US:</h4>
        <p>Telegram Channel: <a href="t.me:" style={{textDecoration: 'none'}}>Click to Join.</a></p>
        <p>Our Email: <a href="mailto:shazadok1619@gmail.com" style={{textDecoration: 'none'}}>shazadok1619@gmail.com</a></p>
      </div>
      <div className="copyright">
        <p>
          ©
          <script>document.write(new Date().getFullYear())</script> || INTERNATIONALWRITERS
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
