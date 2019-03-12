import React, { Component } from 'react';

import './SocialSectionComponent.scss';

import ISocialSectionItems from './ISocialSectionComponentItems';
import BaseSectionComponent from '../baseSection/BaseSectionComponent';

class SocialSectionComponent extends Component {
    list: ISocialSectionItems[] = [
        {
            title: 'Perfil no Facebook',
            url: 'https://www.facebook.com/FabioPichler.vue',
            icon: 'fab fa-facebook-square facebook'
        }, {
            title: 'Página no Facebook',
            url: 'https://www.facebook.com/fabiopichler.net',
            icon: 'fab fa-facebook-square facebook'
        }, {
            title: 'Perfil no GitHub',
            url: 'https://github.com/fabiopichler',
            icon: 'fab fa-github github'
        }, {
            title: 'Perfil no  LinkedIn',
            url: 'https://www.linkedin.com/in/fabio-pichler/',
            icon: 'fab fa-linkedin linkedin'
        }
    ];

    render() {
        return (
            <BaseSectionComponent name="social" title="Redes Sociais" titleicon="fas fa-users">
                <div className="d-flex justify-content-center">
                    {this.list.map((item, i) => 
                        <span key={i} className="mx-2">
                            <a href={item.url} title={item.title} target="_blank">
                                <span className={item.icon}></span>
                            </a>
                        </span>
                    )}
                </div>
            </BaseSectionComponent>
        );
    }
}

export default SocialSectionComponent;
