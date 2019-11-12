import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLayout = () => (
    <header>
      <p>React Router v4 Browser Example</p>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li>
                <Link to='/me'>Profile</Link>
            </li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/contact'>Contact</Link></li>

          </ul>
        </nav>
    </header>
)

export default HeaderLayout;