import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const WelcomeGreeting = () => {
    return (
        <div className="welcome-content greeting">
            <div className="welcome-content__main-section">
                <span role="img" aria-label="mano che saluta!" className="emoji">👋</span>
                <h2 className="h1">Benvenuto!</h2>
            </div>
            <div className="welcome-content__bottom-section">
                <Button>
                    <Link to='/welcome/who-are-you'>Avanti</Link>
                </Button>
            </div>
        </div>
    )
}

export default WelcomeGreeting;
