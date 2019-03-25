import React, { Component } from 'react';

import IPostState from './IPostState';
import IPostProps from './IPostProps';
import ArticleService from '../../../domain/article/ArticleService';
import { Loading } from '../../share/loading/Loading';
import LoadingComponent from '../../share/loading/LoadingComponent';
import ArticleComponent from '../../share/article/ArticleComponent';


class Post extends Component<IPostProps, IPostState> {
    state: IPostState;
    service!: ArticleService;

    constructor(props: IPostProps) {
        super(props);

        this.service = new ArticleService();
        this.state = {
            loading: Loading.Loading
        }
    }

    async componentDidMount() {
        try {
            const article = await this.service.show('post', this.props.match.params.slug);
            this.setState({ ...this.state, loading: Loading.Loaded, article });

        } catch (error) {
            this.setState({ ...this.state, loading: Loading.Error });
        }
    }

    render() {
        const { article, loading } = this.state;

        return (
            <LoadingComponent loading={loading}>
                {article ?
                    <ArticleComponent article={article!} />
                : null}
            </LoadingComponent>
        );
    }
}

export default Post;
