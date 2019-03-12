import React, { Component } from 'react';

import SocialSectionComponent from '../sections/socialSection/SocialSectionComponent';
import LoremIpsumSectionComponent from '../sections/loremIpsumSection/LoremIpsumSectionComponent';
import AboutSectionComponent from '../sections/aboutSection/AboutSectionComponent';

class SidebarComponent extends Component {

    render() {
        return (
            <aside>
                <SocialSectionComponent />

                <AboutSectionComponent />

                <LoremIpsumSectionComponent />
            </aside>
        );
    }
}

export default SidebarComponent;
