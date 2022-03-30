let product_ = ['고속계량라벨부착기', 'WM-AISP + PS-AI Series', 'WM-AISP Series', 'UNI-5L Series', 'UNI-CAP Series'];
let img_ = ["고속계량라벨부착기.jpg", "WM-AISP+PS-AI_Series.jpg", "WM-AISP_Series.jpg",  "UNI-5L_Series.jpg", "UNI-CAP_Series-4.jpg"];
let product_con = ['빠른 속도와 최첨단 기술을 사용한 라벨부착기','제조 라인형 자동Wrap포장기기', '계량, Wrap포장, 라벨부착. 3가지 작업을 한번에 해결','보급형 라벨프린팅 저울', '고급형 라벨프린팅저울.'];
$(document).ready(function() {
  for (let i = 0; i < 0; i++) {
    let html_temp = `
    <div class="product-list">
<div class="product-box${i+1}" style="width: 220px; height: 400px; margin: 16.5px; border: 1px solid rgba(0, 0, 0, 0.2);" ><a href="product_${i+1}.html">
  <div class="img-box">
    <img src=${img_[i]} alt="">
  </div>
  <div class="text-box">
    <div class="product_name" style="text-align : center; margin-bottom: 5px;">${product_[i]}</div>
    <div class= "product_con" style="font-size : 12px; text-align : center;">${product_con[i]}</div>
  </div></a>
</div>
</div>
      `
    $("#name-list").append(html_temp)
  }
})