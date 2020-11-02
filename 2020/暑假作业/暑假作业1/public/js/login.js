
  $('.login').on('click', function (e) {
    // 阻止提交按钮的默认行为
    e.preventDefault();
    // // 检测用户名或密码框是否为空
    if ($('#username').val() === '' || $('#password').val() === '') {
      alert('请完整填写表单');
      return;
    }
    let username = $('#username').val()
    // 通过ajax将用户名和密码发送给服务端处理
    $.ajax({
      type : 'POST',
      url : '/admin/login',
      data :{ 
        username : $('#username').val(),
        password : $('#password').val()
      },
      success : function (result) {
        if(result.code==500){
          alert (result.message);
        }else if(result.code==200){
              // 登录成功，跳转到index.html
              location.href = '/list';
        }
      }
    });
  });
