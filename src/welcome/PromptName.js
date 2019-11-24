import React from 'react';
import Button from '../components/Button';

import { Link } from 'react-router-dom';

const WelcomePromptName = () => {
  return (

    <div className="welcome-content greeting">
      <div className="welcome-content__main-section">
        <span role="img" aria-label="caffè di benvenuto" className="emoji">☕</span>
        <h2 className="h1">Come ti chiami?</h2>

        <div>
          <label for="userName">Nome</label>
          <input id="userName" type="text" placeholder="Il tuo nome"></input>
        </div>
      </div>
      <div className="welcome-content__bottom-section">
          <Button>
              <Link to='/welcome'>Indietro</Link>
          </Button>
      </div>
    </div>
  )
}

export default WelcomePromptName;
