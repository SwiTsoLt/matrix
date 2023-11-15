gsap.registerPlugin(ScrollTrigger);

smoothScroll();
smoothElemScroll();
intMainSectionBackground();

const items = gsap.utils.toArray('.left > img');

items.forEach((item) => {
  gsap.fromTo(item, {x: -500, opacity: 0}, {
    x: 0, opacity: 1,
    scrollTrigger: {
      trigger: item,
      start: '-500',
      end: '400',
      scrub: true,
    },
  });
});
