((d, ls) => {
  /* Loader */

  const $loader = d.querySelector(".loader");

  d.addEventListener("waiting", () => $loader.classList.add("desactive"));

  /* Menu */
  const $menuBtn = d.querySelector(".menu-btn");

  $menuBtn.addEventListener("click", () => {
    const $panel = d.querySelector(".panel"),
      $links = d.querySelectorAll(".link");

      /* Activando y desactivando el menú */
    $panel.classList.toggle("active");

    /* Para cuando demos click en un botón se quite el menú */
    $links.forEach((link) => {
      link.addEventListener("click", () => {
        $panel.classList.remove("active");
      });
    });
  });

  /* Dark mode */

  const $themeBtn = d.getElementById("theme-btn");
  const $selectors = d.querySelectorAll("[data-theme]"),
    ligthMode = () => {
      $selectors.forEach((selector) => {
        selector.classList.add("ligth-mode");
        $themeBtn.innerHTML = dark;
        ls.setItem("theme", "ligth");
      });
    },
    darkMode = () => {
      $selectors.forEach((selector) => {
        selector.classList.remove("ligth-mode");
        $themeBtn.innerHTML = ligth;
        ls.setItem("theme", "dark");
      });
    };

  let dark = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,11.807C9.349,9.155,8.7,5.261,10.049,2c-1.875,0.37-3.666,1.281-5.12,2.735c-3.905,3.905-3.905,10.237,0,14.142	c3.906,3.906,10.237,3.905,14.143,0c1.454-1.454,2.364-3.244,2.735-5.119C18.545,15.106,14.651,14.458,12,11.807z"/></svg>`,
    ligth = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24""><path d="M20.742,13.045c-0.677,0.18-1.376,0.271-2.077,0.271c-2.135,0-4.14-0.83-5.646-2.336c-2.008-2.008-2.799-4.967-2.064-7.723 c0.092-0.345-0.007-0.713-0.259-0.965C10.444,2.04,10.077,1.938,9.73,2.034C8.028,2.489,6.476,3.382,5.241,4.616 c-3.898,3.898-3.898,10.243,0,14.143c1.889,1.889,4.401,2.93,7.072,2.93c2.671,0,5.182-1.04,7.07-2.929 c1.236-1.237,2.13-2.791,2.583-4.491c0.092-0.345-0.008-0.713-0.26-0.965C21.454,13.051,21.085,12.951,20.742,13.045z M17.97,17.346c-1.511,1.511-3.52,2.343-5.656,2.343c-2.137,0-4.146-0.833-5.658-2.344c-3.118-3.119-3.118-8.195,0-11.314 c0.602-0.602,1.298-1.102,2.06-1.483c-0.222,2.885,0.814,5.772,2.89,7.848c2.068,2.069,4.927,3.12,7.848,2.891 C19.072,16.046,18.571,16.743,17.97,17.346z"/></svg>`;

  $themeBtn.addEventListener("click", () => {
    if (ls.getItem("theme") === "ligth") {
      darkMode();
    } else {
      ligthMode();
    }
  });

  if (ls.getItem("theme") === null) ls.setItem("theme", "dark");
  if (ls.getItem("theme") === "ligth") ligthMode();
  if (ls.getItem("theme") === "dark") darkMode();

  /* Scroll top button */

  const $scrollBtn = d.querySelector(".scroll-top");

  window.addEventListener("scroll", () => {

    $scrollBtn.addEventListener("click", () =>
      scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );

    if (scrollY > 0) $scrollBtn.classList.add("show");
    if (scrollY === 0) $scrollBtn.classList.remove("show");
  });

  /* Gallery */

  const $images = d.querySelectorAll(".gallery-img");

  $images.forEach((image) => {
    image.addEventListener("click", () => {
      const $showImg = d.querySelector(".gallery-show"),
        $closeBtn = d.querySelector(".close");

      $showImg.classList.add("show-img");
      d.querySelector(".img-show").setAttribute("src", image.src);
      d.querySelector(".text-show").innerHTML = image.alt;

      $closeBtn.addEventListener("click", () => {
        $showImg.classList.remove("show-img");
        // Activando el scroll button después de quitar el lightbox 
        $scrollBtn.classList.add("show");
      });

      // Desactivando el scroll button
      $scrollBtn.classList.remove("show");
    });
  });

  /* Formulario */

  const $form = d.getElementById("form");

  /* Desactivando los eventos por defecto del formulario */
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
})(document, localStorage);
