import React, { Component } from 'react'
//导入组件
import { Carousel, Flex } from 'antd-mobile'
//导入axios
import axios from 'axios'
//导入静态图片
import nav1 from '../../../assets/images/nav-1.png'
import nav2 from '../../../assets/images/nav-2.png'
import nav3 from '../../../assets/images/nav-3.png'
import nav4 from '../../../assets/images/nav-4.png'
//导入样式
import './index.scss'
//整租合租数据
const navs = [{
    id: 0,
    img: nav1,
    title: '整租',
    path: '/home/houselist'
}, {
    id: 1,
    img: nav2,
    title: '合租',
    path: '/home/houselist'
}, {
    id: 2,
    img: nav3,
    title: '地图找房',
    path: '/map'
}, {
    id: 3,
    img: nav4,
    title: '去出租',
    path: '/rent/add'
}]
export default class index extends Component {
    state = {
        swipers: [],
        isplay: false
    }
    //获取数据
    componentDidMount() {
        this.getSwipers()
    }
    //发送请求轮播图数据
    async getSwipers() {
        let { data: res } = await axios.get('http://api-haoke-dev.itheima.net/home/swiper')
        console.log(res);
        this.setState({
            swipers: res.body
        }, () => {
            this.setState({
                isplay: true
            })
        });
    }
    //渲染轮播图
    renderSwipers = () => {
        return this.state.swipers.map((item, index) => (
            <a
                key={item.id}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
                <img
                    src={`http://api-haoke-dev.itheima.net${item.imgSrc}`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                />
            </a>
        ))
    }
    //渲染整租合租
    renderNavs = () => {
        return navs.map((item) => {
            return <Flex.Item key={item.id}
                onClick={() => {
                    this.props.history.push(item.path)
                }}
            >
                <img src={item.img} alt="" />
                <h2>{item.title}</h2>
            </Flex.Item>
        })
    }
    render() {
        return (
            <div>
                <Carousel
                    autoplay={this.state.isplay}
                    infinite
                    autoplayInterval='2000'
                >
                    {this.renderSwipers()}
                </Carousel>
                <Flex className="nav">
                    {this.renderNavs()}
                </Flex>
            </div>
        )

    }
}
