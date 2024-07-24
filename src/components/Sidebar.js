import React from 'react';
import './Sidebar.css';

const Sidebar = ({ openSection, closeNav }) => {
  return (
    <div id="mySidenav" className="sidenav bg-dark text-white">
      <div className="sidebar-header d-flex align-items-center justify-content-between px-3 py-2">
        <img src="logo.png" alt="Logo" className="sidebar-logo" />
        <h3 className="ms-2">MyApp</h3>
        <button type="button" className="close text-white" aria-label="Close" onClick={closeNav}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <nav className="nav flex-column mt-4">
        <a href="#" className="nav-link text-white" onClick={() => { openSection('dashboard'); closeNav(); }}>
          <i className="bi bi-speedometer2"></i> Dashboard
        </a>
        <a href="#" className="nav-link text-white" onClick={() => { openSection('training'); closeNav(); }}>
          <i className="bi bi-book"></i> Training
        </a>
        <a href="#" className="nav-link text-white" onClick={() => { openSection('tasks'); closeNav(); }}>
          <i className="bi bi-list-task"></i> Available Tasks
        </a>
        <a href="#" className="nav-link text-white" onClick={() => { openSection('submission'); closeNav(); }}>
          <i className="bi bi-upload"></i> Submission Panel
        </a>
        <a href="#" className="nav-link text-white" onClick={() => { openSection('withdrawFunds'); closeNav(); }}>
          <i className="bi bi-currency-dollar"></i> Withdraw Funds
        </a>
        <a href="#" className="nav-link text-white" onClick={() => { openSection('upgradeToPremium'); closeNav(); }}>
          <i className="bi bi-star"></i> Upgrade to Premium
        </a>
        <a href="#" className="nav-link text-white" onClick={() => { openSection('referral'); closeNav(); }}>
          <i className="bi bi-people"></i> Referral Program
        </a>
        <a href="#" className="nav-link text-white" onClick={() => { openSection('specialTraining'); closeNav(); }}>
          <i className="bi bi-award"></i> Special Training
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
