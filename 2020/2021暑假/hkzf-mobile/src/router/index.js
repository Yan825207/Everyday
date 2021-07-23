import Home from "../pages/Home";
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
        ]
    },

]

export default routes