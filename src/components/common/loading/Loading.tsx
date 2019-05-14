import React, { Component } from 'react';

import './Loading.scss';

import Error from '../error/Error';
import ILoadingProps from './ILoadingProps';

class Loading extends Component<ILoadingProps> {

    render() {
        const { loading, children } = this.props;

        return (
            <div>
                {loading === 0 ?
                    <div className="loading card mb-2">
                        <div className="card-body d-flex flex-column justify-content-center text-center h-100">
                            <div className="text-secondary">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                
                                <h5 className="text mt-2">carregando...</h5>
                            </div>
                        </div>
                    </div>

                : loading === 1 ?
                    <Error />

                :
                    children
                }
            </div>
        );
    }
}

export default Loading;
