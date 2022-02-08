

let currentDegrees = 0;
let tailsCount = 0;
let headsCount = 0;
let isFlipping = false;
let heads = true;
let audio = document.querySelector('audio');
function flip() {
  result.innerHTML = '';
    if (isFlipping) return;

    coin.classList.add("flipping");
    result.classList.remove("new");
    result.classList.remove("pulse");
    
    isFlipping = true;
    const random = Math.floor(Math.random() * 4 + 9); 
   // audio.play();
    //audio.currentTime = 1;
    currentDegrees += 180 * random;

    if (currentDegrees % 360 === 0) {
        heads = true;
    } else {
        heads = false;
    }

    coin.style.transform = `rotateX(${currentDegrees}deg)`;

    setTimeout(() => {
      //audio.pause();
      //audio.currentTime = 1;
      result.classList.add("new");
      result.classList.add("pulse");
      console.log
      result.innerHTML = heads ? 'Heads' : 'Tails';
        isFlipping = false;
        coin.classList.remove("flipping");
    }, 3000);
}