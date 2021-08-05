import React, { createRef } from "react"
import { Toast } from "antd-mobile"
import "./Citylist.css"
import { HomeAPI } from "../../api/index"
import { httpGet } from "../../utils/axios/http"
import cityListFormat from "../../utils/cityformat/cityListFormat"
import getCurrentCity from "../../utils/getCurrectCity/getCurrectCity"
import { List, AutoSizer } from 'react-virtualized';
import { setItem } from "../../utils/myStorage/myStorage"
import NavHander from "../../components/NavHeader/NavHeader"
// 格式化城市列表标题信息
function formatListTitle(title) {
    switch (title) {
        case "hot":
            return "热门城市";
        case "#":
            return "当前定位";
        default:
            return title.toUpperCase()
    }
}
// 模拟有房源的城市
const HOUSE_CITY = ['北京', '上海', '广州', '深圳']
class CityList extends React.Component {
    state = {
        cityList: {},
        cityIndex: [],
        // 当前索引
        activeIndex: 0
    }
    listRef = createRef()
    componentDidMount() {
        // 获取城市列表
        this.getCityList()

    }
    // 获取数据
    async getCityList() {
        let res = await httpGet(HomeAPI.city, { level: 1 })
        // 格式化城市列表数据
        const { cityList, cityIndex } = cityListFormat(res.body)

        // 获取热门城市
        let reshot = await httpGet(HomeAPI.hot)
        // 把数据添加到cityList中
        cityList["hot"] = reshot.body
        // 把hot添加到cityIndex中
        cityIndex.unshift("hot")
        // 获取当前定位城市
        // getCurrentCity((curcity) => {
        //     console.log(curcity);
        // })
        let curcity = await getCurrentCity()
        // 把当前定位信息数据添加到cityList中
        cityList["#"] = [curcity]
        // 把#添加到cityIndex中
        cityIndex.unshift("#")
        this.setState({
            cityList: cityList,
            cityIndex: cityIndex
        })
    }
    // 文档说明 当rowHeight为一个函数时返回{ index }
    getRowHeight = ({ index }) => {
        return 36 + (50 * this.state.cityList[this.state.cityIndex[index]].length)
    }
    rowRenderer = ({
        key,         // 每条数据的唯一标识
        index,       // 索引
        style        // 每行的样式
    }) => {

        const { cityList, cityIndex } = this.state
        return (
            // 城市列表
            <div key={key} style={style} className="city">
                {/* 格式化数据  hot--->"热"  #---->"当前定位" */}
                <div className="title">{formatListTitle(cityIndex[index])}</div>
                {
                    cityList[cityIndex[index]].map(item => {
                        return (
                            <div className="name" key={item.value} onClick={() => {
                                if (HOUSE_CITY.includes(item.label)) {
                                    // 则没有房源
                                    console.log(HOUSE_CITY.includes(item.label));
                                    setItem({ label: item.label, value: item.value })
                                    this.props.history.go(-1)
                                } else {
                                    Toast.info("该城市暂无房源信息", 1)
                                }
                            }
                            }>
                                {item.label}
                            </div>
                        )
                    })
                }
            </div >
        )
    }
    // 渲染城市列表
    renderCityIndex() {
        const { activeIndex, cityIndex } = this.state
        return (
            // 右侧城市列表数据：
            cityIndex.map((item, index) => (
                <li className="city-index-item" key={item} onClick={() => { this.listRef.current.scrollToRow(index) }}>
                    {/* 高亮类名： index-active */}
                    < span className={index === activeIndex ? "index-active" : ""}> {item === "hot" ? "热" : item.toUpperCase()}</span >
                </li >
            ))
        )
    }
    // 滚动城市列表让对应索引高亮
    onRowsRendere = ({ startIndex }) => {
        if (startIndex !== this.state.activeIndex) {
            this.setState({
                activeIndex: startIndex
            })
        }
    }
    render() {
        return (
            <div className="citylist" >
                <div className="citylist-nav">
                    <NavHander>城市列表</NavHander>
                </div>
                {/* 城市列表 */}
                <AutoSizer>
                    {
                        ({ width, height }) => (
                            <List
                                ref={this.listRef}
                                width={width}
                                height={height - 45}
                                // 有多少行
                                rowCount={this.state.cityIndex.length}
                                scrollToAlignment="start"
                                // 每行的高度 50 + 多少行数据*  
                                rowHeight={this.getRowHeight}
                                rowRenderer={this.rowRenderer}
                                onRowsRendered={this.onRowsRendere}
                            />
                        )
                    }

                </AutoSizer>
                <ul className="city-index">
                    {
                        this.renderCityIndex()
                    }
                </ul>

            </div>
        )
    }
}
export default CityList