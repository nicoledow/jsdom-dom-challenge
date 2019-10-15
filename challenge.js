const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const heartButton = document.getElementById('heart');
let counter = document.getElementById('counter');
let currentCount = parseInt(counter.innerText, 10);
const likeCounts = {}
const likes = document.querySelector('ul.likes');

function count() {
    currentCount += 1
    counter.innerText = `${currentCount}`
    showLikes(currentCount)
  }

function showLikes() {
    if (likeCounts[currentCount]) {
      likes.innerHTML = `<p> ${likeCounts[currentCount]} </p>`
    } else {
        likes.innerHTML = `<p> 0 likes </p>`
    }
 }

plusButton.addEventListener('click', () => {
  currentCount += 1;
});

minusButton.addEventListener('click', () => {
    currentCount -= 1;
  });

heartButton.addEventListener('click', () => {
  if (likeCounts[currentCount]) {
    likeCounts[currentCount] += 1
  } else {
    likeCounts[currentCount] = 1
  }
});

document.addEventListener("DOMContentLoaded", () => {
    window.setInterval(count, 1000);
  });

