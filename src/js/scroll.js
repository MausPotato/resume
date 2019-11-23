window.addEventListener("scroll", function() {
  let { height } = document.querySelector("#header > .row").getBoundingClientRect();
  if (window.scrollY >= height && window.innerWidth > 768) {
    document.body.classList.add("menuFixed");
  } else {
    document.body.classList.remove("menuFixed");
  }
});

document.querySelectorAll(".scroll").forEach(function(el) {
  el.addEventListener("click", function() {
    let target = document.querySelector(el.getAttribute("href"));
    let targetPos = target.offsetTop;
    console.log(target, targetPos);
  });
});