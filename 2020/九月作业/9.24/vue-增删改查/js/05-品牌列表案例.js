let vm = Vue.createApp({
    data() {
        return {
            id: '',
            name: '',
            // 关键字
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
        addData() {
            let o = {
                id: this.id,
                name: this.name,
                ctime: new Date().toLocaleDateString(),
            }
            this.brandlist.push(o)
            console.log(this.eachData());

        },
        eachData() {
            // 循环数组用关键字查找
            let result = this.brandlist.filter((value)=> {
                return value.name.includes(this.keydata)
            })
            //    查找结果返回  
            return result
        },
        // 传入参数id
        clearData(id){
            // 用id查找索引  findindex方法
            let index = this.brandlist.findIndex((item)=>{
                return item.id == id
            })
            this.brandlist.splice(index,1)
        }
    }
}).mount('#app')



/*
// 二

let vm = createApp({
    data() {
        return {
            id: '',
            name: '',
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
        // 添加功能
        
    }
}).mount('#app')
*/