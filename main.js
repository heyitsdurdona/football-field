const elBall = document.querySelector('#ball');
const elSound = document.querySelector('#kickSound');
const elBody = document.body;

const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

const randomX = Math.random() * (viewportWidth - elBall.offsetWidth);
const randomY = Math.random() * (viewportHeight - elBall.offsetHeight);
elBall.style.left = `${randomX}px`;
elBall.style.top = `${randomY}px`;

elBody.addEventListener('click', function(evt) {
    elSound.play();
    const {x, y} = evt;
    elBall.style.left = `${x - elBall.width / 2}px`;
    elBall.style.top = `${y - elBall.height / 2}px`;    

});