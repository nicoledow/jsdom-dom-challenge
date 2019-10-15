const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const heartButton = document.getElementById('heart');
let counter = document.getElementById('counter');
let currentCount = parseInt(counter.innerText, 10);
const likes = document.querySelector('p.likes');
const likesCounts = {}

function count() {
    currentCount += 1
    counter.innerText = `${currentCount}`
    likes.innerText = `${likesCounts[currentCount] || 0} likes`
  }

function addLike(num) {
    if (likesCounts[num]) {
        likesCounts[num] += 1;
    } else {
        likesCounts[num] = 1;
    }
}


plusButton.addEventListener('click', () => {
  currentCount += 1;
});

minusButton.addEventListener('click', () => {
    currentCount -= 1;
  });

heartButton.addEventListener('click', addLike(currentCount));


document.addEventListener("DOMContentLoaded", () => {
    window.setInterval(count, 1000);
  });

