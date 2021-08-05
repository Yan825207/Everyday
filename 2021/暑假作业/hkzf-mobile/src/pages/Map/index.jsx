import React from "react"
import "./map.css"
import NavHander from "../../components/NavHeader/NavHeader"
import getCurrentCity from "../../utils/getCurrectCity/getCurrectCity"
import { httpGet } from "../../utils/axios/http"
import { HomeAPI } from "../../api"
import { Toast } from "antd-mobile"
const BMap = window.BMap
// 覆盖物样式
const labelStyle = {
    cursor: 'pointer',
    border: '0px solid rgb(255, 0, 0)',
    padding: '0px',
    whiteSpace: 'nowrap',
    fontSize: '12px',
    color: 'rgb(255, 255, 255)',
    textAlign: 'center'
}
class News extends React.Component {
    state = {
        list: [],
        isShow: false
    }
    componentDidMount() {
        this.initMap()
    };
    // 初始化地图
    async initMap() {
        // 通过new操作符创建一个地图实例
        const map = new BMap.Map("container");
        // 将map赋值到News类中,方便使用
        this.map = map
        // 获取当前定位城市
        const { label, value } = await getCurrentCity()
        // 使用地址解析器获取当前城市坐标
        var myGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上，并调整地图视野    
        myGeo.getPoint(label, async (point) => {
            if (point) {
                map.centerAndZoom(point, 11);
                // 添加比例尺、缩放控件
                map.addControl(new BMap.ScaleControl())
                map.addControl(new BMap.NavigationControl())

                // 调用renderOverlays渲染覆盖物
                this.renderOverlays(value)
            }
        }, label);
    }
    // 获取房源数据
    renderOverlays = async (value) => {
        // 获取房源数据
        Toast.loading("加载中...")
        const res = await httpGet(HomeAPI.map, { id: value })
        Toast.hide()
        // 获取覆盖物类型,和缩放级别
        const { type, nextLevel } = this.getTypeAndZoom()
        console.log(type, nextLevel);
        // 遍历房源数据
        res.body.forEach(item => {
            //  调用渲染覆盖物的方法
            this.createOverlays(type, nextLevel, item)

        })
    }
    // 获取覆盖物类型,缩放级别
    getTypeAndZoom = () => {
        // 获取当前级别  ,当前this中没有map,需要将map赋值到类中
        const curZoom = this.map.getZoom()

        let type, nextLevel;
        // 判断当前在那个范围之内，给下一级别赋值
        if (curZoom >= 10 && curZoom < 12) {
            type = "circle";
            nextLevel = 13
        } else if (curZoom >= 12 && curZoom < 14) {
            type = "circle";
            nextLevel = 15
        } else if (curZoom >= 14 && curZoom < 16) {
            type = "rect"
        }
        return { type, nextLevel }
    }
    // 判断渲染覆盖物级别
    createOverlays = (type, level, item) => {
        const { coord: { latitude, longitude }, count, label, value } = item
        // console.log(latitude, longitude);
        const point = new BMap.Point(longitude, latitude)
        // 判断type的类型 
        if (type === "circle") {
            // 渲染圆形覆盖物
            // 调用方法渲染覆盖物
            this.createCircle(point, count, label, level, value)
        } else if (type === 'rect') {
            // 如果是三级覆盖物则调用createRect()
            this.createRect(point, count, label, value)

        }

    };
    // 渲染覆盖物
    createCircle = (point, count, areaLabel, level, value) => {
        const opts = {
            position: point,    // 指定文本标注所在的地理位置
            offset: new BMap.Size(35, -35)    //设置文本偏移量
        }
        const label = new BMap.Label("", opts);  // 创建文本标注对象
        label.setContent(`<div class="bubble">
          <p class="name">${areaLabel}</p>
          <p>${count}套</p>
        </div>
            `)
        label.setStyle(labelStyle);
        // 覆盖物点击事件
        label.addEventListener("click", (e) => {
            //    清除覆盖物
            setTimeout(() => {
                this.map.clearOverlays()
            }, 0);
            // 渲染下一级覆盖物
            this.renderOverlays(value);
            // 地图级别放大
            this.map.centerAndZoom(point, level)
        })
        this.map.addOverlay(label);
    }
    // 渲染三级覆盖物
    createRect = (point, count, areaLabel, value) => {
        const opts = {
            position: point,    // 指定文本标注所在的地理位置
            offset: new BMap.Size(-58, -20)    //设置文本偏移量
        }
        const label = new BMap.Label("", opts);  // 创建文本标注对象
        // 6.3 给覆盖物 设置内容
        label.setContent(`
    <div class="rect">
    <span class="housename">${areaLabel}</span>
    <span class="housenum">${count}套</span>
    <i class="arrow"></i>
  </div>`
        );
        label.setStyle(labelStyle);
        // 覆盖物点击事件
        label.addEventListener("click", (e) => {
            // console.log("点击了小区中的房屋", cityId)

            const { clientX, clientY } = e.changedTouches[0];
            console.log(clientX, clientY)

            // 中心点坐标
            // x: window.innerWidth/2 
            // y: (window.innerHeight-330)/2

            // console.log(e);


            // console.log((window.innerWidth / 2) - clientX, ((window.innerHeight - 330) / 2) - clientY)
            this.map.panBy((window.innerWidth / 2) - clientX, ((window.innerHeight - 330) / 2) - clientY);


            this.getCommunityHouses(value)

        })
        // 移动地图,房屋详情收回
        this.map.addEventListener("touchstart", () => {
            this.setState({
                isShow: false
            })
        })
        this.map.addOverlay(label);
    }
    // 获取详细房源数据
    getCommunityHouses = async (value) => {
        Toast.loading("加载中", 3)
        const res = await httpGet(HomeAPI.houses, {
            cityId: value,
            start: 1,
            end: 20
        })
        this.setState({
            list: res.body.list,
            isShow: true
        })
    }
    renderHouse = (res) => {
        return this.state.list.map((item, index) => (
            <div className="house" key={item.houseCode}>
                <div className="imgWrap" >
                    <img
                        className="img"
                        src={`http://localhost:8080${item.houseImg}`}
                        alt=""
                    />
                </div>
                <div className="content">
                    <h3 className="title">
                        {item.title}
                    </h3>
                    <div className="desc">{item.desc}</div>
                    <div>
                        {
                            item.tags.map((subItem, subIndex) => {
                                let taga = subIndex >= 2 ? "tag3" : `tag${subIndex + 1}`
                                return (<span key={subIndex} className={["tag", taga].join(' ')}>
                                    {subItem}
                                </span>)
                            }
                            )
                        }

                    </div>
                    <div className="price">
                        <span className="priceNum">{item.price}</span> 元/月
                    </div>
                </div>
            </div>))
    }
    render() {
        return (
            <div className="map">
                <NavHander>地图找房</NavHander>
                <div id="container">

                </div>
                <div className={['houseList', this.state.isShow ? 'show' : ""].join(' ')}>
                    <div className="titleWrap">
                        <h1 className="listTitle">房屋列表</h1>
                        <a className="titleMore" href="/house/list">
                            更多房源
                        </a>
                    </div>
                    <div className="houseItems">
                        {this.renderHouse()}
                    </div>
                </div>
            </div>
        )
    }
}
export default News