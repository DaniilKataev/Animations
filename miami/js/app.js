const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    // adaptive
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        // от 680px ширина экрана
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
})

const sliderBG = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
    slidesPerView: 3.5,
    spaceBetween: 60
})

sliderMain.controller.control = sliderBG;

document.querySelectorAll('.slider__item').forEach((item, _, items) => {
    item.addEventListener('click', () => {
        items.forEach(item2 => item2.classList.remove('opened'))
        item.classList.toggle('opened');
    })
})

let desc = document.querySelector('.description')

sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})