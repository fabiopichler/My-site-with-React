import React, { Component } from 'react';

import { LoadingStatus } from '../../common/loading/LoadingStatus';

import IPageViewState from './IPageViewState';
import IPageViewProps from './IPageViewProps';
import ArticleService from '../../../domain/article/ArticleService';
import Loading from '../../common/loading/Loading';


class PageView extends Component<IPageViewProps, IPageViewState> {
    state: IPageViewState;
    service!: ArticleService;
    
    constructor(props: IPageViewProps) {
        super(props);

        this.service = new ArticleService();
        this.state = {
            loading: LoadingStatus.Loading
        }
    }

    async componentDidMount() {
        try {
            const article = await this.service.show('page', this.props.match.params.slug);
            this.setState({ ...this.state, loading: LoadingStatus.Loaded, article });

        } catch (error) {
            this.setState({ ...this.state, loading: LoadingStatus.Error });
        }
    }

    render() {
        const { article, loading } = this.state;

        return (
            <Loading loading={loading}>
                {article ?
                    <article className="article card mb-2">
                        <header className="p-3">
                            <h2 className="mt-2 mb-0">{article!.title}</h2>
                        </header>

                        <div dangerouslySetInnerHTML={{ __html: article!.content }} className="content px-3 mb-3"></div>
                    </article>
                : null}
            </Loading>
        );
    }
}

export default PageView;
