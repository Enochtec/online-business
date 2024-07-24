import React from 'react';
import './Submission.css';

const Submission = () => {
  return (
    <div id="submission">
      <h3>Submission Panel</h3>
      <p>Submit your work here.</p>
      <form>
        <label htmlFor="submissionTitle">Title:</label>
        <input type="text" id="submissionTitle" name="title" />
        <label htmlFor="submissionFile">Upload File:</label>
        <input type="file" id="submissionFile" name="file" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Submission;
