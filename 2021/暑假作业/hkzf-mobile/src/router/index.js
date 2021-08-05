import FindHouse from "../pages/Findhouse";
import Home from "../pages/Home";
import News from "../pages/News";
import My from "../pages/My";
import Search from "../pages/Search"
import Map from "../pages/Map"
import CityList from "../pages/Citylist"
import {
    Redirect
} from "react-router-dom";
import App from "../App";
const routes = [
    // 重定向
    {
        path: "/",
        component: App,

        children: [{
                path: "/",
                exact: true,
                render: () => ( <
                    Redirect to = {
                        "/home"
                    }
                    />
                ),
            },
            // 首页
            {
                path: "/home",
                component: Home
            },
            // 找房
            {
                path: '/findhouse',
                component: FindHouse
            },
            // 资讯
            {
                path: '/news',
                component: News
            },
            // 我的
            {
                path: '/my',
                component: My
            },
            {
                path: "/search",
                component: Search
            },
            {
                path: "/map",
                component: Map
            },
            {
                path: "/citylist",
                component: CityList
            }
        ]
    },

]

export default routes