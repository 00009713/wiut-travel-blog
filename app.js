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

