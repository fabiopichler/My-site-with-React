import { Component } from 'react';
import { withRouter, RouteComponentProps, StaticContext } from 'react-router';

class ScrollToTop extends Component<RouteComponentProps<any, StaticContext, any>, any, any> {

    componentWillReceiveProps(nextProps: any) {
        window.scrollTo(0, 0);
    }

    render() {
        return this.props.children;
    }
}
  
export default withRouter(ScrollToTop);
