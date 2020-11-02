$(function () {
    $('.addbtn').click(function () {
        let formdata = $('#add-form').serialize();
        console.log(formdata);
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