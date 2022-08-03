const switchBtn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

switchBtn.addEventListener('click', e => {
    if (!switchBtn.classList.contains('slide')){
        switchBtn.classList.toggle('slide');
        video.pause();
    }else{
        switchBtn.classList.toggle('slide');
        video.play();
    }
});

const preloader = document.querySelector('.preloader')
window.addEventListener('load',e => {
    preloader.classList.add('hide-preloader');
});