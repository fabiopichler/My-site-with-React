import React, { Component } from 'react';

import IBaseSectionComponentProps from './IBaseSectionComponentProps';
import TitleWithIconComponent from '../../titleWithIcon/TitleWithIconComponent';

class BaseSectionComponent extends Component<IBaseSectionComponentProps, any> {

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

export default BaseSectionComponent;
