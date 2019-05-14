import React, { Component } from 'react';

import IBaseSectionProps from './IBaseSectionProps';
import TitleWithIconComponent from '../../titleWithIcon/TitleWithIcon';

class BaseSection extends Component<IBaseSectionProps> {

    render() {
        return (
            <section className="card mb-2">
                <div className="card-body p-3">
                    <TitleWithIconComponent title={this.props.title} icon={this.props.titleicon} />

                    <hr />

                    <div className={this.props.name}>
                        {this.props.children}
                    </div>
                </div>
            </section>
        );
    }
}

export default BaseSection;
