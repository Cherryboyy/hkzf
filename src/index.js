import React from 'react'
import ReactDom from 'react-dom'
//导入全局样式文件
import './index.css'
//导入antd-mobile样式
import 'antd-mobile/dist/antd-mobile.css'
//导入app组件
import App from './App'
ReactDom.render(<App />, document.getElementById("root"))