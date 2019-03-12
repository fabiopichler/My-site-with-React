import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ArticleComponent.scss';

import IArticleProps from './IArticleComponentProps';

class ArticleComponent extends Component<IArticleProps, any> {
    
    render() {
        const { article, btnContinueReading } = this.props;
        const url = process.env.PUBLIC_URL;

        return (
            <article className="article card mb-2">
                <header className="p-3">
                    <h2 className="mt-2">
                        <Link to={`${url}/blog/${article.slug}`} className="text-info">{article.title}</Link>
                    </h2>

                    <small className="mt-3 d-block text-secondary">
                        <time className="mr-3">
                            <i className="fas fa-calendar-alt"></i> {article.date_posted}
                        </time>

                        <span className="fas fa-user"></span> {article.user_fullName}
                    </small>
                </header>

                <hr />

                <div dangerouslySetInnerHTML={{ __html: article.content }} className="content px-3 pt-3"></div>

                <hr />

                <footer className="d-flex align-items-center p-3">
                    <small className="d-block text-secondary">
                        <time>Atualizado em {article.date_modified}</time>
                    </small>

                    {btnContinueReading ?
                        <div className="d-block ml-auto">
                            <Link to={`${url}/blog/${article.slug}`} className="btn btn-sm btn-info">Continue Lendo</Link>
                        </div>
                    : null}
                </footer>
            </article>
        );
    }
}

export default ArticleComponent;
