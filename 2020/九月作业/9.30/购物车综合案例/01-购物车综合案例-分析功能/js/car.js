$(function () {
    // 数据
    var datas = [{
            pName: '牛奶',
            src: './uploads/01.jpg',
            price: 10,
            count: 1
        },
        {
            pName: '三只松鼠',
            src: './uploads/02.jpg',
            price: 30,
            count: 1
        },
        {
            pName: '蓝牙播放器',
            src: './uploads/03.jpg',
            price: 100,
            count: 1
        },
        {
            pName: '大米',
            src: './uploads/04.jpg',
            price: 50,
            count: 1
        },
        {
            pName: '路由器',
            src: './uploads/05.jpg',
            price: 110,
            count: 1
        },
        {
            pName: '罐头',
            src: './uploads/06.jpg',
            price: 20,
            count: 1
        }
    ];

    // 【功能1：生成表格】
    function xr(data) {
        // 循环数组
        let str = ''
        data.forEach(function (value) {
            str += `
            <tr>
            <td>
              <input type="checkbox" name='checkbox'>
            </td>
            <td>
              <img src="${value.src}">
              <p>${value.pName}</p>
            </td>
            <td>
              ${value.price}
            </td>
            <td>
              <div class="count-c clearfix">
                <a href="javascript:" class="reduce disabled">-</a>
                <input type="text" value="${value.count}">
                <a href="javascript:" class="add">+</a>
              </div>
            </td>
            <td>
              ${value.price * value.count}￥

            </td>
            <td>
              <a href="javascript:" class="del">删除</a>
            </td>
    
          </tr>
            `
        })
        $('tbody')[0].innerHTML = str

    }
    xr(datas)

    // 【功能2：全选→点击thead中的复选框时，tbody中的复选框同步变化】
    function qx() {
        let flag = true
        $("#all").click(function () {

            $("input[name='checkbox']").prop("checked", flag);
            flag = !flag
            getsum()
        })

    }
    qx()
    // 【功能3：控制全选→点击tbody中的某一个复选框，控制thead中的复选框是否选中】
    // 循环给每个复选框添加事件
    // 点击事件
    $('tbody input[name="checkbox"]').click(function () {
        // 循环判断每个复选框的状态
        getsum()
        for (var j = 0; j < $('tbody input[name="checkbox"]').length; j++) {
            // 判断如果有未选中的thead中的就不选中
            if ((!$('tbody input[name="checkbox"]').eq(j).prop('checked'))) {
                $('thead input[name="checkbox"]').prop('checked', false);
                return true
            } else {
                // 否则选中
                $('thead input[name="checkbox"]').prop('checked', true)
            }
        }
        // 判断如果复选框处于选中状态则计算总和

    })
    // }
    // // 【功能4：封装计算选中的总数量和总价格】  
    function getsum() {
        let sum = 0
        let price = 0
        // console.log($('.count-c').children('input [name="checkbox"]:checked'));
        // 循环遍历所有商品，传入参数索引，元素
        $('tbody input[name="checkbox"]:checked').each(function (i, ele) {
            sum += parseInt($(this).parents('td').siblings('td').eq(2).children('.count-c').children('input').val())
            // console.log($(this).parents('td').siblings('td').eq(2).children('.count-c').children('input').val());
            // console.log($(this).parents('td').siblings('td').eq(3).text());
            price += parseInt($(this).parents('td').siblings('td').eq(3).text())
        })
        $('#totalCount').html(sum)
        $('#totalPrice').html(price)
    }

    // 【功能5：点击加按钮实现数量递增】
    // 定义变量接受值
    $(".add").click(function (e) {
        e.preventDefault();
        let value = $(this).siblings("input").val() - 0;
        value++;
        $(this).siblings("input").val(value);
        // 获取单价
        let n = $(this).parent().parent().siblings('td').eq(2).text()
        // 小计等于单价乘以数量
        $(this).parent().parent().siblings('td').eq(3).text(value * n)
        // 判断数量是否为一，大于一则不禁用
        if ($(this).siblings('input').val() > 1) {
            $(this).siblings('.reduce').removeClass('disabled')
        } else {
            $(this).siblings('.reduce').attr('disabled', true)
        }
        getsum()
    });
    // 【功能6：点击减按钮实现数量递减】

    $('.reduce').click(function (e) {

        e.stopPropagation()
        //   console.log(555);  
        let value = $(this).siblings('input').val()
        value--
        if (value == 0) {
            $(this).attr('disabled', true)
        } else {
            $(this).siblings('input').val(value)
            let n = $(this).parent().parent().siblings('td').eq(2).text()
            // 小计等于单价乘以数量
            $(this).parent().parent().siblings('td').eq(3).text(value * n)
            getsum()
        }

    })

    // 【功能7：删除单项】

    function remove() {
        // 删除单个
        $('.del').click(function () {
            $(this).parent().parent().remove()
            // console.log($(this).parent().parent());
            if ($('tbody tr').length == 0) {
                $('#all').prop('checked', false)
            }
            getsum()
        });
        $('.del-all').click(function () {
            //删除选中
            $('tbody input[name="checkbox"]:checked').parents('tr').remove()
            if ($('tbody tr').length == 0) {
                $('#all').prop('checked', false)
            }
            getsum()
        })
        // 删除全部
        $('.clear').click(function () {
            $('tbody tr').remove()
            $('#all').prop('checked', false)
            getsum()

        });

    }
    remove()
    // 【功能8：删除所选项】

    // 【功能9：清理购物车】

    // 【功能4：封装计算选中的总数量和总价格】  
    // function getsum() {
    //     // console.log($('input[name="checkbox"]'));
    //     $('input[name="checkbox"]').click(function () {
    //         console.log($('tbody input[name="checkbox"]:checked'));
    //     })
    // }
    // getsum()


})