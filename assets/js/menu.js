/**
 * A simple JS toggle to make the "burger menu" work on phones
 */

document.addEventListener('DOMContentLoaded', () => {
  // Toggle the navbar menu when the hamburger button is pressed
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
  
  // Close the navbar menu when an item is pressed
  const $navbarItems = Array.prototype.slice.call(document.querySelectorAll('.navbar-item'), 0);
  if ($navbarItems.length > 0) {
    $navbarItems.forEach( el => {
      el.addEventListener('click', () => {
        const $navbarBurgersOnClick = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        if ($navbarBurgersOnClick.length > 0) {
          $navbarBurgersOnClick.forEach( el => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            
            el.classList.remove('is-active');
            $target.classList.remove('is-active');
          });
        }
      });
    });
  }
});
