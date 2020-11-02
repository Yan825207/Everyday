$(function () {
    $('.addbtn').click(function () {

        let formdata = $('#add-form').serialize();
        // if ($('#modify-form input[name=username]').val())

        $.ajax({
            type: 'POST',
            url: "/addUser",
            data: formdata,
            success: function (result) {
                console.log(result);
                if (result.code == 200) {
                    location.href = '/'
                }
            }
        })
    })

})