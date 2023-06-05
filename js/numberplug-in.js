let numDisplay = document.querySelectorAll('.num');
let interval = 5000;


numDisplay.forEach((numDisplay) => {
    let startValue = 0;
    let endValue = parseInt(numDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
        startValue += 1;
        numDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter)
        }
    }, duration)
})

