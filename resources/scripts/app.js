import { domReady } from "@roots/sage/client";

/**
 * app.main
 */
const main = async (err) => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }

  // application code
  let menuOpen = false;
  let menuButton = document.querySelector("#main-menu-button");
  let menu = document.querySelector("#main-menu");

  let toggleMenu = function () {
    if (menuOpen) {
      document.body.classList.remove("overflow-hidden");
      menu.classList.add("translate-y-full");
    } else {
      document.body.classList.add("overflow-hidden");
      menu.classList.remove("translate-y-full");
    }
    menuOpen = !menuOpen;
  };
  menuButton.addEventListener("click", () => {
    toggleMenu();
  });
};

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
domReady(main);
import.meta.webpackHot?.accept(main);
