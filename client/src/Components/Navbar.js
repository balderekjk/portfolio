import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/ethics">Ethics</Link>
        </li>
        <li>
          <Link to="/contact">Reach Out</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
