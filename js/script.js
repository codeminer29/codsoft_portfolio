const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:100, origin:'right'})
sr.reveal('.home-img',{delay:100, origin:'left'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:100, origin:'bottom'})

      
var mode = document.getElementById("mode");
      mode.onclick = function(){
        document.body.classList.toggle("dark-mode");
}

const logo = document.getElementById("logo");
mode.addEventListener("click", function() {
  if (logo.src.endsWith("/img/logo1.png")) {
    logo.src = "/img/logo2.png";
  } else {
    logo.src = "/img/logo1.png";
  }
});
