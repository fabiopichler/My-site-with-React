import React, { Component } from 'react';

import './AppFooterComponent.scss';

class AppFooterComponent extends Component {

    render() {
        return (
            <footer className="footer mb-2 py-5 px-3 text-center text-white bg-secondary">
                Desenvolvido com muito <span className="fas fa-heart heart"></span>
                <br />
                &copy; 2019, <a href="https://fabiopichler.net/" className="text-white font-weight-bold" target="_blank">Fábio Pichler</a>, Todos os direitos reservados
            </footer>
        );
    }
}

export default AppFooterComponent;
