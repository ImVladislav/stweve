(function () {
  'use strict';

  new CgBurger({
    burgerSelector: "[data-burger]",
    targetSelector: "[data-burger-target]",
    activeClass: "active",
    hasCloseButton: false,
    closeButtonSelector: "[data-burger-close]",
    lockBody: false
  });
  const clipboard = new ClipboardJS("[data-clipboard-target]");
  clipboard.on("success", function (e) {
    e.clearSelection();
    document.querySelector("[data-clipboard-button]").classList.add("active");
    setTimeout(() => {
      document.querySelector("[data-clipboard-button]").classList.remove("active");
    }, 3000);
  });
  new LazyLoad({});
  document.querySelector("video").addEventListener("click", e => {
    e.preventDefault();
  });
  document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video');
    const enablePlayback = () => {
        videos.forEach(video => {
            video.muted = true;
            video.play().catch(error => {
                console.log(`Autoplay blocked for video: ${video.src}`, error);
            });
        });
        document.removeEventListener('click', enablePlayback);
    };
    document.addEventListener('click', enablePlayback);
});

})();
