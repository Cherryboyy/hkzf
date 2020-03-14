import React, { Component } from 'react'
import NavHeader from '../../components/NavTabr'

// 在map 组件 =使用百度地图
//正常没有问题 直接用BMap 在react中 第三方js 引入变量的要使用 必须加上 window ---window.BMap
//1  react的问题 必须加上 window ---window.BMap
//2  container 要注意高度 有没有
import './map.scss'
// 一直window 很麻烦 我先赋值一下
let BMap = window.BMap
export default class Map extends Component {
  componentDidMount() {
    this.initMap()
  }
  initMap() {
    // 创建地图实例
    var map = new BMap.Map("container")
    // 设置中心点坐标 -经纬度
    var point = new BMap.Point(116.404, 39.915)
    //把地图显示到坐标点
    map.centerAndZoom(point, 15)
  }
  render() {
    return <div className="map">
      <div id="container"></div>
      <div className="tabbar">
      <NavHeader>地图找房</NavHeader>
      </div>
    </div>

  }
}
