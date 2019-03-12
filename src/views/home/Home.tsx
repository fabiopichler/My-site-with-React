import React, { Component } from 'react';

import ArticleComponent from '../../components/article/ArticleComponent';
import ArticleService from '../../domain/article/ArticleService';
import IHomeState from './IHomeState';
import { Loading } from '../../components/loading/Loading';
import LoadingComponent from '../../components/loading/LoadingComponent';

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
