const acc_btns = document.querySelectorAll(".accardion__header");
const acc_contents = document.querySelectorAll(".accardion__body");
console.log(acc_btns);
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
