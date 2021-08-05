import React, { Component } from 'react'

import FilterTitle from '../FilterTitle'
import FilterPicker from '../FilterPicker'
// import FilterMore from '../FilterMore'
// 获取定位城市
import getCurrentCity from "../../../../utils/getCurrectCity/getCurrectCity"
// 发请求
import { httpGet } from '../../../../utils/axios/http'
import { HomeAPI } from '../../../../api'

import styles from './index.module.css'

export default class Filter extends Component {
  state = {
    // 标题状态(是否高亮)
    titleSelectedStatus: {
      area: false,
      mode: false,
      price: false,
      more: false
    },
    // 定义opType用来标识打开FilterPicker的标志
    opType: "",
    // 筛选条件数据
    filterData: {}
  }
  // FilterTitle中传入的方法,点击标题高亮
  onFilterTitle = (type) => {
    // console.log(type);
    this.setState({
      titleSelectedStatus: {
        ...this.state.titleSelectedStatus,
        [type]: true
      },
      opType: type,

    })
  }
  // 点击菜单取消按钮隐藏遮罩层
  onCancel = () => {
    // 隐藏遮罩层
    this.setState({
      // opType用于判断菜单内容是否显示
      opType: ""
    })
  }
  // 点击菜单确认按钮隐藏遮罩层
  onOk = () => {
    this.setState({
      // opType用于判断菜单内容是否显示
      opType: ""
    })
  }
  async componentDidMount() {
    // 获取当前城市
    const { value } = await getCurrentCity()
    // 发请求获取菜单数据、
    const res = await httpGet(HomeAPI.condition, { id: value })
    this.setState({
      filterData: res.body
    })
    console.log(this.state.filterData);
  }
  // 渲染筛选菜单方法
  renderFilterPicker = () => {
    const { opType, filterData: { area, subway, rentType, price } } = this.state
    // 不渲染FilterPicker
    if (opType !== "area" && opType !== "mode" && opType !== "price") {
      return null
    }
    let data = null
    let cols = 1
    switch (opType) {
      case "area":
        data = [area, subway]
        cols = 3
        break;
      case "mode":
        data = rentType
        break;
      case "price":
        data = price
        break;
      default:
        break;
    }
    return <FilterPicker
      data={data}
      cols={cols}
      onCancel={this.onCancel}
      onOk={this.onOk}
    />
  }

  render() {
    const { titleSelectedStatus, opType } = this.state
    return (
      <div className={styles.root}>
        {/* 前三个菜单的遮罩层 */}
        {opType === "area" || opType === "mode" || opType === "price" ? <div className={styles.mask} onClick={this.onCancel} /> : null}
        {/* <div className={styles.mask} /> */}

        <div className={styles.content}>
          {/* 标题栏 */}
          <FilterTitle titleSelectedStatus={titleSelectedStatus} onClick={this.onFilterTitle} />

          {/* 前三个菜单对应的内容： */}
          {this.renderFilterPicker()}

          {/* 最后一个菜单对应的内容： */}
          {/* <FilterMore /> */}
          {/* {opType === "area" || opType === "mode" || opType === "price" ? <FilterMore /> : null} */}
        </div>
      </div>
    )
  }
}
