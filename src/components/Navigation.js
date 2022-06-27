import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <NavLink to='/'>Home</NavLink>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Navigation };
