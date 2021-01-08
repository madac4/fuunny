function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
  
  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
  });

$(document).ready(function () {
   $('.burger-menu').click(function () {
    $('.burger-menu, .header-top-links, .header-top-search, .header-bottom-links').toggleClass('active');
    $('body').toggleClass('lock');
});
   $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      infinite: true,
   });
    
});
