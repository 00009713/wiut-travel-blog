// Animation with slides

const slides = document.querySelectorAll('.slide');

observer = new IntersectionObserver(entries => {

    console.log(entries);

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = 'slide-animation 0.5s forwards ease-out';
        } else {
            entry.target.style.animation = 'none';
        }
    });

});

slides.forEach(slide => {
    observer.observe(slide);
});

// Dark mode

const bwButton = document.querySelector('#bwButton');
const mapBase = document.querySelector('.map-base');
const mapBorder = document.querySelector('.map-border');

bwButton.addEventListener("click", () => {
    bwButton.classList.toggle('active');
    if (bwButton.classList.contains('active') === true) {
        document.documentElement.style.setProperty('--main-color', 'black');
        document.documentElement.style.setProperty('--color-invert', 'invert(0%)');
        document.documentElement.style.setProperty('--backgroud-color', 'white');
        document.documentElement.style.setProperty('--font-weight', 'normal');
        mapBase.style.display = 'block';
        mapBorder.style.display = 'none';
    } else {
        document.documentElement.style.setProperty('--main-color', 'white');
        document.documentElement.style.setProperty('--color-invert', 'invert(100%)');
        document.documentElement.style.setProperty('--backgroud-color', 'black');
        document.documentElement.style.setProperty('--font-weight', 'lighter');
        mapBase.style.display = 'none';
        mapBorder.style.display = 'block';
    }
});
