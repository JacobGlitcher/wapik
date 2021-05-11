// event listener
const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".nav-toggle");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-toggle");
  nav.classList.toggle("nav-toggle-on");
})


// to up
var myButton = document.querySelector(".fa-chevron-up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 660) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// js scroll animation
const aosElements = Array.from(document.querySelectorAll(".aos"));
const instantAos = Array.from(document.querySelectorAll(".in-aos"));

instantAos.forEach((element) => {
  setTimeout(() => {
    element.classList.add("in-aos-animate")
  }, 250)
})

window.addEventListener("scroll", throttle(scanElements, 200));

function scanElements() {
  aosElements.forEach(element => {
    if(isVisible(element)) {
      element.classList.add("aos-animate");
    } else {
      element.classList.remove("aos-animate");
    }
  })
}

function isVisible(element) {
  const elementDiv = element.getBoundingClientRect().top;
  let distanceFromTop = 500;
  return elementDiv - window.innerHeight < distanceFromTop ? true : false;
}

function throttle(fn, delay) {
  let lastCall = 0;
  return(...args) => {
    let context = this;
    let = current = new Date().getTime();

    if(current - lastCall < delay) {
      return
    }
    lastCall = current;
    return fn.apply(context, ...args)
  }
}
