import React, { Component } from 'react';

import { LoadingStatus } from '../../common/loading/LoadingStatus';

import IPostViewState from './IPostViewState';
import IPostViewProps from './IPostViewProps';
import ArticleService from '../../../domain/article/ArticleService';
import Loading from '../../common/loading/Loading';
import Article from '../../common/article/Article';


class PostView extends Component<IPostViewProps, IPostViewState> {
    state: IPostViewState;
    service!: ArticleService;

    constructor(props: IPostViewProps) {
        super(props);

        this.service = new ArticleService();
        this.state = {
            loading: LoadingStatus.Loading
        }
    }

    async componentDidMount() {
        try {
            const article = await this.service.show('post', this.props.match.params.slug);
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
                    <Article article={article!} />
                : null}
            </Loading>
        );
    }
}

export default PostView;
