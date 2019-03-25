import React, { Component } from 'react';

import ReactLogo from '../../../../assets/react.png'

import BaseSectionComponent from '../baseSection/BaseSectionComponent';

class AboutSectionComponent extends Component {

    render() {
        return (
            <BaseSectionComponent name="about" title="Sobre o Projeto" titleicon="fas fa-info-circle">
                <div className="media">
                    <img src={ReactLogo} className="align-self-center mr-3" alt="React logo" width="50" height="50" />

                    <div className="media-body">
                        <p className="mb-0">
                            Desenvolvido com <a href="https://reactjs.org/" target="_blank">React</a>
                            <br />
                            » <a href="https://github.com/fabiopichler/My-site-with-React" target="_blank"><strong>Repositório no GitHub</strong></a>
                            <br />
                            » <a href="https://github.com/fabiopichler/My-basic-REST-API" target="_blank">API REST no GitHub</a> 
                        </p>
                    </div>
                </div>
                
                <hr />

                <p className="mb-0 mt-3 text-center">
                    React • SASS • Bootstrap
                    <br />
                    TypeScript • HTML5 • CSS3
                </p> 
            </BaseSectionComponent>
        );
    }
}

export default AboutSectionComponent;
