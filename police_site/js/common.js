$(function() {
  // top-nav 클릭이벤트 (open 클래스 추가)
 $('.gnb1 > li').click(function() {
   $('.gnb2').not($('.gnb2', this)).removeClass('open');
   $('.gnb2', this).toggleClass('open');
 });

 // 전체메뉴 버튼 클릭이벤트 (in 클래스 추가)
 $('.nav-box .open_menu').click(function() {
   $('.top-nav').toggleClass('in');
   // if($('.top-nav').hasClass('in')) {
   //   $('#main .black-box').css('display', 'block');
   // } else {
   //   $('#main .black-box').css('display', 'none');
   // }
 })

 // footer01 button 클릭이벤트 (open 클래스 추가)
 $('.footer01 .select').on('click', 'button', function() {
   $('.footer01 .select').not($(this).parent()).removeClass('open');
   $(this).parent().toggleClass('open');
 });

// 푸터의 top 버튼 누르면 상단으로 이동
 $('.top-btn a').click(function() {
   $('html, body').animate({scrollTop: 0}, 1500);
   return false;
 });

 // favorite-link에서 tab 클릭 이벤트 (active 클래스 추가)
 $('.tab-box div a').click(function() {
   let divIdx = $(this).parent().index();
   $('.tab-box div').removeClass('active');
   $(this).parent().addClass('active');
   $('.favorite-link .list-box > li').each(function() {
     if($(this).index() == divIdx) {
       $('.favorite-link .list-box > li').removeClass('active');
       $(this).addClass('active');
     }
   });
   return false;
 });

 // border-items의 뉴스 제목 글자수 제한
 $('.item-li .subject').each(function() {
   let elem = $(this);
   let content = elem.text();
   const showTextLeng = 28;
   let lessText = content.substr(0, showTextLeng);
   if(content.length > showTextLeng) {
     elem.text(`${lessText}…`);
   }
 });

 // .board-items 클릭이벤트 (active 클래스 추가)
 $('.board-items > ul > li > a').click(function() {
   let liIdx = $(this).parent().index();
   if(liIdx == 5) {
     return false; // +버튼은 이벤트 적용 안함
   }
   $('.board-items > ul > li').removeClass('active');
   $(this).parent().addClass('active');
   $('.board-items > ul > li').each(function() {
     if($(this).index() == liIdx) {
       $('.board-items > ul > li .con-box').removeClass('active');
       $(this).find('.con-box').addClass('active');
     }
   });
   return false
 });

 // board-wrap 클래스 내부 글자수 체크
 $('.banner-li .txt-box strong').each(function() {
   let elem = $(this);
   let content = elem.text();
   const showTextLeng = 14;
   let lessText = content.substr(0, showTextLeng);
   if(content.length > showTextLeng) {
     elem.text(`${lessText}…`);
   }
 });
 $('.banner-li .txt-box span').each(function() {
   let elem = $(this);
   let content = elem.text();
   const showTextLeng = 34;
   let lessText = content.substr(0, showTextLeng);
   if(content.length > showTextLeng) {
     elem.text(`${lessText}…`);
   }
 });

 // info-box 클릭이벤트
 let infoLinkArr = ['<li><a href="#"><img src="./img/main/icon/stf/stf_info01.png" alt="경찰공제회"><span>경찰공제회</span></a></li><li><a href="#"><img src="./img/main/icon/stf/stf_info02.png" alt="경찰복지포털"><span>경찰복지포털</span></a></li><li><a href="#"><img src="./img/main/icon/stf/stf_info03.png" alt="경찰전자우편(웹메일)"><span>경찰전자우편<br>(웹메일)</span></a></li><li><a href="#"><img src="./img/main/icon/stf/stf_info06.png" alt="자료이동<br>서비스"><span>자료이동<br>서비스</span></a></li><li><a href="#"><img src="./img/main/icon/stf/stf_info04.png" alt="내부비리신고"><span>내부비리신고</span></a></li><li><a href="#"><img src="./img/main/icon/stf/stf_info05.png" alt="경찰사이버교육포털"><span>경찰사이버교육<br>포털</span></a></li>', '<li><a href="#"><img src="./img/main/icon/pol/pol_info01.png" alt="세입세출현황"><span>세입세출현황</span></a></li><li><a href="#"><img src="./img/main/icon/pol/pol_info02.png" alt="추진과제"><span>추진과제</span></a></li><li><a href="#"><img src="./img/main/icon/pol/pol_info03.png" alt="감사결과"><span>감사결과</span></a></li>'];
 $('.info-box .info-tab li').on('click', 'a', function() {
   let listIdx = $(this).parent().index();
   $('.info-box .info-tab li').removeClass('active');
   $(this).parent().addClass('active');
   $('.info-box .info-link').html($(infoLinkArr[listIdx]));
   return false;
 })
});
