import React from 'react';
import { NavLink } from 'react-router-dom'

import './Navigation.scss';

import INavigationProps from './INavigationProps';

const Navigation: React.FC<INavigationProps> = ({ items }) => (
    <nav>
        <ul className="nav">
            {items.map((item, i) => 
                <li key={i} className="nav-item">
                    <NavLink to={`${process.env.PUBLIC_URL}${item.to}`} activeClassName='router-link-exact-active' exact={true} className="nav-link text text-secondary">
                        <span className={item.icon}></span>
                        
                        <span className="d-none d-sm-inline-block">&nbsp;{ item.text }</span>
                    </NavLink>
                </li>
            )}
        </ul>
    </nav>
);

export default Navigation;
