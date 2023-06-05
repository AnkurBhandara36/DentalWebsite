let flag = 0;

slideShow(flag);

function slideShow(num) {
  const show = document.getElementsByClassName("images");

  if (num == show.length) {
    flag = 0;
    num = 0;
  }

  if (num < 0) {
    flag = show.length - 1;
    num = show.length - 1;
  }

  for (let h of show) {
    h.style.display = "none";
  }

  show[num].style.display = "flex";
}

function control(x) {
  flag = flag + x;
  slideShow(flag);
}
