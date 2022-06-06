'use strict'
$(function() {
  // 윈도우 로드 완료시 #load 숨김 처리
  // 상단바 open class 추가
  // mouseover 이벤트
  $('.gnb1').mouseover(function() {
    $('#top-gnb').addClass('open');
    $('.searchBox').removeClass('open');
    $('.langList').slideUp();
    colorChangeFunc('#top-gnb', 'open');
    // $('.gnb2').css('display', 'inline-block');
  })
  $('.gnb1').mouseout(function() {
    $('#top-gnb').removeClass('open');
    colorChangeFunc('#top-gnb', 'open');
    // $('.gnb2').css('display', 'none');
  });

  $('.gnb1 li').each(function() {
    $(this).mouseover(function() {
      $(this).addClass('on');
    });
    $(this).mouseout(function() {
      $(this).removeClass('on');
    });
  });
  // 사이드메뉴
  // open class 추가
  $('.sideBtn').click(function() {
    $('.sideGnb').addClass('open');
    $('.right-box').css('visibility', 'hidden');
    setTimeout(function() {
      $('.langList').slideUp();
      $('.searchBox').removeClass('open');
    }, 500);
  });
  $('.closeBtn').click(function() {
    $('.sideGnb').removeClass('open');
    $('.right-box').css('visibility', 'visible');
  });

  // 모바일 gnb open
  $('.mBtn').click(function() {
    $('#m-gnb').addClass('open');
    $('.header-wrap, .header-box, .right-box').css('visibility', 'hidden');
    // $('.header-wrap').css('visibility', 'hidden');
    // $('.right-box').css('visibility', 'hidden');
    setTimeout(function() {
      $('.searchBox').removeClass('open');
    }, 500);
  });
  $('.closeBtn').click(function() {
    $('#m-gnb').removeClass('open');
    $('.header-wrap, .header-box, .right-box').css('visibility', 'visible');
  });

  // 모바일 gnb 슬라이드
  $('.m-gnb1 > li > a').click(function() {
    let isAni = $('.m-gnb1 > li .m-gnb2').is(':animated');
    if(!isAni) {
      if($('+.m-gnb2', this).css('display') == 'none') {
        $('.m-gnb1 > li').removeClass('active');
        $(this).parent().addClass('active');
        $('.m-gnb1 > li .m-gnb2').slideUp('slow');
        $('+.m-gnb2', this).slideDown('slow');
      } else {
        $('+.m-gnb2', this).slideUp('slow');
      }
    }
  });
  // .inner mouseover
  let downloadEl = $('.sideGnb .sideinner .inner .sideGnb1 li:last-child .inner a');
  downloadEl.mouseover(function() {
    $(this).css('background', '#3268bf');
    $('span', this).css('color', '#fff');
    $('img', this).css('filter', 'invert(1)');
  }).mouseout(function() {
    $(this).css('background', 'none');
    $('span', this).css('color', '#000');
    $('img', this).css('filter', 'invert(0)');
  });
  // 검색창 클릭 이벤트
  $('.openSearch').on('click', function() {
    $('.searchBox').toggleClass('open');
    $('.langList').slideUp();
    $('.langList').css('z-index', 99);
    colorChangeFunc('.searchBox', 'open');
  });
  function colorChangeFunc(el, name) {
    if($(el).hasClass(name)) {
      $('.header-box').css('background', '#fff');
      $('#top-gnb .gnb1 > li > a, .openBtn, .arrow-icon').css('color', '#000');
      $('.search-icon img').css('filter', 'invert(0)');
      $('.sideBtn span').css('background', '#000');
    } else {
      if($('.header-wrap').hasClass('fixed') == false) {
        $('.header-box').css('background', 'none');
        $('#top-gnb .gnb1 > li > a, .openBtn, .arrow-icon').css('color', '#fff');
        $('.search-icon img').css('filter', 'invert(1)');
        $('.sideBtn span').css('background', '#fff');
      }
    }
  }

  // 상단바 langList click 이벤트 slide 적용
  $('.langBtn').click(function() {
    $('.langList').slideToggle();
  })

  // 스크롤 반응 영역
  $(window).scroll(function() {
    let wHeight = $(window).height();
    let scrTop = $(this).scrollTop();

    // 상단바 반응 영역 (스크롤 한번 내려가면 상단바 흰색으로 고정, top-btn 숨기기)
    if($(this).scrollTop() != 0) {
      $('.header-wrap').addClass('fixed');
      colorChangeFunc('.header-wrap', 'fixed');
      $('.header-box').css('background', 'none');
      $('.footer-inner .top-btn').addClass('on');
    } else {
      $('.header-wrap').removeClass('fixed');
      colorChangeFunc('.header-wrap', 'fixed');
      $('.header-box').css('background', 'none');
      $('.footer-inner .top-btn').removeClass('on');
    }

    // move 반응 영역
    $('.sec').each(function() {
      let thisOffset = $(this).offset();
      if(scrTop >= thisOffset.top - 200 && scrTop < thisOffset.top + wHeight) {
        $(this).addClass('on');
        $(this).find('.title-box').addClass('move');
        // $(this).find('.left').addClass('move');
        // $(this).find('.right').addClass('move');
        $(this).find('.cnt-inner').addClass('move');
        // $(this).find('.stock').addClass('move');
        // $(this).find('.nation-box').addClass('move');
        $(this).find('.cnt-box').addClass('move');
      }
    });

    // 섹션1 반응 영역
    $('.business').find('.con').each(function() {
      let thisOffset = $(this).offset();
      if(scrTop >= thisOffset.top - 500 && scrTop < thisOffset.top + 500) {
        $(this).find('.left').addClass('move');
        $(this).find('.right').addClass('move');
      }
    });

    // 섹션2 반응 영역
    $('.about').find('.left').each(function() {
      let thisOffset = $(this).offset();
      if(scrTop >= thisOffset.top - 500 && scrTop < thisOffset.top + 500) {
        $(this).addClass('move');
      }
    });
    if(scrTop >= $('.stock').offset().top - 500) {
      $('.stock').addClass('move');
    }

    // 섹션3 반응 영역
    if(scrTop >= $('.global').offset().top + 100) {
      $('.global').addClass('on');
      $('.global').find('.nation-box').addClass('move');
    }

    // 서브섹션 반응 영역
    if(scrTop >= $('.recruit').offset().top - 500) {
      $('.recruit').find('.left').addClass('move');
      $('.recruit').find('.right').addClass('move');
    }

    // 라인 배경 반응 영역
    $('.sec').find('.clip').each(function() {
      let thisOffset = $(this).offset();
      if(scrTop >= thisOffset.top - 500 && scrTop < thisOffset.top + 500) {
        $(this).addClass('move');
      }
    });
  });

  // 메인화면 유투브 영상을 배경으로 사용(JQuery.mb.YTPlayer 사용)
  // https://urliveblogger.blogspot.com/2021/01/jquery-mb-YTplayer.html 참고
  $('#bg-video').YTPlayer();

  // 메인화면 rotate-icon circle의 strock-dashoffset 줄이기
  let strDashOffset = parseInt($('circle').css('stroke-dashoffset'));
  setInterval(strDashOffset);
  setInterval(function(num) {
    if(strDashOffset == 0) {
      strDashOffset = 339;
      setTimeout(function() {}, 1000);
    } else {
      strDashOffset--;
      $('circle').css('stroke-dashoffset', `${strDashOffset}px`);
    }
  }, 50);

  // span.word 인덱스붙이고 delay 넣기
  wordDelayFunc('.txt-box', 1); // 메인
  wordDelayFunc('.business .inner', 0); // 섹션1
  wordDelayFunc('.about .inner', 0); // 섹션2
  wordDelayFunc('.global .inner', 0); // 섹션3
  wordDelayFunc('.news .inner', 0); // 섹션4

  // word의 span에 delay 적용하기
  function wordDelayFunc(el, num) {
    let thisIdx = 0;
    $(el).find('.word').find('span').each(function() {
      $(this).css('--char-index', thisIdx).css('animation-delay', `${num + (0.03 * thisIdx)}s`);
      thisIdx++;
    });
  }

  // 섹션1 business에 동영상 넣기
  $('#sec1-video1').YTPlayer();
  $('#sec1-video2').YTPlayer();

  // 섹션2 about의 count 반응 영역
  let cntNum = $('.about .price');
  function commaNum(num) { // 콤마 넣는 함수
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 세자리수 마다 숫자에 콤마넣는 정규식 사용
  }
  cntNum.prop('Counter', 0).animate({Counter: $(cntNum).text()}, {
    duration: 5000, // 지속시간 5초
    easing: 'swing', // 애니메이션 효과 방식
    step: function(now) { // 애니메이션 과정을 받아와 콜백함수 적용
      let nowNum = commaNum(Math.ceil(now)); // now를 반올림한 뒤 콤마넣는 함수 적용
      $(cntNum).text(nowNum); // html에 넣어줌
    }
  });

  // 섹션4 news 영역 .news-bottom p의 글자수 체크 영역(ellipsis)
  $('.news-bottom p').each(function() {
    let elem = $(this);
    let content = elem.text();
    const showTextLeng = 80;
    let lessText = content.substr(0, showTextLeng);
    if(content.length > showTextLeng) {
      elem.text(`${lessText}…`);
    }
  });

  // 섹션4 news 영역 li에 delay 적용하기
  listDelayFunc('.news-box', 0);

  function listDelayFunc(el, num) {
    let thisIdx = 0;
    $(el).find('.news-li').each(function() {
      $(this).css('--char-index', thisIdx).css('transition-delay', `${num + (0.2 * thisIdx)}s`);
      thisIdx++;
    });
  }

  // 푸터영역 왼쪽박스 family-box 서브리스트 on 클래스 toggle
  $('.family-open').click(function() {
    $(this).toggleClass('on');
    $('.family-list').slideToggle();
    $(this).find('a').click(function() {
      return false;
    });
  });

  // 푸터영역 오른쪽박스 input 체크시 css 적용
  let checked = 0;
  $('#footer .check-box, #footer label').click(function() {
    if (checked == 0) {
      $('#footer input').attr('checked', true);
      checked = 1;
      $('#footer .f-right .check-box').find('img').css('filter', 'opacity(.6) drop-shadow(0 0 0 #03ff70)');
    } else if (checked == 1) {
      $('#footer input').attr('checked', false);
      checked = 0;
      $('#footer .f-right .check-box').find('img').css('filter', 'none');
    }
  });

  // 푸터영역 top-btn 클릭시 맨 위로 이동
  $('.footer-inner .top-btn a').click(function() {
    let thisHash = $(this.hash);
    $('html, body').stop();
    $('html, body').animate({scrollTop: thisHash.offset().top}, 1500);
    return false;
  });

});
