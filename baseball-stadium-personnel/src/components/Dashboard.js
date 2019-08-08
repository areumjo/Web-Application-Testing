import React from 'react';

const Dashboard = (props) => {

    return(
        <div className="dashboard">
            <button data-testid="strikeBtn" onClick={props.strikeBtn}>Strike</button>
            <button data-testid="ballBtn" onClick={props.ballBtn}>Ball</button>
            <button onClick={props.foulBtn}>Foul</button>
            <button onClick={props.hitBtn}>Hit</button>
      </div>
    )
}

export default Dashboard;