var React = require('react');
var ReactDOM = require('react-dom');

import SearchBox from './components/search-box';

const Index = () => {
	return (
      <SearchBox />
	);
}

ReactDOM.render(<Index />, document.querySelector('.search'));