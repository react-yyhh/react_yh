import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

//子组件








class Roots extends Component{
	render(){
		return (
			<div>{this.props.children}</div>
		);
	}
}



var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const RouteConfig=(
	<Router history={history}>
		<Route path="/" component={Roots}>
			<IndexRoute component={IndexPage} />
		</Route>
	</Router>		
);
export default RouteConfig;
