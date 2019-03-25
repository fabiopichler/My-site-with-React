import React, { Component } from 'react';

import SocialSectionComponent from '../share/sections/socialSection/SocialSectionComponent';
import AboutSectionComponent from '../share/sections/aboutSection/AboutSectionComponent';
import LoremIpsumSectionComponent from '../share/sections/loremIpsumSection/LoremIpsumSectionComponent';

class AppSidebarComponent extends Component {

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

export default AppSidebarComponent;
