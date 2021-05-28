const items = document.querySelectorAll(".item");
console.log(items);

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= -120 &&
    // rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + 120
    //   &&
    // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () => {
  items.forEach((item) => {
    if (isInViewport(item)) {
      console.log("boom");
      item.classList.add("show");
    }
  });
};

window.addEventListener("scroll", run);
window.addEventListener("load", run);
