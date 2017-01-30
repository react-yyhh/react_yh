import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';

class IndexPage extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<h1>Hello 哈哈</h1>	
		);
	}
}
export default IndexPage;