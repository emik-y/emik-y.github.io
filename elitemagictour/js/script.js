window.addEventListener("load",function(e){var n=document.querySelector("form .search_button"),o=document.querySelector("form .search"),r=document.querySelector(".nav .menu1"),t=document.querySelector(".nav .menu2"),l=document.querySelector(".nav .menu3"),i=document.querySelector("#burger"),a=document.querySelector("#main_menu");n.addEventListener("click",function(e){o.style.display="inline-block",r.style.display="none",t.style.display="none",l.style.display="none"}),i.addEventListener("click",function(e){a.style.display="block"}),$(".header .slider").owlCarousel({items:1,loop:!0}),$(".section_offers .slider").owlCarousel({items:1,loop:!0}),$(".section_review .slider").owlCarousel({items:1,loop:!0,nav:!0,navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']})});
//# sourceMappingURL=script.js.map