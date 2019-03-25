import React, { Component } from 'react';

import IHomeState from './IHomeState';
import ArticleService from '../../../domain/article/ArticleService';
import { Loading } from '../../share/loading/Loading';
import LoadingComponent from '../../share/loading/LoadingComponent';
import ArticleComponent from '../../share/article/ArticleComponent';

class Home extends Component<{}, IHomeState> {
    service!: ArticleService;

    constructor(props: {}) {
        super(props);

        this.service = new ArticleService();
        this.state = {
            articles: [],
            loading: Loading.Loading
        }
    }

    async componentDidMount() {
        try {
            const articles = await this.service.index('post');
            this.setState({ ...this.state, loading: Loading.Loaded, articles });

        } catch (error) {
            this.setState({ ...this.state, loading: Loading.Error });
        }
    }

    render() {
        const { articles, loading } = this.state;

        return (
            <LoadingComponent loading={loading}>
                {articles.map((article, i) => 
                    <ArticleComponent key={i} article={article} btnContinueReading={true} />
                )}
            </LoadingComponent>
        );
    }
}

export default Home;
