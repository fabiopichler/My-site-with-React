import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './NavigationComponent.scss';

import INavigationComponentProps from './INavigationComponentProps';

class NavigationComponent extends Component<INavigationComponentProps, any> {

    constructor(props: INavigationComponentProps) {
        super(props);
    }

    render() {
        return (
            <nav>
                <ul className="nav">
                    {this.props.items.map((item, i) => 
                        <li key={i} className="nav-item">
                            <NavLink to={`${process.env.PUBLIC_URL}${item.to}`} activeClassName='router-link-exact-active' exact={true} className="nav-link text text-secondary">
                                <span className={item.icon}></span>
                                
                                <span className="d-none d-sm-inline-block">&nbsp;{ item.text }</span>
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        )
    }
}

export default NavigationComponent;
