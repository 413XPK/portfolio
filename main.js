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

const seventhDiv = document.getElementById('seventh');

const eighthDiv = document.getElementById('eighth');

const ninthDiv = document.getElementById('ninth');

function fsShow() {
  if (secondDiv.style.display === 'none') {
    firstDiv.style.display = 'block';
    secondDiv.style.display = 'block';
    thirdDiv.style.display = 'block';
    fourthDiv.style.display = 'block';
    fifthDiv.style.display = 'block';
    sixthDiv.style.display = 'block';
    seventhDiv.style.display = 'block';
    eighthDiv.style.display = 'block';
    ninthDiv.style.display = 'block';
  } else {
    firstDiv.style.display = 'block';
    secondDiv.style.display = 'none';
    thirdDiv.style.display = 'block';
    fourthDiv.style.display = 'none';
    fifthDiv.style.display = 'none';
    sixthDiv.style.display = 'none';
    seventhDiv.style.display = 'none';
    eighthDiv.style.display = 'none';
    ninthDiv.style.display = 'none';
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
    seventhDiv.style.display = 'block';
    eighthDiv.style.display = 'block';
    ninthDiv.style.display = 'block';
  } else {
    firstDiv.style.display = 'none';
    secondDiv.style.display = 'none';
    thirdDiv.style.display = 'none';
    fourthDiv.style.display = 'none';
    fifthDiv.style.display = 'block';
    sixthDiv.style.display = 'block';
    seventhDiv.style.display = 'none';
    eighthDiv.style.display = 'none';
    ninthDiv.style.display = 'none';
  }
}

function uxuiShow() {
  if (firstDiv.style.display === 'none') {
    firstDiv.style.display = 'block';
    secondDiv.style.display = 'block';
    thirdDiv.style.display = 'block';
    fourthDiv.style.display = 'block';
    fifthDiv.style.display = 'block';
    sixthDiv.style.display = 'block';
    seventhDiv.style.display = 'block';
    eighthDiv.style.display = 'block';
    ninthDiv.style.display = 'block';
  } else {
    firstDiv.style.display = 'none';
    secondDiv.style.display = 'block';
    thirdDiv.style.display = 'none';
    fourthDiv.style.display = 'block';
    fifthDiv.style.display = 'none';
    sixthDiv.style.display = 'none';
    seventhDiv.style.display = 'none';
    eighthDiv.style.display = 'none';
    ninthDiv.style.display = 'none';
  }
}

const filterDivs = document.querySelectorAll('.filters a');

function illShow() {
  if (firstDiv.style.display === 'none') {
    firstDiv.style.display = 'block';
    secondDiv.style.display = 'block';
    thirdDiv.style.display = 'block';
    fourthDiv.style.display = 'block';
    fifthDiv.style.display = 'block';
    sixthDiv.style.display = 'block';
    seventhDiv.style.display = 'block';
    eighthDiv.style.display = 'block';
    ninthDiv.style.display = 'block';
    
  } else {
    firstDiv.style.display = 'none';
    secondDiv.style.display = 'block';
    thirdDiv.style.display = 'none';
    fourthDiv.style.display = 'none';
    fifthDiv.style.display = 'none';
    sixthDiv.style.display = 'none';
    seventhDiv.style.display = 'block';
    eighthDiv.style.display = 'block';
    ninthDiv.style.display = 'block';
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
const directoryMenu = document.querySelector('.directory');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    directoryMenu.classList.add('activated');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    directoryMenu.classList.remove('activated');
    menuOpen = false;
  }
});

// Persistent toggle for filter buttons: clicking a filter div
// toggles an `.active` class so the box-shadow stays until clicked again.
function _initFilterToggle() {
  // target the inner divs (these have the inline onclick handlers in HTML)
  const filterDivs = document.querySelectorAll('.filters a');
  // if (!filterDivs || filterDivs.length === 0) return;
  filterDivs.forEach((d) => {
    // d.style.cursor = 'pointer';
    d.addEventListener('click', function (e) {
      // single-select behavior: clicking one filter makes it the only active one
      if (this.classList.contains('active')) {
        // clicking the already-active filter toggles it off
        this.classList.remove('active');
        return;
      }
      // remove active from all, then activate the clicked one
      filterDivs.forEach((other) => other.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _initFilterToggle);
} else {
  _initFilterToggle();
}
