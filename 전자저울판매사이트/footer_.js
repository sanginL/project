$(document).ready(function() {
    let html_temp = `
    <div class="main_footer">
    <div class="company">
      <a href="#">기업소개</a>
    </div>
    <div class="representative">
      대표이사 : 이명우
    </div>
  </div>
  <div class="cs">
    <div class="cs_center">cs center</div>
    <div>
      <li>문의사항</li>
      <li>010-1111-1111</li>
    </div>
    <div>
      <li>문의시간</li>
      <li>월~토</li>
      <li>09:00 ~ 18:00</li>
    </div>
    <div><li><a href="https://open.kakao.com/o/sAKQqn8d">카카오톡 문의</a></li></div>
  </div>
  <div class="bank_info">
    <div>bank info</div>
    <div class="bank_number">
      <li>농협</li>
      <li>110-110392031</li>
    </div>
  </div>
      `
    $("#foot").append(html_temp)
})