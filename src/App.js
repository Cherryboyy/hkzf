import React, { Component } from 'react'

// import { Button } from 'antd-mobile'
import Home from './pages/Home'
import Citylist from './pages/Citylist'
import Map from './pages/Map'
//配制路由
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          {/* 我是根组件app
        <Button type="primary">按钮</Button> */}
          {/* 配制路由 */}
          <Route path="/" exact render={() => <Redirect
            to="/home/index"
          >
          </Redirect>}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/map" component={Map}></Route>
          <Route exact path="/citylist" component={Citylist}></Route>
        </div>
      </Router>
    )
  }
}