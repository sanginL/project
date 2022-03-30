
// 상품 이미지 마우스오버시 이미지 변경. id를 이용하여 제한함.

window.onload = function() {
  var mainimg = document.getElementById('product_img');
  var subimg = document.getElementById('subproduct_img');

  var mainimg_ = mainimg.getElementsByTagName('img')[0];
  var subimg_ = subimg.getElementsByTagName('img');

  for(var i=0; i < subimg_.length; i++){
    subimg_[i].onmouseover = function(){
      mainimg_.src = this.src;
    }
  }
}