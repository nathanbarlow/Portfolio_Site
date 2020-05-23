

// I know that the code could be better.
// If you have some tips or improvement, please let me know.
// https://codepen.io/RenanB/pen/GZeBNg

$(document).ready(function(){
  parallaxImg();
});
$(document).scroll(function(){
  parallaxImg();
});


function parallaxImg() {
  var windowHeight = $(window).height();
  var parallaxElements = document.getElementsByClassName('parallax-image');

  for (var i = 0; i < parallaxElements.length; i++) {
    var speed = parallaxElements[i].getAttribute("speed");

    var elementPosition = parallaxElements[i].getBoundingClientRect();
    var elementHeight = elementPosition.bottom - elementPosition.top;
    var elementMidpoint = (elementHeight / 2) + elementPosition.top;
    var positionPercent = elementMidpoint / (windowHeight);
    positionPercent = (positionPercent-0.5) * speed + 0.5;

    // Adjust image position
    newPositionPercent = Math.round(Math.min(Math.max(positionPercent * 100,0),100),0);
    parallaxElements[i].style.backgroundPosition = "50% " + newPositionPercent + "%";

    // $("#textChange").text("50% " + newPositionPercent + "%");
  }
}







// object.style.backgroundPosition


//
//
// $('.img-parallax').each(function(){
//   var img = $(this);
//   var imgParent = $(this).parent();
//
//   function parallaxImg () {
//     var speed = img.data('speed');
//     var imgY = imgParent.offset().top;
//     var winY = $(this).scrollTop();
//     var winH = $(this).height();
//     var parentH = imgParent.innerHeight();
//
//
//     // The next pixel to show on screen
//     var winBottom = winY + winH;
//
//     // If block is shown on screen
//     if (winBottom > imgY && winY < imgY + parentH) {
//       // Number of pixels shown after block appear
//       var imgBottom = ((winBottom - imgY) * speed);
//       // Max number of pixels until block disappear
//       var imgTop = winH + parentH;
//       // Porcentage between start showing until disappearing
//       var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
//     }
//     img.css({
//       top: imgPercent + '%',
//       transform: 'translate(-50%, -' + imgPercent + '%)'
//     });
//   }
//
//   $(document).on({
//     scroll: function () {
//       parallaxImg();
//     }, ready: function () {
//       parallaxImg();
//     }
//   });
// });
