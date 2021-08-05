import React from "react"
import { Carousel, Flex, Grid, WingBlank } from 'antd-mobile';

import { httpGet } from '../../utils/axios/http'
import { HomeAPI } from "../../api"
import SearchHeader from "../../components/SearchHeader/SearchHeader"


// 引入图片
import nav1 from "../../assets/images/nav-1.png"
import nav2 from "../../assets/images/nav-2.png"
import nav3 from "../../assets/images/nav-3.png"
import nav4 from "../../assets/images/nav-4.png"
import getCurrentCity from "../../utils/getCurrectCity/getCurrectCity";

const navList = [
    {
        title: "整租",
        path: "/findhouse",
        imgSrc: nav1
    },
    {
        title: "合租",
        path: "/findhouse",
        imgSrc: nav2
    },
    {
        title: "地图找房",
        path: "/findhouse",
        imgSrc: nav3
    },
    {
        title: "去出租",
        path: "/findhouse",
        imgSrc: nav4
    }
]
class Home extends React.Component {
    state = {
        imgHeight: 176,
        swiperData: [],
        // 轮播图状态
        swiperStatus: false,
        groupList: [],
        newSList: [],
        cityName: "上海",
        recaId: ""
    }
    componentDidMount() {
        // 发起请求获取轮播 图数据
        this.getSwiper();
        // 获取租房小组数据
        this.getGroup();
        // 发起请求获取最新资讯
        this.getNews();

        this.getcityName()


    }
    async getcityName() {
        // 获取当前定位城市
        const { value, label } = await getCurrentCity()
        this.setState({
            cityName: label,
            recaId: value
        })
    }
    // 获取轮播图数据
    async getSwiper() {
        const res = await httpGet(HomeAPI.swiper)
        if (res.status === 200) {
            this.setState({
                swiperData: res.body,
                swiperStatus: true
            })
        }
    }
    renderSwiper = () => {
        return (
            this.state.swiperData.map(item => (
                <a
                    key={item.id}
                    href="http://www.alipay.com"
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                    <img
                        src={`http://localhost:8080${item.imgSrc}`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                    />
                </a>
            ))
        )
    }
    // 获取租房小组数据
    async getGroup() {

        const res = await httpGet(HomeAPI.group)
        if (res.status === 200) {
            this.setState({
                groupList: res.body,
            })
        }

    }


    renderGroup = () => {
        return (
            <Grid data={this.state.groupList} hasLine={false} square={false} columnNum={2} className="group-grid" renderItem={(item, index) => (
                <Flex key={index}>
                    <Flex.Item><h3>{item.title}</h3><p>{item.desc}</p></Flex.Item>
                    <Flex.Item><img src={`http://localhost:8080${item.imgSrc}`} alt=""></img></Flex.Item>
                </ Flex>
            )} />
        )
    }
    // 获取最新资讯
    async getNews() {
        const res = await httpGet(HomeAPI.news, this.state.recaId)
        if (res.status === 200) {
            this.setState({
                newSList: res.body
            })
        }
    }

    render() {
        return (
            <div className="Home">
                <div className="swiper">
                    {/* 搜索框 */}
                    {/* <Flex className="search-box"> */}
                    <SearchHeader cityName={this.state.cityName}></SearchHeader>
                    {/* <Flex className="search-left">
                            <div className="location" onClick={() => { this.props.history.push("/citylist"); }}>
                                <span>{this.state.cityName}</span>
                                <i className="iconfont icon-arrow" />
                            </div>
                            <div className="search-form" onClick={() => { this.props.history.push("/search"); }}>
                                <i className="iconfont icon-seach" />
                                <span>请输入小区或地址</span>
                            </div>
                        </Flex> */}
                    {/* 地图 */}
                    {/* <i className="iconfont icon-map" onClick={() => { this.props.history.push("/map"); }} /> */}
                    {/* </Flex> */}
                    {
                        this.state.swiperStatus ? <Carousel
                            autoplay
                            infinite
                        >
                            {this.renderSwiper()}
                        </Carousel> : ""
                    }
                </div>
                <div className="nav">
                    <Flex >
                        {
                            navList.map((item, index) => (
                                <Flex.Item key={index} onClick={() => { this.props.history.push("/findhouse") }}><img src={item.imgSrc} alt=""></img><p>{item.title}</p></Flex.Item>
                            ))
                        }
                    </Flex>
                </div>
                <div className="group">
                    <Flex className="group-title" justify="between">
                        <flex-item><h3>租房小组</h3></flex-item>
                        <flex-item><span>更多</span></flex-item>
                    </Flex>
                    {this.renderGroup()}
                </div>
                {/* 最新资讯  */}
                <div className="news">
                    <WingBlank>
                        <h3>最新资讯</h3>
                        {
                            this.state.newSList.map((item, index) => (
                                <div className="news-item" key={index}>
                                    <img src={`http://localhost:8080${item.imgSrc}`} alt="" />
                                    <div className="news-item-content">
                                        <WingBlank size="md"><h3>{item.title}</h3></WingBlank>

                                        <p className="news-item-content-tips">
                                            <span>{item.from}</span>
                                            <span>{item.date}</span>
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </WingBlank>
                </div>
            </div>

        );
    }
}
export default Home