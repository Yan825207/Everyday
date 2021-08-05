import React from 'react'

import { TabBar, } from 'antd-mobile';
// 路由
import { HashRouter } from "react-router-dom"
import { renderRoutes } from "react-router-config"

class App extends React.Component {
  // 设置状态
  state = {
    // 当前路径
    selectedTab: this.props.history.location.pathname,
    isTabbar: true,
    tarbar: [{
      title: "首页",
      icon: 'icon-ind',
      path: "/home"
    },
    {
      title: "找房",
      icon: 'icon-findHouse',
      path: "/findhouse"
    },
    {
      title: "资讯",
      icon: 'icon-infom',
      path: "/news"
    },
    {
      title: "我的",
      icon: 'icon-my',
      path: "/my"
    }]
  }
  componentDidMount() {
    this.setState({
      isTabBar: !this.props.location.pathname.includes("/home") && !this.props.location.pathname.includes("/findhouse") && !this.props.location.pathname.includes("/news") && !this.props.location.pathname.includes("/profile")
    });
  }
  componentDidUpdate(prevProps) {
    // 判断tabBar是否显示

    const prePath = prevProps.location.pathname;
    const curPath = this.props.location.pathname
    // 保存当前路径
    if (prePath !== curPath) {
      this.setState({
        selectedTab: curPath,
        isTabBar: !this.props.location.pathname.includes("/home") && !this.props.location.pathname.includes("/findhouse") && !this.props.location.pathname.includes("/news") && !this.props.location.pathname.includes("/profile")
      })
    }


  }
  render() {
    return (
      <HashRouter>
        <div className="App">
          {renderRoutes(this.props.route.children)}
          <div className="tabbar">
            <TabBar
              hidden={this.state.isTabBar}
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              tabBarPosition="bottom"
            >
              {
                this.state.tarbar.map(item => (
                  <TabBar.Item
                    title={item.title}
                    key={item.path}
                    icon={<i className={`iconfont ${item.icon}`}></i>}
                    selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
                    selected={item.path === this.state.selectedTab}
                    onPress={() => { this.props.history.push(item.path) }}
                  >
                  </TabBar.Item>
                ))
              }
            </TabBar>
          </div>
        </div>
      </HashRouter>

    );
  }

}

export default App;
