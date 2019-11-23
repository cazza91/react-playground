import React from 'react';
import Button from '../components/Button';

const WelcomePromptName = () => {
  return (
    <div>
      <span role="img" aria-label="caffè di benvenuto" className="emoji">☕</span>
      <h2>Come ti chiami?</h2>
      <div>
        <label for="userName">Nome</label>
        <input id="userName" type="text" placeholder="Il tuo nome"></input>
      </div>
      <Button>Iniziamo!</Button>
    </div>
  )
}

export default WelcomePromptName;
