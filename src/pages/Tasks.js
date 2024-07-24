import React, { useState } from 'react';
import './Tasks.css';

const Task = ({ field, context, amount, bidConfirmationId, onBid, onCancel }) => {
  const [isBidConfirmed, setIsBidConfirmed] = useState(false);

  const handleBid = () => {
    setIsBidConfirmed(true);
    onBid(bidConfirmationId);
  };

  const handleCancel = () => {
    setIsBidConfirmed(false);
    onCancel(bidConfirmationId);
  };

  return (
    <div className="task">
      <h3>FIELD: {field}</h3>
      <p>DUE IN: </p>
      <p>CONTEXT: {context}</p>
      <p><strong>KSH {amount}</strong></p>
      {!isBidConfirmed ? (
        <button className="bid-button" onClick={handleBid}>BID TASK</button>
      ) : (
        <div id={bidConfirmationId} className="bid-confirmation">
          <p>Task bid successfully!</p>
          <button onClick={handleCancel}>Cancel Bid</button>
        </div>
      )}
    </div>
  );
};

const Tasks = () => {
  const handleBid = (id) => {
    console.log(`Bid confirmed for ${id}`);
    alert("Task bid successfully!");
  };

  const handleCancel = (id) => {
    console.log(`Bid canceled for ${id}`);
    alert("Bid canceled successfully!");
  };

  return (
    <div id="availableTasks">
      <h3>Available Tasks</h3>
      <div className="task-details">
        <p>Hello User,</p>
        <p>✔Choose a task of your capability and bid</p>
        <p><span>(</span> Kindly check due date before bidding <span>)</span></p>
      </div>
      <Task
        field="HEALTH, DIET AND FITNESS"
        context="Discuss the various outcomes of eating unhealthy food, and most effective ways of improving the eating habits, in 3.5 pages"
        amount="300"
        bidConfirmationId="bidConfirmation1"
        onBid={handleBid}
        onCancel={handleCancel}
      />
      <Task
        field="BUSINESS AND CULTURE"
        context="Discuss the risks of increasing business and cultural contacts between nations, in 3.5 pages"
        amount="250"
        bidConfirmationId="bidConfirmation2"
        onBid={handleBid}
        onCancel={handleCancel}
      />
      <Task
        field="FINANCE"
        context="Discuss pros and cons of cashless economy, in 4 pages excluding the cover page."
        amount="150"
        bidConfirmationId="bidConfirmation3"
        onBid={handleBid}
        onCancel={handleCancel}
      />
      <Task
        field="FASHION AND DESIGN"
        context="Write an essay on influence of culture in Global culture consumerism. In 4 pages normal spaced."
        amount="300"
        bidConfirmationId="bidConfirmation4"
        onBid={handleBid}
        onCancel={handleCancel}
      />
      <Task
        field="AGRICULTURE"
        context="Write an essay on impacts of crop pesticides on human health, in 5 pages excluding cover page."
        amount="200"
        bidConfirmationId="bidConfirmation5"
        onBid={handleBid}
        onCancel={handleCancel}
      />
      <Task
        field="WORK"
        context="Discuss the impacts of compensation on employees morale. In 5 pages."
        amount="500"
        bidConfirmationId="bidConfirmation6"
        onBid={handleBid}
        onCancel={handleCancel}
      />
      <Task
        field="INFORMATION TECHNOLOGY"
        context="Information technology is changing many aspects of our lives and now dominates our home, leisure and even work. Describe both its advantages and disadvantages, in 4 pages"
        amount="250"
        bidConfirmationId="bidConfirmation7"
        onBid={handleBid}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default Tasks;
