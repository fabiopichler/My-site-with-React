import React, { Component } from 'react';

import BaseSection from '../baseSection/BaseSectionComponent';

class LoremIpsumSection extends Component {

    render() {
        return (
            <BaseSection name="lorem-ipsum" title="Lorem ipsum" titleicon="fab fa-internet-explorer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum sapien est, sit amet molestie dui lobortis non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu diam eu nisi semper pharetra. Vivamus quis condimentum orci.
            </BaseSection>
        );
    }
}

export default LoremIpsumSection;
