let scroll_button = document.querySelector('.scroll_button');

window.addEventListener('scroll', () => {
   let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

   if(windowScroll >= 750) {
   	  scroll_button.classList.add('show');
   } else {
   	  scroll_button.classList.remove('show');
   }
});

scroll_button.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   });
});