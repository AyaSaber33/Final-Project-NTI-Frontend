const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el))

$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
        items : 5,
        nav : true,
        navText : ['<i class="fa-solid fa-chevron-left"></i>' , '<i class="fa-solid fa-chevron-right"></i>'],
        autoplay : true,
        autoplayTimeout : 3000,
        autoplayHoverPause : true,
        rewind : true,
    }
  );
});