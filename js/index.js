// intro web
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-wrapper");
let logoSpan = document.querySelectorAll(".logo-intro");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 200);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 100);
      });
    }, 2500);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2700);
  });
});
//

// scroll animated
window.addEventListener("scroll", scrollAnimated);

function scrollAnimated() {
  var scrollAnimateds = document.querySelectorAll(".scrollAnimated");

  for (var i = 0; i < scrollAnimateds.length; i++) {
    var windowHeight = window.innerHeight;
    var scrollAnimatedTop = scrollAnimateds[i].getBoundingClientRect().top;
    var scrollAnimatedPoint = 50;

    if (scrollAnimatedTop < windowHeight - scrollAnimatedPoint) {
      scrollAnimateds[i].classList.add("active");
    } else {
      scrollAnimateds[i].classList.remove("active");
    }
  }
}
