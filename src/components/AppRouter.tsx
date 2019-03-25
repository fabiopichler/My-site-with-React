import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/home/Home';
import Post from './views/post/Post';
import Page from './views/page/Page';
import IPageProps from './views/page/IPageProps';
import IPostProps from './views/post/IPostProps';

class AppRouter extends Component {
    render() {
        const url = process.env.PUBLIC_URL;
        return (
            <Switch>
                <Route
                    exact
                    path={`${url}/`}
                    render={() => <Home />}
                />

                <Route
                    path={`${url}/blog/:slug`}
                    component={(props: IPostProps) => <Post {...props} />}
                />

                <Route
                    path={`${url}/:slug`}
                    component={(props: IPageProps) => <Page {...props} />}
                />
            </Switch>
        );
    }
}

export default AppRouter;
