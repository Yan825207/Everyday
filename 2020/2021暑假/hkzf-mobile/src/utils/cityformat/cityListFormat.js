const cityListFormat = (data) => {
    // console.log(data);
    const cityList = {}
    // [{label: "北京",pinyin: "beijing",short: "bj",value: "AREA|88cff55c-aaa4-e2"}]
    // 转化为一下数据
    // {a:[{label: "北京",pinyin: "beijing",short: "bj",value: "AREA|88cff55c-aaa4-e2"}]}
    data.forEach((item) => {
        //    抽取data中的每条数据的short中的第一个字符
        let fristIndex = item.short.substr(0, 1)
        // 2.判断cityList对象中是否含有某一个字母的键,如果没有则新增，如果有则将item添加到fristIndex中
        if (fristIndex in cityList) {
            cityList[fristIndex].push(item)
        } else {
            cityList[fristIndex] = [item]
        }
    })


    // let cityIndex = []
    // for (const key in cityList) {
    //     cityIndex.push(key.toUpperCase())
    // }
    // // 重新排序
    // cityIndex = cityIndex.sort()
    // 遍历对象的方法   
    const cityIndex = Object.keys(cityList).sort()





    return {
        cityList,
        cityIndex
    }
}

export default cityListFormat