import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import axios from 'axios'
export default class index extends Component {
    state = {
        swipers: [],
        isplay:false
    }
    componentDidMount() {
        this.getSwipers()
            
    }
    async getSwipers() {
        let {data:res} = await axios.get('http://api-haoke-dev.itheima.net/home/swiper')
        console.log(res);
        this.setState({
            swipers:res.body
        },()=> {
            this.setState({
                isplay:true
            })
        });
    }
    render() {
        return (
                <Carousel
                    autoplay={this.state.isplay}
                    infinite
                    autoplayInterval='2000'
                >
                    {this.state.swipers.map((item,index) => (
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
                    ))}
                </Carousel>
        );
    }
}
