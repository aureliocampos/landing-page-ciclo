jQuery.event.special.touchstart = {
  setup: function( _, ns, handle ){
      this.addEventListener("touchstart", handle, { passive: true });
  }
};

$('.solutions-info__items').slick({
  prevArrow:
  '<button class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg></button>',
  nextArrow:
  '<button class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></button>',
});