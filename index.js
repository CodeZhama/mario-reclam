const acc_btns = document.querySelectorAll(".accardion__header");
const acc_contents = document.querySelectorAll(".accardion__body");
acc_btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    btn.classList.toggle("active");
    const acc_body = btn.nextElementSibling;

    if (btn.classList.contains("active")) {
      acc_body.classList.toggle("active");
      acc_body.style.maxHeight = acc_body.scrollHeight + "px";
    } else {
      acc_body.classList.remove("active");
      acc_body.style.maxHeight = 0;
    }
  });
});

// Coutdown time//
const daysDiv = document.getElementById("days");
const minuteSpan = document.getElementById("minute__id");
const secondySpan = document.getElementById("secondy__id");

let dets = new Date("sep 1, 2022 10:00:00").getTime();

let time = setInterval(function () {
  let nowTime = new Date().getTime();

  let days = Math.floor((dets - nowTime) / (1000 * 60 * 60 * 24));
  let minutes = Math.floor(((dets - nowTime) % (1000 * 60 * 60)) / (1000 * 60));

  let secondy = Math.floor(((dets - nowTime) % (1000 * 60)) / 1000);
  daysDiv.innerText = days;
  minuteSpan.innerText = minutes;
  secondySpan.innerText = secondy;
}, 1000);

function sliderFunc() {
  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
   
  });
}
sliderFunc();
