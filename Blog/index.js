window.onload = function () {
    $().getClassName('member').hover(function () {
        $(this).css('background', 'url("images/arrow2.png") no-repeat 60px center');
        $().getTagName('ul').show();
    }, function () {
        $(this).css('background', 'url("images/arrow.png") no-repeat 60px center');
        $().getTagName('ul').hide();
    });
};