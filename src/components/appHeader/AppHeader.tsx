import React, { Component } from 'react';

import './AppHeader.scss';

import INavigationItems from '../common/navigation/INavigationItems';
import Navigation from '../common/navigation/Navigation';

class AppHeader extends Component {

    menu: INavigationItems[] = [
        {
            to: '/',
            text: 'Início',
            icon: 'fas fa-home'
        }, {
            to: '/portfolio',
            text: 'Portfólio',
            icon: 'fas fa-portrait'
        }, {
            to: '/contato',
            text: 'Contato',
            icon: 'fas fa-file-contract'
        }, {
            to: '/sobre',
            text: 'Sobre',
            icon: 'fas fa-info-circle'
        }
    ];

    render() {
        return (
            <header className="header mb-2 p-0">
                <div className="h-100">
                    <div className="header-bg background-cover">
                        <div className="d-flex flex-column justify-content-center h-100 ml-3 ml-sm-5">
                            <h1 className="site-title text-white">
                                <span className="d-inline-block text-right">
                                    Fábio Pichler<br />
                                    <span className="subtitle">» and the technology</span>
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="bg-white px-3">
                    <Navigation items={this.menu} />
                </div>
            </header>
        );
    }
}

export default AppHeader;
