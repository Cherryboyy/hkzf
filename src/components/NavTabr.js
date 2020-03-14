import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'



export default class NavTabr extends Component {
    render() {
        return (
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => this.props.history.push('/')}
            >{this.props.children}</NavBar>
        )
    }
}
