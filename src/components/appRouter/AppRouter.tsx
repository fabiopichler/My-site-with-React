import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IPageViewProps from '../views/pageView/IPageViewProps';
import IPostViewProps from '../views/postView/IPostViewProps';

import HomeView from '../views/homeView/HomeView';
import PostView from '../views/postView/PostView';
import PageView from '../views/pageView/PageView';

const url = process.env.PUBLIC_URL;

const AppRouter: React.FC = () => (
    <Switch>
        <Route
            exact
            path={`${url}/`}
            render={() => <HomeView />}
        />

        <Route
            path={`${url}/blog/:slug`}
            component={(props: IPostViewProps) => <PostView {...props} />}
        />

        <Route
            path={`${url}/:slug`}
            component={(props: IPageViewProps) => <PageView {...props} />}
        />
    </Switch>
);

export default AppRouter;
