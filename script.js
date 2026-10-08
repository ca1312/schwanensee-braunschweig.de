(() => {
  // 1 = current logo
  // 2 = current logo + Easter Egg
  // 3 = white swan logo

  const variants = [1, 2, 3];
  const variant = variants[Math.floor(Math.random() * variants.length)];

  const logo = document.getElementById("main-logo");
  const egg = document.getElementById("easter-egg");

  if (variant === 3) {
    logo.src = "logo-weiss.png";
    logo.alt = "Schwanensee";
  }

  if (variant === 2) {
    egg.style.display = "block";
  }
})();
