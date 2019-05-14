import React, { Component } from 'react';

import './TitleWithIcon.scss';

import ITitleWithIconProps from './ITitleWithIconProps';

class TitleWithIcon extends Component<ITitleWithIconProps> {

    render() {
        return (
            <h5 className="card-title">
                {this.props.icon ?
                    <span className={`${this.props.icon} icon-title pr-1`}></span>
                : null}

                {this.props.title}
            </h5>
        );
    }
}

export default TitleWithIcon;
