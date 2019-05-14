import React from 'react';

import './AppFooter.scss';

const AppFooter: React.FC = () => (
    <footer className="footer mb-2 py-5 px-3 text-center text-white bg-secondary">
        Desenvolvido com muito <span className="fas fa-heart heart"></span>
        <br />
        &copy; 2019,
        {' '}
        <a
            href="https://fabiopichler.net/"
            className="text-white font-weight-bold"
            target="_blank"
            rel="noopener noreferrer"
        >Fábio Pichler</a>, Todos os direitos reservados
    </footer>
);

export default AppFooter;
