let vm = Vue.createApp({
    data() {
        return {
            id: '',
            name: '',
            keydata: '',
            brandlist: [{
                    id: 1,
                    name: "奔驰",
                    ctime: new Date().toLocaleDateString(),
                },
                {
                    id: 2,
                    name: "宝马",
                    ctime: new Date().toLocaleDateString(),
                },
                {
                    id: 3,
                    name: "长安奔奔",
                    ctime: new Date().toLocaleDateString(),
                },
                {
                    id: 4,
                    name: "千里马",
                    ctime: new Date().toLocaleDateString(),
                },
            ],
        }
    },
    methods: {
        // 添加
        addData() {
            console.log(555);
            //    将数据保存道数组中
            let obj = {
                id: this.id,
                name: this.name,
                ctime: new Date().toLocaleDateString(),
            };
            //    添加到数组中
            this.brandlist.push(obj)
            // console.log(this.brandlist);
            console.log(this.eachData());
        },
        //    收索&渲染
        eachData() {
            // 循环数组按关键字查找
            let result = this.brandlist.filter((value) => {
                return value.name.includes(this.keydata)
            })
            // 返回符合条件的数组
            return result
        },
        // 删除
        clearData(id){
            // 判断id 查找索引
            let index = this.brandlist.findIndex((value)=>{
                return value.id == id
            })
            this.brandlist.splice(index,1)
        }
    }
}).mount('#app')