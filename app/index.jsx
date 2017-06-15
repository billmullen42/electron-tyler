import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="ui container center aligned">
        <div className="ui text container">
          <h1 className="ui dividing header">DownGit 2.0</h1>
          <h3 className="first">Download Me</h3>
          <div className="ui search">
            <div className="ui icon input">
              <input id="search" className="prompt" type="text" placeholder="Search..." />
              <i className="search icon"></i>
            </div>
            <div className="results"></div>
          </div>
        </div>
        <br />
        <div id="repos" className="ui text container"></div>
      </div>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <Route path='*' component={App} />
  </BrowserRouter>
), document.getElementById('root')
)
