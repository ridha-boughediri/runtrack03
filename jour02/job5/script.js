document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", function () {
      let value = document.scrollY;
      var scrollPercent = (value / 4096) * 100;
      document.querySelector("footer").style.opacity = scrollPercent;
    });
  });

