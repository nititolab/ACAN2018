$(function() {
    var $win = $(window),
    $win_width = $win.width();

    // PC閲覧時には、スクロールに合わせてサイドメニューを固定化する
    if($win_width > 768){
        var $sidenav = $('#navbar-sidemenu'),
        navHeight = $sidenav.outerHeight(),
        navWidth = $sidenav.outerWidth(),
        navPosY = $sidenav.offset().top,
        navPosX = $sidenav.offset().left,
        fixedClass = 'is-fixed';
  
        $win.on('load scroll', function() {
        var value = $(this).scrollTop();
        if (value > navPosY ) {
            $sidenav.css({
                'position': 'fixed',
                'left'    : navPosX,
                'top'     : 0,
                'width'   : navWidth,
            });
        } else {
            $sidenav.css({
                'position': '',
                'left'    : '',
                'top'     : '',
                'width'   : '',
            });
        }
        })
    }
  });

$(function() {
  // スクロールのオフセット値
  var offsetY = -10;
  // スクロールにかかる時間
  var time = 500;

  // ページ内リンクのみを取得
  $('a[href^=#]').click(function() {
    // 移動先となる要素を取得
    var target = $(this.hash);
    if (!target.length) return ;
    // 移動先となる値
    var targetY = target.offset().top+offsetY;
    // スクロールアニメーション
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    // ハッシュ書き換えとく
    window.history.pushState(null, null, this.hash);
    // デフォルトの処理はキャンセル
    return false;
  });
});

           
$(function() {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
           topBtn.fadeIn();
       } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({scrollTop: 0}, 500);
           return false;
       });
   });

