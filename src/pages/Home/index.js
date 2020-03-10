import React, { PureComponent } from 'react'
import { Route } from 'react-router-dom'
import Index from './index/index'
import Houselist from './houselist'
import News from './News'
import Profile from './profile'
import './home.css'
//导入tabbar
import { TabBar } from 'antd-mobile'
// 底部导航数据 我认为这个底部导航基本不会变 数据 就不写在state了
const tabItems = [{
    title: '首页',
    icon: 'icon-ind',
    path: '/home/index'
  },
  {
    title: '找房',
    icon: 'icon-findHouse',
    path: '/home/houselist'
  },
  {
    title: '资讯',
    icon: 'icon-infom',
    path: '/home/news'
  },
  {
    title: '我的',
    icon: 'icon-my',
    path: '/home/profile'
  }]
export default class Home extends PureComponent {
    state = {
        selectedTab: '/home/index',
        hidden: false,//是否隐藏
        // fullScreen: false,
    }
    //渲染
    renderTabbar=()=> {
        return tabItems.map((item,index)=> {
            return <TabBar.Item
            title={item.title}
            key={item.path}
            icon={
                <i className={`iconfont ${item.icon}`}></i>
            }
            selectedIcon={
                <i className={`iconfont ${item.icon}`}></i>
            }
            selected={this.state.selectedTab === item.path}
            onPress={() => {
                this.setState({
                    selectedTab: item.path,
                });
                this.props.history.push(item.path)
            }}
        >
        </TabBar.Item>
        
        })
    }
    render() {
        return (
            <div className="home">
                <Route path="/home/index" component={Index}></Route>
                <Route path="/home/houselist" component={Houselist}></Route>
                <Route path="/home/news" component={News}></Route>
                <Route path="/home/profile" component={Profile}></Route>
                {/* 底部标签 */}
                {/* <div style={this.state.fullScreen ?
                    { position: 'fixed', height: '100%', width: '100%', top: 0 } :
                    { height: 400 }}> */}
                <TabBar
                    unselectedTintColor="#949494"//未选中的颜色
                    tintColor="#33A3F4"//选中的颜色
                    barTintColor="white"
                    hidden={this.state.hidden}//是否隐藏底部栏
                    noRenderContent={true}
                >
                    { this.renderTabbar()}
                    </TabBar>
                {/* </div> */}
            </div>
        )
    }
}
