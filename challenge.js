const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const heartButton = document.getElementById('heart');
const submitButton = document.getElementById('submit');
const pauseButton = document.getElementById('pause');

const commentsList = document.getElementById('comments-list');

let counter = document.getElementById('counter');
let currentCount = parseInt(counter.innerText, 10);
let counting = true;

const likes = document.querySelector('p.likes');
const likesCounts = {}


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
        currentCount = 0;
        counting = true;
        plusButton.disabled = false;
        minusButton.disabled = false;
        heartButton.disabled = false;
    }
}

function createComment() {
    let newComment = document.getElementById('comment-input').value;
    let li = document.createElement('li');
    li.innerText = newComment;
    commentsList.appendChild(li)
}

plusButton.addEventListener('click', () => {
  currentCount += 1;
});

minusButton.addEventListener('click', () => {
    currentCount -= 1;
  });

heartButton.addEventListener('click', addLike(currentCount));

pauseButton.addEventListener('click', pause);

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
})
submitButton.addEventListener('click', createComment);

document.addEventListener("DOMContentLoaded", () => {
    window.setInterval(count, 1000);
  });

