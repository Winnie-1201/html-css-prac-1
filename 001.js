// define an anime
var an = null;

// select the account input when click;
document.querySelector("#account").addEventListener("click", function () {
  if (an) {
    // if anime already existed, then pause the existing anime;
    an.pause();
  }
  // create an anime
  an = anime({
    targets: "path",
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});

// select the password input when click;
document.querySelector("#password").addEventListener("click", function () {
  if (an) {
    // if anime already existed, then pause the existing anime;
    an.pause();
  }
  // create an anime
  an = anime({
    targets: "path",
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
// select the login button when mouse hover;
document.querySelector("#submit").addEventListener("mouseover", function () {
  if (an) {
    // if anime already existed, then pause the existing anime;
    an.pause();
  }
  // create an anime
  an = anime({
    targets: "path",
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "530 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});

// select the account input when focus;
document.querySelector("#account").addEventListener("focus", function () {
  if (an) {
    // if anime already existed, then pause the existing anime;
    an.pause();
  }
  // create an anime
  an = anime({
    targets: "path",
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});

// select the password input when focus;
document.querySelector("#password").addEventListener("focus", function () {
  if (an) {
    // if anime already existed, then pause the existing anime;
    an.pause();
  }
  // create an anime
  an = anime({
    targets: "path",
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
// select the login button when focus;
document.querySelector("#submit").addEventListener("focus", function () {
  if (an) {
    // if anime already existed, then pause the existing anime;
    an.pause();
  }
  // create an anime
  an = anime({
    targets: "path",
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "530 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
});
