var that
class Tab {
    constructor(id) {
        that = this
        // 获取元素
        this.main = document.querySelector(id)
        this.add = this.main.querySelector('.tabadd')
        // 获取ul
        this.ul = this.main.querySelector('ul')
        this.tabscon = this.main.querySelector(".tabscon")
        // 获取删除按钮
        // 页面加载完成就调用init()方法
        this.init()
    }
    // 初始化
    init() {
        this.updateTab()
        // 添加事件
        this.add.onclick = this.addTab;
        // 循环给所有li添加点击事件
        for (var i = 0; i < this.lis.length; i++) {
            // 点击切换功能
            this.lis[i].onclick = this.toggleTab;
            // 给li添加index属性保存索引
            this.lis[i].index = i
            // 删除功能
            this.btn[i].onclick = this.removeTab;
            // 编辑功能
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    // 封装一个方法获取所有li
    updateTab() {
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.btn = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('ul li span:first-child')

    }
    // 排他思想清除所有li样式
    clearTab() {
        for (var i = 0; i < that.lis.length; i++) {
            that.lis[i].className = ''
            that.sections[i].className = ''
        }
    }
    // 切换功能
    toggleTab() {
        that.clearTab()
        // 给当前的li添加样式
        this.className = 'liactive'
        // console.log(this.index);
        that.sections[this.index].className = 'conactive'
    }


    // 添加功能
    addTab() {
        that.clearTab()
        let random = parseInt(Math.random() * 10)
        let li = `<li class="liactive"><span>测试中${random}</span><span class="iconfont icon-guanbi"></span></li>`
        let section = `<section class="conactive">测试中${random}</section`
        that.ul.insertAdjacentHTML('beforeend', li);
        that.tabscon.insertAdjacentHTML('beforeend', section)
        that.init()
    }
    // 删除功能
    removeTab(e) {
        // 阻止冒泡
        e.stopPropagation()
        // 获取对应li的index
        let index = this.parentNode.index
        //    删除当前的li
        this.parentNode.remove()
        // 删除li对应section
        that.sections[index].remove()
        // 判断点击前有选中状态则不执行
        if(document.querySelector('.liactive')) return
        // index--;
        // // 调用点击事件
        // that.lis[index]&&that.lis[index].click()   //判断index是否为负
        if(index == 0){
            index++
        }else if(index<0){
            return
        }else{
            index--
        }
        that.lis[index]&&that.lis[index].click() 
        that.init()
    }
    // 编辑功能
    editTab(){
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); 

        let str = this.innerHTML;
        this.innerHTML = '<input type = "text">'
        let input = this.children[0]
        input.value = str
        input.select()
        // 失去焦点
        input.onblur = function(){
            this.parentNode.innerHTML = this.value
        }
        // 键盘事件
        input.onkeyup = function(e){
            if(e.keyCode === 13){
                this.blur()

            }
        }
    }
}
// 实例化
new Tab('#tab')