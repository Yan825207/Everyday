
import { NavBar } from "antd-mobile";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types"
const NavHander = ({ children, history }) => {
    return (
        <NavBar
            // className={NavHeaderStyle.navBar}
            mode="light"
            icon={<i className="iconfont icon-back"></i>}
            onLeftClick={() => {

                history.go(-1)
            }}
        >{children}</NavBar>
    )
}
NavHander.propTypes = {
    children: PropTypes.string.isRequired,
    onLeftClick: PropTypes.func,
}

export default withRouter(NavHander)