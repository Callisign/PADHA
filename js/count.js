let nums = document.querySelectorAll(".numbers .num");
let section = document.querySelector(".count-js");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 10);
}
