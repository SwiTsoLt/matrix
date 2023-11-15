const matrixElem = document.querySelector('.matrix');

for (let i = 0; i < 5; i++) {
  const rowElem = document.createElement('div');
  rowElem.classList.add('row');

  for (let j = 0; j < 10; j++) {
    const matrixElem = document.createElement('div');
    matrixElem.classList.add('elem');
    matrixElem.style.backgroundColor = `rgb(0, ${255 - j * 12}, ${j * 12})`;
    // matrixElem.innerText = (i + 1) * (j + 1);
    rowElem?.appendChild(matrixElem);
  }

  matrixElem?.appendChild(rowElem);
}

function getRand() {
  return Math.round(Math.random() * 200 - 100);
}

function headerMatrixAnim() {
  const duration = 1200 + 400 * 8;

  anime({
    targets: '.matrix .row .elem',
    innerText: [getRand(), getRand(), getRand(), getRand()],
    round: 1,
    easing: 'easeInOutExpo',
    duration: duration,
  });

  anime({
    targets: '.matrix .row .elem',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200},
    ],
    delay: anime.stagger(400, {grid: [10, 5], from: 'center'}),
  });

  setInterval(() => {
    anime({
      targets: '.matrix .row .elem',
      scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200},
      ],
      delay: anime.stagger(400, {grid: [10, 5], from: 'center'}),
    });
  }, duration);

  setInterval(() => {
    anime({
      targets: '.matrix .row .elem',
      innerText: [getRand(), getRand(), getRand(), getRand()],
      round: 1,
      easing: 'easeInOutExpo',
      duration: duration,
    });
  }, duration);
}


function headerArrowbottomAnim() {
  anime({
    targets: '.anim-arrow-bottom',
    translateY: [
      {value: 20, easing: 'easeInOutQuad', duration: 800},
      {value: 0, easing: 'easeInOutQuad', duration: 1400},
    ],
  });

  setInterval(() => {
    anime({
      targets: '.anim-arrow-bottom',
      translateY: [
        {value: 20, easing: 'easeInOutQuad', duration: 800},
        {value: 0, easing: 'easeInOutQuad', duration: 1400},
      ],
    });
  }, 2300);
}


function mainSectionAnim() {
  gsap.fromTo('.hero-header', {
    opacity: 1,
  }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero-header',
      start: 'center',
      end: 820,
      scrub: true,
    },
  });
}

function intMainSectionBackground() {
  const elems = document.querySelector('.main-bg');

  if (!elems) return;

  const elems_count = elems.clientHeight > window.innerHeight ?
    (elems.clientHeight / window.innerHeight) * 250 :
    250;

  for (let i = 0; i < elems_count; i++) {
    const newElem = document.createElement('div');
    newElem.classList.add('el');
    elems.appendChild(newElem);
  }

  setInterval(() => {
    const rand = Math.floor(Math.random() * elems_count);
    elems.childNodes[rand].classList.add('active');
    setTimeout(() => {
      elems.childNodes[rand].classList.remove('active');
    }, 1000);
  }, 300);
}
