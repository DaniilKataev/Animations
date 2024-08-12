gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// отключаем плавный скролл для мобилок
if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5, 
        effects: true
    })

    gsap.fromTo('.hero-section', {
        // Начальные свойства
        opacity: 1
    }, {
        // конечные при скроле
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '900',
            scrub: true // вернуть как было при скролле вверх
        }
    });

    const itemsL = gsap.utils.toArray('.gallery__left .gallery__item');

    itemsL.forEach(item => {
        gsap.fromTo(item, {
            // Начальные свойства
            x: -500,
            opacity: 0
        }, {
            // конечные при скроле
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true // вернуть как было при скролле вверх
            }
        })
    })

    const itemsR = gsap.utils.toArray('.gallery__right .gallery__item');

    itemsR.forEach(item => {
        gsap.fromTo(item, {
            // Начальные свойства
            x: 500,
            opacity: 0
        }, {
            // конечные при скроле
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: '-100',
                scrub: true // вернуть как было при скролле вверх
            }
        })
    })

   
}
