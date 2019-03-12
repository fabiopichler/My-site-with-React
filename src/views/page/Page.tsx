import React, { Component } from 'react';

import ArticleService from '../../domain/article/ArticleService';
import IPageState from './IPageState';
import IPageProps from './IPageProps';
import { Loading } from '../../components/loading/Loading';
import LoadingComponent from '../../components/loading/LoadingComponent';

class Page extends Component<IPageProps, IPageState> {
    state: IPageState;
    service!: ArticleService;
    
    constructor(props: IPageProps) {
        super(props);

        this.service = new ArticleService();
        this.state = {
            loading: Loading.Loading
        }
    }

    async componentDidMount() {
        try {
            const article = await this.service.show('page', this.props.match.params.slug);
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
                    <article className="article card mb-2">
                        <header className="p-3">
                            <h2 className="mt-2 mb-0">{article!.title}</h2>
                        </header>

                        <div dangerouslySetInnerHTML={{ __html: article!.content }} className="content px-3 mb-3"></div>
                    </article>
                : null}
            </LoadingComponent>
        );
    }
}

export default Page;
