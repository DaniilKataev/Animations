window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})