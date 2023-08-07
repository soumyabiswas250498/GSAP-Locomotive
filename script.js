// ------------------locomotive only----------
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true,
// });

gsap.registerPlugin(ScrollTrigger);

function loco(scrollSelector) {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(scrollSelector),
    smooth: true,
  });

  locoScroll.on('scroll', ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(scrollSelector, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector(scrollSelector).style.transform
      ? 'transform'
      : 'fixed',
  });

  ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

  ScrollTrigger.refresh();
}
loco('#main');

// ----scrolltrigger----------
gsap.from('#page1 #box', {
  scale: 0,
  delay: 1,
  duration: 1,
  rotate: 360,
});

gsap.from('#page2 #box', {
  scale: 0,
  ease: 'power1.inOut',
  scrollTrigger: {
    trigger: '#page2 #box',
    scroller: '#main',
    start: 'top 100%',
    end: 'top 50%',
    markers: true,
    scrub: true,
  },
});

gsap.from('#page3 #box', {
  scale: 0,
  delay: 1,
  duration: 1,
  rotate: 360,
});
