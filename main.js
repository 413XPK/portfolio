//nav 'work' button scroll

var proj1 = document.querySelector('.workers');
var button = document.querySelector('#work');

button.addEventListener('click', function () {
  proj1.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// works filters

const fsShown = document.getElementById('fs');
const firstDiv = document.getElementById('first');

const jsShown = document.getElementById('js');
const secondDiv = document.getElementById('second');

const animShown = document.getElementById('anim');
const thirdDiv = document.getElementById('third');

const uxuiShown = document.getElementById('uxui');
const fourthDiv = document.getElementById('fourth');

const illShown = document.getElementById('ill');
const fifthDiv = document.getElementById('fifth');

const sixthDiv = document.getElementById('sixth');
function fsShow() {
  if (secondDiv.style.display === 'none') {
    firstDiv.style.display = 'block';
    secondDiv.style.display = 'block';
    thirdDiv.style.display = 'block';
    fourthDiv.style.display = 'block';
    fifthDiv.style.display = 'block';
    sixthDiv.style.display = 'block';
  } else {
    firstDiv.style.display = 'block';
    secondDiv.style.display = 'none';
    thirdDiv.style.display = 'block';
    fourthDiv.style.display = 'none';
    fifthDiv.style.display = 'none';
    sixthDiv.style.display = 'none';
  }
}

function jsShow() {
  if (firstDiv.style.display === 'none') {
    firstDiv.style.display = 'block';
    secondDiv.style.display = 'block';
    thirdDiv.style.display = 'block';
    fourthDiv.style.display = 'block';
    fifthDiv.style.display = 'block';
    sixthDiv.style.display = 'block';
  } else {
    firstDiv.style.display = 'none';
    secondDiv.style.display = 'none';
    thirdDiv.style.display = 'none';
    fourthDiv.style.display = 'none';
    fifthDiv.style.display = 'block';
    sixthDiv.style.display = 'block';
  }
}

// function animShow() {
//   if (firstDiv.style.display === 'none') {
//     firstDiv.style.display = 'block';
//     secondDiv.style.display = 'block';
//     thirdDiv.style.display = 'block';
//     fourthDiv.style.display = 'block';
//     fifthDiv.style.display = 'block';
//   } else {
//     firstDiv.style.display = 'none';
//     secondDiv.style.display = 'block';
//     thirdDiv.style.display = 'none';
//     fourthDiv.style.display = 'none';
//     fifthDiv.style.display = 'none';
//   }
// }

function uxuiShow() {
  if (firstDiv.style.display === 'none') {
    firstDiv.style.display = 'block';
    secondDiv.style.display = 'block';
    thirdDiv.style.display = 'block';
    fourthDiv.style.display = 'block';
    fifthDiv.style.display = 'block';
    sixthDiv.style.display = 'block';
  } else {
    firstDiv.style.display = 'none';
    secondDiv.style.display = 'block';
    thirdDiv.style.display = 'none';
    fourthDiv.style.display = 'block';
    fifthDiv.style.display = 'none';
    sixthDiv.style.display = 'none';
  }
}

function illShow() {
  if (firstDiv.style.display === 'none') {
    firstDiv.style.display = 'block';
    secondDiv.style.display = 'block';
    thirdDiv.style.display = 'block';
    fourthDiv.style.display = 'block';
    fifthDiv.style.display = 'block';
    sixthDiv.style.display = 'block';
  } else {
    firstDiv.style.display = 'none';
    secondDiv.style.display = 'block';
    thirdDiv.style.display = 'none';
    fourthDiv.style.display = 'none';
    fifthDiv.style.display = 'none';
    sixthDiv.style.display = 'none';
  }
}

// carousel & its buttons animate

const gap = 16;

const carousel = document.getElementById('carousel'),
  content = document.getElementById('content'),
  next = document.getElementById('next'),
  prev = document.getElementById('prev');

next.addEventListener('click', (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = 'flex';
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = 'none';
  }
});
prev.addEventListener('click', (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = 'none';
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = 'flex';
  }
});

let width = carousel.offsetWidth;
window.addEventListener('resize', (e) => (width = carousel.offsetWidth));

// nav button animate
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     const navbar = entry.target.querySelector('.nav');

//     if (entry.isIntersecting) {
//       navbar.classList.add('navbar-animation');
//       return; // if we added the class, exit the function
//     }

//     // We're not intersecting, so remove the class!
//     navbar.classList.remove('navbar-animation');
//   });
// });

// observer.observe(document.querySelector('.square-wrapper'));

//navbar frost show

var element = document.querySelector('.nav-activator');
var navbar = element.querySelector('.nav');
if (element.scrollHeight - element.scrollTop === element.clientHeight) {
  navbar.classList.add('active');
} else {
  navbar.classList.remove('active');
}

// jQuery(window).on('scroll', function () {
//   var top = jQuery(window).scrollTop(),
//     divBottom =
//       jQuery('.nav-activator').offset().top +
//       jQuery('.nav-activator').outerHeight();
//   if (divBottom > top) {
//     jQuery('.nav').addClass('active');
//   } else {
//     jQuery('.nav').removeClass('active');
//   }
// });

// const scrolledEl = document.querySelectorAll('.nav-activator');

// function navSlide(e) {
//   scrolledEl.forEach((frostedNav) => {
//     const navbar = document.querySelector('.nav');

//     //halfway through the height
//     const slideInAt =
//       window.scrollY + window.innerHeight - frostedNav.height / 2;

//     //bottom of the element
//     const imageBottom = frostedNav.offsetTop + frostedNav.height;
//     const isHalfShown = slideInAt > frostedNav.offsetTop;
//     const isScrolledPast = window.scrollY > imageBottom;
//     if (isScrolledPast) {
//       navbar.classList.add('active');
//     } else {
//       navbar.classList.remove('active');
//     }
//   });
// }

// window.addEventListener('scroll', debounce(checkSlide));

// document.getElementsByClassName('tap2shop_frame').style.display = 'inline-flex';

// document.getElementById('tap2shop_widget').style.display = 'inline-flex';

// var proj1 = document.querySelector('#proj1');
// var button = document.querySelector('.scroll');

// button.addEventListener('click', function () {
//   proj1.scrollIntoView({ behavior: 'smooth', block: 'center' });
// });

// $(function() {
//     $.scrollify({
//       section : ".main",
//       scrollSpeed : 1000
//     });
//   });

// const inputs = document.querySelectorAll(".input");

// function focusFunc() {
//     let parent = this.parentNode;
//     parent.classList.add("focus");
// }

// function blurFunc() {
//     let parent = this.parentNode;
//     if (this.value == "") {
//         parent.classList.remove("focus");
//     }
// }

// inputs.forEach((input) => {
//     input.addEventListener("focus", focusFunc);
//     input.addEventListener("blur", blurFunc);
// });
