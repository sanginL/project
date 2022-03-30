$(document).ready(function() {
  let html_temp = `
  <!-- <ul class="bagic_menu"> -->
  <div class="dropdown">
    <div class="dropbtn"><a href="index_1.html">전자저울</a></div>
    <!-- <div class="dropdown-content">
      <a href="product_1.html">1</a>
      <a href="product_2.html">2</a>
      <a href="#">3</a>
    </div> -->
  </div>
  <div class="dropdown">
    <div class="dropbtn"><a href="index_2.html">포장기계</a></div>
    <!-- <div class="dropdown-content">
      <a href="product_1.html">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
    </div> -->
  </div>
  <div class="dropdown">
    <div class="dropbtn"><a href="index_3.html">라벨/기타</a></div>
    <!-- <div class="dropdown-content">
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
    </div> -->
  </div>
  <div class="dropdown">
    <div class="dropbtn"><a href="index_4.html">중고</a></div>
    <!-- <div class="dropdown-content">
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
    </div> -->
  </div>
  <div><a href="#">naver_cafe</a></div>
<!-- </ul> -->
    `
  $("#menu_").append(html_temp)
})