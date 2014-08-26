window.onload = function () {

    //个人中心下拉菜单
    $().getClassName('member').hover(function () {
        $(this).css('background', 'url("images/arrow2.png") no-repeat 60px center');
        $().getClassName('member_ul').show();
    }, function () {
        $(this).css('background', 'url("images/arrow.png") no-repeat 60px center');
        $().getClassName('member_ul').hide();
    });

    //登录框
    var login = $().getId('login');
    login.center(350, 250).resize(function () {
        login.center(350, 250);
    });
    $().getClassName('login').click(function () {
        login.css('display', 'block');
    });
    $().getClassName('close').click(function () {
        login.css('display', 'none');
    });
};