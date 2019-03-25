import React, { Component } from 'react';

import BaseSectionComponent from '../baseSection/BaseSectionComponent';

class LoremIpsumSectionComponent extends Component {

    render() {
        return (
            <BaseSectionComponent name="lorem-ipsum" title="Lorem ipsum" titleicon="fab fa-internet-explorer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum sapien est, sit amet molestie dui lobortis non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu diam eu nisi semper pharetra. Vivamus quis condimentum orci.
            </BaseSectionComponent>
        );
    }
}

export default LoremIpsumSectionComponent;
