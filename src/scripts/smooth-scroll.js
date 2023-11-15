const body = document.body;
const scrollWrap = document.getElementsByClassName('smooth-scroll-wrapper')[0];
const height = scrollWrap.getBoundingClientRect().height - 1;
const speed = 0.04;

let offset = 0;

body.style.height = Math.floor(height) + 'px';

function smoothScroll() {
  offset += (window.pageYOffset - offset) * speed;

  const scroll = 'translateY(-' + offset + 'px) translateZ(0)';
  scrollWrap.style.transform = scroll;

  smoothElemScroll();

  requestAnimationFrame(smoothScroll);
}

function smoothElemScroll() {
  const elems = document.querySelectorAll('[data-speed]');
  elems.forEach((elem) => {
    let elemOffset = 0;

    const elemSpeed = Number(elem.attributes.getNamedItem('data-speed').value);
    const elementScrollWrap = elem.getBoundingClientRect().height - 1;
    elemOffset = (window.pageYOffset - elementScrollWrap) * elemSpeed;
    const scroll = 'translateY(-' + elemOffset + 'px) translateZ(0)';
    elem.style.transform = scroll;
  });
}
