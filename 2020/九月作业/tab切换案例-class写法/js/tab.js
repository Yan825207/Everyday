var that
class Tab{
    constructor(id){
        that = this
        // 获取数据
        this.main = document.querySelector(id)
        this.add = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('ul')
        this.tabscon = this.main.querySelector('.tabscon')
        this.init()
    }
    init(){
        this.updataNode()
        this.add.onclick = this.addTab
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].onclick = this.toggleTab;
            this.lis[i].index = i;
            this.removes[i].onclick = this.removeTab
            this.spans[i].ondblclick = this.editTab
        }
    }
    // 获取动态元素
    updataNode(){
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.removes = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('ul li span:first-child')
    }
    // 切换
    toggleTab(){
       that.clearTab();
       this.className = 'liactive';
       that.sections[this.index].className = 'conactive'
    //    that.init(    )
    }
    // 清除选中状态 (排他)
    clearTab(){
        for(var i=0;i<that.lis.length;i++){
            that.lis[i].className = ''
            that.sections[i].className = ''
        }
    }
    // 添加
    addTab(){
        let data = parseInt(Math.random()*10)
        that.clearTab();
        let li = `<li class="liactive"><span>测试${data}</span><span class="iconfont icon-guanbi"></span></li>`
        let section = `<section class="conactive">测试${data}</section>`
        that.ul.insertAdjacentHTML('beforeend',li);
        that.tabscon.insertAdjacentHTML('beforeend',section)
        that.init()
    }
    // 删除
    removeTab(e){
        e.stopPropagation();
        let index = this.parentNode.index
        this.parentNode.remove()
        that.sections[index].remove();
        if(document.querySelector('.liactive')) return
        if(index == 0){
            index++
        }else{
            index--;
        }
        that.lis[index]&&that.lis[index].click()
        that.init()

    }
    // 编辑
    editTab(){
        let str = this.innerHTML
        console.log(str);
        this.innerHTML ='<input type ="text">'
        let input = this.children[0];
        input.value = str ;   
        input.select();
        input.onblur = function(){
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function(e){
            if(e.keyCode === 13){
                this.blur()
            }
        }
    }
}
new Tab('#tab')