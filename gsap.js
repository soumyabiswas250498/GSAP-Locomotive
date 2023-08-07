gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector('#scroll'),
  smooth: true,
});

locoScroll.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy('#scroll', {
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

  pinType: document.querySelector('#scroll').style.transform
    ? 'transform'
    : 'fixed',
});

ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

ScrollTrigger.refresh();

//  ----------------- backup ----------------

// // gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector('.scroll'),
//   smooth: true,
// });

// locoScroll.on('scroll', ScrollTrigger.update);

// ScrollTrigger.scrollerProxy('.scroll', {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },

//   pinType: document.querySelector('.scroll').style.transform
//     ? 'transform'
//     : 'fixed',
// });

// // ------------------locomotive only----------
// // const scroll = new LocomotiveScroll({
// //   el: document.querySelector('#scroll'),
// //   smooth: true,
// // });

// // ----scrolltrigger----------
// gsap.from(' #box1', {
//   scale: 0,
//   delay: 1,
//   duration: 1,
//   rotate: 360,
// });
// gsap.from(' #box2', {
//   x: '45vw',
//   scrollTrigger: {
//     trigger: '#page2 #box2',
//     scrolller: '.scroll',
//     markers: true,
//     start: 'top 100%',
//     end: 'top 50%',
//     scrub: 1,
//   },
// });
// gsap.from('#page3 #box3', {
//   scale: 0,
//   delay: 1,
//   duration: 1,
//   rotate: 360,
// });

// ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

// ScrollTrigger.refresh();

// // gsap.to('#box', {
// //   x: 10,
// //   duration: 0.2,
// //   delay: 0,
// //   //   backgroundColor: 'rgb(69, 165, 255)',
// //   //   rotate: 360,
// //   stagger: 5,
// //   repeat: -1,
// //   yoyo: true,
// //   yoyoEase: true,
// // });
// // gsap.from('#box', {
// //   x: 0,
// //   duration: 2,
// //   delay: 0.5,
// // });
// // gsap.fromTo(
// //   '#box',
// //   { x: 0, duration: 2, delay: 0.5, backgroundColor: 'rgb(69, 255, 215)' },
// //   { x: 700, duration: 2, delay: 0.5, backgroundColor: 'rgb(69, 165, 255)' }
// // );

// /*
// let tl = gsap.timeline();
// tl.to('#box', {
//   x: '50.25vw',
//   duration: 1,
//   delay: 0.5,
// });
// tl.to('#box', {
//   x: '49.75vw',
//   duration: 0.1,
//   delay: 0,
//   //   backgroundColor: 'rgb(69, 165, 255)',
//   //   rotate: 360,
//   stagger: 5,
//   repeat: -1,
//   yoyo: true,
//   yoyoEase: true,
// });
// */

// not working

gsap.to(
  '#page2 #box',
  {
    rotate: 360,
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: '#page2 #box',
      scrolller: '#main',
      start: 'top 100%',
      end: 'top 50%',
      markers: true,
      scrub: true,
    },
  },
  0
);

// working
gsap.to(
  '#page2 #box',
  {
    rotate: 360,
    ease: 'power1.inOut',
    scrollTrigger: {
      trigger: '#page2 #box',
      scroller: '#main',
      start: 'top 100%',
      end: 'top 50%',
      markers: true,
      scrub: true,
    },
  },
  0
);
