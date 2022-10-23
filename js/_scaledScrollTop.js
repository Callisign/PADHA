// ======== topZero button ===========
function scaledScrollTop() {

    let scrollProgress = document.getElementById("topZero");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos / calcHeight) * 100);

    if (pos > 180)
    {
        scrollProgress.style.display = "flex";
    }

    else
    {
        scrollProgress.style.display = "none";
    }
    scrollProgress.style.background = `
  conic-gradient(var(--red-color-alt) ${scrollValue}%, var(--red-color-trans) ${scrollValue}%)
  `;
}
