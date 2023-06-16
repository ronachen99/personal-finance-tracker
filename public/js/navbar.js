// Toggle navbar burger menu
document.addEventListener('DOMContentLoaded', () => {
  const navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  );
  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach((el) => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const targetElement = document.getElementById(target);
        el.classList.toggle('is-active');
        targetElement.classList.toggle('is-active');
      });
    });
  }
});
