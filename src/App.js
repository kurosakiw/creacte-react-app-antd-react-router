import React, { Component } from 'react';
import logo from './logo.svg';
//import Button from 'antd/lib/button';
import { Button } from 'antd';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';  

const Home = ({ match }) => (
  <div>
    <h2>Page1</h2>
    <ul>
      <li>
        <Link to={`${match.url}/branch1`}>
          branch1
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/branch2`}>
          branch2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/branch3`}>
          branch3
        </Link>
      </li>
    </ul>
  </div>
)

const Page1 = ({ match }) => (
  <div>
    <h2>Page1</h2>
    <ul>
      <li>
        <Link to={`${match.url}/branch1`}>
          branch1
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/branch2`}>
          branch2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/branch3`}>
          branch3
        </Link>
      </li>
    </ul>
  </div>
)


const Page2 = ({ match }) => (
  <div>
    <h2>Page2</h2>
    <ul>
      <li>
        <Link to={`${match.url}/branch1`}>
          branch1
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/branch2`}>
          branch2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/branch3`}>
          branch3
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:branchId`} component={Branch} />
    <Route exact path={match.url} render={() => (
      <h3>Default Information</h3>
    )} />
  </div>
)

const Branch = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h3>{match.params.branchId}</h3>
    </div>
  )
}



const Basic = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page1">Page1</Link></li>
        <li><Link to="/page2">Page2</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
    </div>
  </Router>
)


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Basic/>
        <Button type="danger">Button</Button>
      </div>
    );
  }
}

export default App;