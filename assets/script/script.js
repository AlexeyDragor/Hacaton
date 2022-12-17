document.addEventListener('DOMContentLoaded', function () {
    // инициализация слайдера
    var slider = new SimpleAdaptiveSlider('.slider', {
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
});

const changeBackground = document.querySelector('.logo__change')
const heroChange = document.querySelector('.hero')
const heroText = document.querySelector('.hero__subtitle')



changeBackground = addEventListener('click', () => {
    heroChange.style.background = 'url("https://w-dog.ru/wallpapers/10/15/311409234468799/priroda-noch-zima-sneg-rozhdestvo-gorod-ogni-novyj-god.jpg") no-repeat center/cover'
    heroText.style.color = "white"

})
