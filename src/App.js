import React,{Component} from 'react'

import {Button} from 'antd-mobile'

export default class App extends Component {
  render() {
    return (
      <div>
        我是根组件app
        <Button type="primary">按钮</Button>
      </div>
    )
  }
}