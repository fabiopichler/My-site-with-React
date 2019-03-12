import React, { Component } from 'react';

import './App.scss';

import HeaderComponent from './components/header/HeaderComponent';
import RouterView from './RouterView';
import FooterComponent from './components/footer/FooterComponent';
import SidebarComponent from './components/sidebar/SidebarComponent';

class App extends Component {
    render() {
        return (
            <div className="container px-0">
                <HeaderComponent />

                <div className="row m-0">
                    <main className="col-lg-8 px-0 pr-lg-2 order-first">
                        <RouterView />  
                    </main>

                    <div className="col-lg-4 px-0">
                        <SidebarComponent />
                    </div>
                </div>

                <FooterComponent />
            </div>
        );
    }
}

export default App;
