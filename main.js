const elBall = document.querySelector('#ball');
const elSound = document.querySelector('#kickSound');
const elBody = document.body;

const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

const randomX = Math.random() * (viewportWidth - elBall.offsetWidth);
const randomY = Math.random() * (viewportHeight - elBall.offsetHeight);
elBall.style.left = `${randomX}px`;
elBall.style.top = `${randomY}px`;


let rotation = 0;

elBody.addEventListener('click', function(evt) {
    elSound.play();
    elBall.classList.add('rotating');
    const {x, y} = evt;
    elBall.style.left = `${x -40}px`;
    elBall.style.top = `${y - 40}px`;   
    
    elBall.style.transform = `rotate(${getRandomNumber(rotation)}deg)`
});

function getRandomNumber(old) { 
    if (old == 360){
        rotation =0;
        return rotation;
    }
    else{
        rotation = 360;
        return rotation;
    }
}
