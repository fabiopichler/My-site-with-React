import React, { Component } from 'react';

import './TitleWithIconComponent.scss';

import ITitleWithIconComponentProps from './ITitleWithIconComponentProps';

class TitleWithIcon extends Component<ITitleWithIconComponentProps, any> {

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
