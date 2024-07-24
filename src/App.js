import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Training from './pages/Training';
import Referral from './pages/Referral';
import Submission from './pages/Submission';
import WithdrawFunds from './pages/WithdrawFunds';
import Tasks from './pages/Tasks';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import SpecialTraining from './pages/SpecialTraining';

function App() {
  const [username, setUsername] = useState('John Doe'); // Example username, replace with your logic
  const [usernameParagraph, setUsernameParagraph] = useState('johndoe'); // Example username, replace with your logic
  const [currentSection, setCurrentSection] = useState('dashboard'); // Default section

  const openSection = (section) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <Dashboard username={username} usernameParagraph={usernameParagraph} />;
      case 'training':
        return <Training />;
     case 'training':
        return <SpecialTraining />;
      case 'referral':
        return <Referral />;
      case 'submission':
        return <Submission />;
      case 'withdrawFunds':
        return <WithdrawFunds />;
      case 'tasks':
        return <Tasks />;
      default:
        return <Dashboard username={username} usernameParagraph={usernameParagraph} />;
    }
  };

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  return (
    <div className="App">
      <Header username={username} openNav={openNav} />
      <Sidebar openSection={openSection} closeNav={closeNav} />
      <div id="main">
        {renderSection()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
