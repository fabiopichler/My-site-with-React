import React, { Component } from 'react';

import './App.scss';

import AppRouter from './appRouter/AppRouter';
import AppHeader from './appHeader/AppHeader';
import AppSidebar from './appSidebar/AppSidebar';
import AppFooter from './appFooter/AppFooter';

class App extends Component {
    render() {
        return (
            <div className="container px-0">
                <AppHeader />

                <div className="row m-0">
                    <main className="col-lg-8 px-0 pr-lg-2 order-first">
                        <AppRouter />  
                    </main>

                    <div className="col-lg-4 px-0">
                        <AppSidebar />
                    </div>
                </div>

                <AppFooter />
            </div>
        );
    }
}

export default App;
