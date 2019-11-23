document.querySelectorAll("#burger > aside > ul > li > a").forEach((el, i) => {
  el.addEventListener("click", function() {
    document.querySelector("#burger > input").checked = false;
  });
});

window.addEventListener("resize", () => {
  document.querySelector("#burger > input").checked = false;
});