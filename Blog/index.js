var LOGIN_WIDTH = 350;
var LOGIN_HEIGHT = 250;

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
    var screen = $().getId('screen');
    login.center(LOGIN_WIDTH, LOGIN_HEIGHT).resize(function () {
        login.center(LOGIN_WIDTH, LOGIN_HEIGHT);
        if(login.css('display') == 'block') {
            screen.lock();
        }
    });
    $().getClassName('login').click(function () {
        login.css('display', 'block');
        screen.lock();
    });
    $().getClassName('close').click(function () {
        login.css('display', 'none');
        screen.unlock();
    });


};