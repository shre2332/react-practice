import React from 'react';
import ReactDOM from 'react-dom';

// create a new component.  this component should produce html

const App = () => {
	return <div>hi</div>;
}

// take component generated html and put it on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));