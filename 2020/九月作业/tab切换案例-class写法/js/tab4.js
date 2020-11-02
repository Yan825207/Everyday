var that
class Tab {
    constructor(id) {
        that = this
        // 获取元素
        this.main = document.querySelector(id)
        this.add = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('ul')
        this.tabscon = this.main.querySelector('.tabscon')
        this.init()
    }
    // 初始化
    init() {
        // 循环给每个li添加点击事件
        this.updataNode()
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].onclick = this.toggleTab;
            // 给li添加属性，保存index
            this.lis[i].index = i
            this.remove[i].onclick = this.moverTab
            this.spans[i].ondblclick = this.editTab   
            this.sections[i].ondblclick = this.editTab
        }
    }
    // 获取动态元素
    updataNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('ul li span:first-child')
   
    }
    // 切换功能
    toggleTab() {
        that.clearTab();
        this.className = 'liactive'
        that.sections[this.index].className = 'conactive'
        that.init()
    }
    // 排他
    clearTab() {
        for (var i = 0; i < that.lis.length; i++) {
            that.lis[i].className = ''
            that.sections[i].className = ''
        }
    }
    // 添加功能
    addTab(){
        that.clearTab()
        let data = parseInt(Math.random()*10)
        let li = `<li class="liactive"><span>测试${data}</span><span class="iconfont icon-guanbi"></span></li>`
        let section = `<section class="conactive">测试${data}</section>`
        that.ul.insertAdjacentHTML('beforeend',li);
        that.tabscon.insertAdjacentHTML('beforeend',section);
        that.init()
    }
    // 删除功能
    moverTab(e){
        e.stopPropagation();
        this.parentNode.remove();
        let index = this.parentNode.index
        that.sections[index].remove()
        if(document.querySelector('.liactive')) return
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
        let str = this.innerHTML
        this.innerHTML = '<input type="text">'
        let input = this.children[0]
        input.value = str
        input.select()
        input.onblur=function(){
            this.parentNode.innerHTML = this.value
        }
        input.onkeyup = function(e){
            if(e.keyCode === 13){
                this.blur()
            }
        }
    }
}
// 实例化对象
new Tab('#tab')
