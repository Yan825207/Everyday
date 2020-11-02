// 定义that 保存this
var that 
// 设置类
class Tab{
    // 申明公共属性
    constructor(id){
        that = this
        // 获取元素
        this.main= document.querySelector(id)
        // 获取添加按钮
        this.add = this.main.querySelector('.tabadd')
        // 获取ul
        this.ul = this.main.querySelector('ul')
        // 获取tabscon
        this.tabscon = this.main.querySelector('.tabscon')
        // 获取ul,用于删除元素
        this.ul = this.main.querySelector('ul')
        this.init()
    }
    // 初始化,页面加载完毕就执行
    init(){
        // 调用获取所有li的方法
        this.updataTab()
        // 添加功能
        this.add.onclick = this.addTab;
        // 循环lis 给每个li提娜佳点击事件
        for(var i=0;i<this.lis.length;i++){
            //给li添加index属性保存索引
            this.lis[i].index = i
            // 切换功能点击事件
            this.lis[i].onclick=this.toggleTab;
            // 删除功能点击事件
            this.remove[i].onclick = this.removeTab;
            // 双击编辑事件
            this.spans[i].ondblclick = this.editTab
            that.sections[i].ondblclick = this.editTab
        }
    }
    // 获取动态元素
    updataTab(){
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
    }
    // 切换功能
    toggleTab(){
        that.clearTab();
        // 给点击的li添加选中状态
        this.className = 'liactive'
        that.sections[this.index].className = 'conactive'
    }
    // 排他 清除所有li的选中状态
    clearTab(){
        // 循环清除每个li的选中状态
        for(var i= 0;i<that.lis.length;i++){
            that.lis[i].className = ''
            that.sections[i].className=''
        }
    }
    // 添加功能
    addTab(){ 
        that.clearTab()
        let data = parseInt(Math.random()*10) 
        let li = `<li class="liactive"><span>测试${data}</span><span class="iconfont icon-guanbi"></span></li>`
        let section = `<section class="conactive">测试${data}</section>`
        that.ul.insertAdjacentHTML('beforeend',li)
        that.tabscon.insertAdjacentHTML('beforeend',section);
        that.init()
    }
    // 删除功能en
    removeTab(e){
        // 阻止事件冒泡
        e.stopPropagation()
        let index = this.parentNode.index
        // 删除自己的父元素          remove（） 删除自己
        this.parentNode.remove()
        // 删除对应的section
        that.sections[index].remove()
        // 如果之前选中状态则不执行
        if(document.querySelector('.liactive')) return
        // 删除后一个则让前一个处于选中状态，删除前一个则让后一个处于选中状态,全部删除则不执行代码
        if(index==0){
            index++
        }else if(index<0){
            return 
        }else{
            index--
        }
        // 调用点击事件   如果li为最后一个则不执行点击事件
        that.lis[index]&&that.lis[index].click()
        that.init()
    }
    // 编辑功能
    editTab(){
        // 双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); 
        let str = this.innerHTML
        // 双击添加文本框
        this.innerHTML = '<input type = "text">'
        let input = this.children[0]
        input.value = str
        input.select()
        // 失去焦点
        input.onblur=function(){
            this.parentNode.innerHTML = this.value
        }
        // 键盘事件,回车失去焦点
        input.onkeypress = function(e){
            if(e.keyCode === 13){
                input.blur()
            }
        }
       
    }
}
// 实例化对象
new Tab('#tab')