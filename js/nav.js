/* on top*/
$('.btn_top').on('click', function(e) {
  e.preventDefault();

  $('html').stop().animate({scrollTop:0}, 800);
});

/* nav-fix-scroll */
let $nav     = $('.nav_fix_scroll .nav_item'),
      $contents = $('section'),
      $doc      = $('html, body');
  $(function () {
    // 해당 섹션으로 스크롤 이동
    $nav.on('click','a', function(e){
      let $target = $(this).parent(),
          idx     = $target.index(),
          section = $contents.eq(idx),
          offsetTop = section.offset().top;
      $doc.stop()
              .animate({
                  scrollTop :offsetTop
              }, 800);
      return false;
    });
  });

  // menu class 추가
  $(window).scroll(function(){
      let scltop = $(window).scrollTop();
      $.each($contents, function(idx, item){
          let $target   = $contents.eq(idx),
              i         = $target.index(),
              targetTop = $target.offset().top;

          if (targetTop <= scltop) {
              $nav.removeClass('active');
              $nav.eq(idx).addClass('active');
          }
      })

  });