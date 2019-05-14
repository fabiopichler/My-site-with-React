import React, { Component } from 'react';

import { LoadingStatus } from '../../common/loading/LoadingStatus';

import IHomeViewState from './IHomeViewState';
import ArticleService from '../../../domain/article/ArticleService';
import Loading from '../../common/loading/Loading';
import Article from '../../common/article/Article';

class HomeView extends Component<{}, IHomeViewState> {
    service!: ArticleService;

    constructor(props: {}) {
        super(props);

        this.service = new ArticleService();
        
        this.state = {
            articles: [],
            loading: LoadingStatus.Loading
        }
    }

    async componentDidMount() {
        try {
            const articles = await this.service.index('post');
            this.setState({ ...this.state, loading: LoadingStatus.Loaded, articles });

        } catch (error) {
            this.setState({ ...this.state, loading: LoadingStatus.Error });
        }
    }

    render() {
        const { articles, loading } = this.state;

        return (
            <Loading loading={loading}>
                {articles.map((article, i) => 
                    <Article key={i} article={article} btnContinueReading={true} />
                )}
            </Loading>
        );
    }
}

export default HomeView;
