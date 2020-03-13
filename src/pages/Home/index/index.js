import React, { Component } from 'react'
//导入组件
import { Carousel, Flex, Grid } from 'antd-mobile'
//导入axios
import axios from 'axios'
//导入静态图片
import nav1 from '../../../assets/images/nav-1.png'
import nav2 from '../../../assets/images/nav-2.png'
import nav3 from '../../../assets/images/nav-3.png'
import nav4 from '../../../assets/images/nav-4.png'
//导入样式
import './index.scss'
import './index.css'
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
        isplay: false, // 图片轮播是否自动
        groups: [], // 房租小组数据
        news: []//最新资讯数据
    }
    //获取数据
    componentDidMount() {
        //获取轮播图
        this.getSwipers()
        //获取房租小组
        this.getGeoups()
        //获取最新资讯
        this.getNews()
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
    //获取房租小组数据
    async getGeoups() {
        let { data: res } = await axios.get('http://api-haoke-dev.itheima.net/home/groups?area=AREA%7C88cff55c-aaa4-e2e0')
        console.log('房租小组数据', res.body);
        this.setState({
            groups: res.body
        })
    }
    //获取最新资讯
    async getNews() {
        let { data: res } = await axios.get('http://api-haoke-dev.itheima.net/home/news?area=AREA%7C88cff55c-aaa4-e2e0')
        console.log('资讯数据', res.body);
        this.setState({
            news: res.body
        })
    }
    //渲染整租合租
    renderNavs = () => {
        return navs.map((item) => {
            return <Flex.Item key={item.id}
                onClick={() => {
                    this.props.history.push(item.path)
                }}
            >
                <img style={{ width: '60px' }} src={item.img} alt="" />
                <h2>{item.title}</h2>
            </Flex.Item>
        })
    }
    // 渲染 最新资讯列表
    renderNews() {
        return this.state.news.map((item) => {
            return <li key={item.id}>
                <div className="news-left">
                    <img src={`http://api-haoke-dev.itheima.net${item.imgSrc}`} alt="" />
                </div>
                <div className="news-right">
                    <h3>{item.title}</h3>
                    <div className="time">
                        <span>{item.from}</span>
                        <span>{item.date}</span>
                    </div>
                </div>
            </li>
        })
    }
    render() {
        return (
            <div>
                {/* 搜索栏部分 */}
                <Flex className='searchBox'>
                    <Flex className='searchLeft'>
                        <div
                            className='location'
                            onClick={() => {
                                //  点击跳转citylist
                                this.props.history.push("/citylist")
                            }}
                        >
                            <span>上海</span>
                            <i className="iconfont icon-arrow" />
                        </div>
                        <div
                            className='searchForm'
                        >
                            <i className="iconfont icon-seach" />
                            <span>请输入小区或地址</span>
                        </div>
                    </Flex>
                    <i
                        className="iconfont icon-map"
                        onClick={() => {
                            //  点击跳转map地图找房
                            this.props.history.push("/map")
                        }}
                    />
                </Flex>
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
                {/* 租房小组 */}
                <div className="groups">
                    <div className="group-title">
                        <h2>租房小组</h2>
                        <p>更多</p>
                    </div>
                </div>
                <Grid
                    data={this.state.groups}  //数组
                    columnNum={2}  // 每行显示 2 个
                    square={false} //  是否为正方形
                    hasLine={false} //是否有边框线条
                    activeStyle={true}  // 点击是否显示灰色背景
                    renderItem={(item) => { //item 每一个数据
                        // 格子的内容 可以写很多 样式了
                        return <Flex className="grid-item" justify="between">
                            <div className="desc">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                            <img src={`http://api-haoke-dev.itheima.net${item.imgSrc}`} alt="" />
                        </Flex>
                    }}
                />
                {/* 最新资讯 */}
                <div className="news">
                    {/* 标题 */}
                    <h3>最新资讯</h3>
                    {/* ul 列表 */}
                    <ul>
                        {/* map循环news生成li 最新资讯 */}
                        {this.renderNews()}
                    </ul>
                </div>
            </div>
        )

    }
}
