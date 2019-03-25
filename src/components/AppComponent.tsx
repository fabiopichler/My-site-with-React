import React, { Component } from 'react';

import './AppComponent.scss';

import AppRouter from './AppRouter';
import AppHeaderComponent from './appHeader/AppHeaderComponent';
import AppSidebarComponent from './appSidebar/AppSidebarComponent';
import AppFooterComponent from './appFooter/AppFooterComponent';

class AppComponent extends Component {
    render() {
        return (
            <div className="container px-0">
                <AppHeaderComponent />

                <div className="row m-0">
                    <main className="col-lg-8 px-0 pr-lg-2 order-first">
                        <AppRouter />  
                    </main>

                    <div className="col-lg-4 px-0">
                        <AppSidebarComponent />
                    </div>
                </div>

                <AppFooterComponent />
            </div>
        );
    }
}

export default AppComponent;
