$(function() {
  // console.log($('body'));
  // console.log(window.location.href);
  // console.log($(location).attr('href'));
  /*
  #lnb의 메뉴와 같은 서브페이지의 주소값을 매칭하여
  해당 메뉴에 on class 추가하기
  */
  /*
  // 내 풀이
  let locaHref = $(location).attr('href');
  let hrefArr = locaHref.split('/');
  let hrefLeng = hrefArr.length;
  let hrefVal = `../${hrefArr[hrefLeng - 2]}/${hrefArr[hrefLeng - 1]}`;
  console.log(hrefVal);
  $('#lnb ul li').each(function() {
    if($('a', this).attr('href') == hrefVal) {
      $('a', this).addClass('on');
    }
  });
  */

  // 강사님 풀이
  let currentHref = splitlocation($(location));
  $('#lnb a').each(function() {
    if(splitlocation($(this)) == currentHref) {
      $(this).addClass('on');
    }
  });
  /*
  실습
  location href split 코드에서 공통부분을 함수화하기
  */
  function splitlocation(el) {
    let eltHref = el.attr('href').split('/');
    eltHref = eltHref[eltHref.length - 1].split('.');
    eltHref = eltHref[0];
    return eltHref
  }

  // accordion
  $(".accordion dd:not(:first)").css({
    "display": "none",
    "height": 0
  });
  let isAni = $("dd").is(":animated");

  $(".accordion  dl dt").click(function() {
    let thisEl = $(this);
    if (!isAni) {
      if ($("+dd", thisEl).css("display") == "none") {
        $(".accordion dd").each(function() {
          if (parseInt($(this).css("height")) == 300) {
            $(this).animate({
              height: 0
            }, 300, function() {
              $(this).css("display", "none");
            })
          }
        })
        $("+dd", thisEl).css("display", "block").animate({
          height: 300
        }, 1500);
      }
    }
  });

  // 맨 위에서 스크롤 내려오면 header-box에 on 클래스 추가
  let wHeight = $(window).height();
  $(window).scroll(function() {
    let thisScrTop = $(this).scrollTop();
    if(thisScrTop != 0) {
      $('.header-box').addClass('on');
    } else if(thisScrTop == 0) {
      $('.header-box').removeClass('on');
    }
  })

  // 메인배너 list 반응

});
