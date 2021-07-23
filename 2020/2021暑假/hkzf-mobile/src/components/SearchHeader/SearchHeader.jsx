import { Flex } from "antd-mobile";
import { withRouter } from "react-router-dom";
import styles from "./SearchHeader.module.css"
import { PropTypes } from "prop-types"
const SearchHeader = ({ history, cityName }) => {
    return (
        <Flex className={[styles.searchBox, 'search-box'].join(" ")}>
            <Flex className={styles.searchLeft}>
                <div className={styles.location} onClick={() => { history.push("/citylist"); }}>
                    <span>{cityName}</span>
                    <i className="iconfont icon-arrow" />
                </div>
                <div className={styles.searchForm} onClick={() => { history.push("/search"); }}>
                    <i className="iconfont icon-seach" />
                    <span>请输入小区或地址</span>
                </div>
            </Flex>
            <i className="iconfont icon-map" onClick={() => { history.push("/map"); }} />

        </Flex>
    )
}

SearchHeader.propTypes = {
    cityName: PropTypes.string.isRequired
}
export default withRouter(SearchHeader)