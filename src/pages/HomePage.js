import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Questo è Homepage</h1>
            <Link to="/welcome">Vai al welcome</Link>
        </div>
    )
}

export default HomePage;
