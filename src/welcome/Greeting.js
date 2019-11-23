import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const WelcomeGreeting = () => {
    return (
        <div>
            <span role="img" aria-label="mano che saluta!" className="emoji">👋</span>
            <h2>Benvenuto!</h2>
            <Button>
                <Link to='/welcome/who-are-you'>Avanti</Link>
            </Button>
        </div>
    )
}

export default WelcomeGreeting;
