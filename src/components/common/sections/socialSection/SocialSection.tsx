import React, { Component } from 'react';

import './SocialSection.scss';

import ISocialSectionItems from './ISocialSectionItems';
import BaseSection from '../baseSection/BaseSectionComponent';

class SocialSection extends Component {
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
            <BaseSection name="social" title="Redes Sociais" titleicon="fas fa-users">
                <div className="d-flex justify-content-center">
                    {this.list.map((item, i) => 
                        <span key={i} className="mx-2">
                            <a href={item.url} title={item.title} target="_blank" rel="noopener noreferrer">
                                <span className={item.icon}></span>
                            </a>
                        </span>
                    )}
                </div>
            </BaseSection>
        );
    }
}

export default SocialSection;
