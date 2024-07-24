import React from 'react';
import './SpecialTraining.css'; // Optional, if you have specific styles

const SpecialTraining = () => {
  const handlePayClick = () => {
    // JavaScript function for handling the payment click
    alert('Proceeding with payment...');
    // Implement actual payment logic or redirection here
  };

  return (
    <div id="specialTraining" style={{ display: 'none' }}>
      <h3>Special Training</h3>
      <section className="training">
        <h2>How does special Training work?</h2>
        <p>
          The objective of special training is to enhance your writing skills through dedicated training and practice examples. 
          The duration spans one week. You will be linked with one of our best writers during which he/she will conduct a Google 
          class with you. To optimize your learning experience, he/she will share some of his accepted tasks with you. These 
          examples will serve as valuable references for you to study.
        </p>
        <h2>What are the advantages of special training?</h2>
        <p>The advantages are:</p>
        <ol>
          <li>You will receive training from one of the top-earning International Writers, ensuring high-quality instruction.</li>
          <li>Once trained, you will submit your assignment to your trainer before submitting it to our portal.</li>
          <li>Personal training means you have more direct contact with your trainer, facilitating a more effective learning experience.</li>
          <li>With training from someone who understands our requirements and guidelines, you are guaranteed to earn confidently knowing what 
          to do and not to do in our assignments.</li>
        </ol>
        <h3>The training fee is KSH 2000</h3>
        <p>
          Thank you for expressing your interest in the special training program. We appreciate your enthusiasm for improving your writing skills.
        </p>
        <input type="button" id="spetr" value="Proceed" onClick={handlePayClick} />
      </section>
    </div>
  );
};

export default SpecialTraining;
