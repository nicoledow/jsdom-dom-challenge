const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const heartButton = document.getElementById('heart');
let counter = document.getElementById('counter');
let currentCount = parseInt(counter.innerText, 10);
let counting = true;
const likes = document.querySelector('p.likes');
const likesCounts = {}
const pauseButton = document.getElementById('pause');

function count() {
    if (counting === true) {
    currentCount += 1
    counter.innerText = `${currentCount}`
    likes.innerText = `${likesCounts[currentCount] || 0} likes`
    }
  }

function addLike(num) {
    if (likesCounts[num]) {
        likesCounts[num] += 1;
    } else {
        likesCounts[num] = 1;
    }
}

function pause() {
    if (pauseButton.innerText === "pause") {
        pauseButton.innerText = "unpause";
        counting = false;
        plusButton.disabled = true;
        minusButton.disabled = true;
        heartButton.disabled = true;
    } else {
        pauseButton.innerText = "pause"
        counting = true;
        plusButton.disabled = false;
        minusButton.disabled = false;
        heartButton.disabled = false;
    }
}

plusButton.addEventListener('click', () => {
  currentCount += 1;
});

minusButton.addEventListener('click', () => {
    currentCount -= 1;
  });

heartButton.addEventListener('click', addLike(currentCount));

pauseButton.addEventListener('click', pause);

document.addEventListener("DOMContentLoaded", () => {
    window.setInterval(count, 1000);
  });

