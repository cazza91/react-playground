import React from 'react';
import Button from '../components/Button';

const WelcomeGreeting = () => {
    return (
        <div>
            <span role="img" aria-label="mano che saluta!" class="emoji">👋</span>
            <h2>Benvenuto!</h2>
            <Button>Avanti</Button>
        </div>
    )
}

export default WelcomeGreeting;
