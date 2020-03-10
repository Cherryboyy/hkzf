import React, { Component } from 'react'

// import { Button } from 'antd-mobile'
import Home from './pages/Home'
import Citylist from './pages/Citylist'
//配制路由
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          {/* 我是根组件app
        <Button type="primary">按钮</Button> */}
          {/* 配制路由 */}
          <Route path="/home" component={Home}></Route>
          <Route exact path="/citylist" component={Citylist}></Route>
        </div>
      </Router>
    )
  }
}