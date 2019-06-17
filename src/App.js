import React from 'react';
// import { Icon } from 'antd';
import './App.scss';
import config from './config/index.js';

import Navbar from './components/Navbar/index.js';
import ActionPill from './components/ActionPill/index.js';
import ContractContainer from './components/ContractContainer/index.js';
import { Progress } from 'antd';
import 'antd/dist/antd.css';

function App() {
  
  const user = config.user1[0]
  
  return (
    <div className="app">
      <div className="page-header">
        <Navbar/>
        <div className="user-actions-container">
          <div className="user-summary">
            <Progress 
              type="circle" 
              strokeWidth={10} 
              percent={user.totalSubscription} 
              width={100} 
              showInfo={false} 
              strokeColor={"#00affa"}
            />
            <div className="user-summary-text">
              <h2>Bonjour {user.firstName}</h2>
              <p><span>{user.totalSubscription}%</span> de vos souscriptions sont finalisées</p>
            </div>
          </div>
          <div className="actions-wrapper">
            <ActionPill type="phone"/>
            <ActionPill type="message"/>
            <ActionPill type="question-circle"/>
          </div>
        </div>
      </div>

      <div className="contracts-wrapper">
        {
          user.contracts.map((contract, key) => {
            return (
              <ContractContainer 
                key={key} 
                title={contract.title} 
                cta={contract.cta} 
                id={key}
              />
            )
          })
        }
      </div>
        
    </div>
  );
}

export default App;
