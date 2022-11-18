const hf = gsap.timeline();

hf.from('.container', {
  duration: 1.2,
  y: -350,
  height: 0,
  opacity: 0,
  ease: 'power3.inOut',
})
  .from('nav', {
    delay: -0.2,
    y: -16,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.inOut',
  })
  .from(['.products_details h2', '.products_details p', '.price'], {
    delay: -0.2,
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.easeInOut',
    stagger: {
      amount: 0.3,
    },
  })
  .from('.shadow', {
    delay: -0.4,
    x: 20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  })
  .from('h1', {
    delay: -0.4,
    x: -20,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  })
  .from(['.btn'], {
    delay: -0.2,
    x: -40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.ease',
    stagger: {
      amount: 0.3,
    },
  })
  .from('.footer', {
    delay: -0.2,
    y: 16,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.inOut',
  });
