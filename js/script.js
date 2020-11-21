// navbar scrolling effect
$('.page-scroll').on('click', function (e) {
    
   // ambil isi href
   var tujuan = $(this).attr('href');
   
   // tangkap elemen ybs
   var elemenTujuan = $(tujuan);
   
   // pindahkan scroll
   $('html, body').animate({
    scrollTop: elemenTujuan.offset().top - 50
   }, 1000, 'easeInOutExpo');

   e.preventDefault();
});
// scrolling effect

// overlay portfolio
const portfolio = document.querySelector('.portfolio')
const thumbnail = portfolio.querySelectorAll('.img-thumbnail');
const overlay = portfolio.querySelector('.overlay');
const close = overlay.querySelector(' .close');


thumbnail.forEach(function (e) {
   e.addEventListener('click', function () {
      const imageOverlay = overlay.querySelector('img');
      imageOverlay.src = e.src;
      overlay.classList.toggle('active');
   });
});

close.addEventListener('click', function () {
   overlay.classList.toggle('active');
});
// Akhir overlay portfolio

// parallax

// about
$(window).on('load', function () {
   $('.pKiri').addClass('pShow');
   $('.pKanan').addClass('pShow');
   $('.pTengah').addClass('pShow');

})


$(window).scroll(function () {
   // jumbotron
   const wScroll = $(this).scrollTop();
   
   $('.jumbotron img').css({
      'transform' : 'translate(0px, '+ wScroll/4 +'%)'
   });

   $('.jumbotron h1').css({
      'transform' : 'translate(0px, '+ wScroll/2 +'%)'
   });

   $('.jumbotron p').css({
      'transform' : 'translate(0px, '+ wScroll/2.3 +'%)'
   });

   // portfolio
   if ( wScroll > $('.portfolio').offset().top - 500) {
      $('.portfolio .img-thumbnail').each(function (i) {
         setTimeout(function () {
            $('.portfolio .img-thumbnail').eq(i).addClass('show');
         }, 200 * (i+1));
      });
   };
   
   if( wScroll < $('.portfolio').offset().top - 500 ){
      $('.portfolio .img-thumbnail').removeClass('show');
   };
});

