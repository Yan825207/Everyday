// 获取当前定位城市
import {
    httpGet
} from '../../utils/axios/http'
import {
    HomeAPI
} from "../../api"
// 封装获取和设置localStorage的方法
import {
    getItem,
    setItem
} from "../myStorage/myStorage"
const getCurrentCity = () => {

    const curcity = getItem()
    // 如果没有
    if (!curcity) {
        return new Promise((resolve) => {
            var myCity = new window.BMap.LocalCity();
            myCity.get(async (result) => {
                const res = await httpGet(HomeAPI.info, {
                    name: result.name
                })
                if (res.status === 200) {
                    // 设置localStorage
                    setItem(res.body)
                    // 返回数据
                    resolve(res.body)
                }
            });
        })
    } else {
        // 有则返回一个proimse对象
        // return new Promise((resolve => {
        //     resolve(curcity)
        // }))
        return Promise.resolve(curcity)
    }

}

export default getCurrentCity