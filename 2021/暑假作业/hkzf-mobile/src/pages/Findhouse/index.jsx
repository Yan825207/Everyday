import React from "react"
import SearchHeader from "../../components/SearchHeader/SearchHeader"
import { Flex } from "antd-mobile"
import "./FindHouse.css"
import { withRouter } from "react-router"
import getCurrentCity, { } from "../../utils/getCurrectCity/getCurrectCity"
import Filter from "./components/Filter"
class CityList extends React.Component {
    state = {
        cityName: ""
    }
    async componentDidMount() {

        // 获取当前城市
        const { label } = await getCurrentCity();
        this.setState({
            cityName: label
        })
    }
    render() {
        return (
            <div className="find-house">
                <Flex className="search-nav">
                    <i
                        className="iconfont icon-back"
                        onClick={() => this.props.history.go(-1)}
                    />
                    <SearchHeader cityName={this.state.cityName}></SearchHeader>
                </Flex>
                <Filter></Filter>
            </div>
        )
    }
}
export default withRouter(CityList)