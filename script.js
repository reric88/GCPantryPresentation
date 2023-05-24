// #region NAVBAR
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");
const slide = document.querySelector(".slide-out");

openBtn.addEventListener("click", () => {
  if (!openBtn.classList.contains("slide-out")) {
    nav.forEach((navEl) => navEl.classList.add("visible"));
    openBtn.classList.add("slide-out");
  } else {
    nav.forEach((navEl) => navEl.classList.remove("visible"));
    openBtn.classList.remove("slide-out");
  }
});

// closeBtn.addEventListener('click', () => {
//     nav.forEach(navEl => navEl.classList.remove('visible'));
//     openBtn.classList.remove('slide-out');
// });
// #endregion

// #region HORIZONTAL NAVBAR

const hNav = document.querySelector("#horizontal-navbar");
const hNavTop = document.querySelector("#h-navbar-top");
const hNavLogo = document.querySelector("#h-navbar-logo");
const listTitle = document.querySelectorAll(".list-title");
const listContent = document.querySelectorAll(".list-content");
const listContentItems = document.querySelectorAll(".list-content-items");
const searchbar = document.querySelector("#searchbar");
const topLogo = document.querySelector("#h-navbar-logo-top");
const bottomLogo = document.querySelector("#h-navbar-logo-bottom");

logoSize = () =>{
  if (hNav.classList.contains('h-navbar-slide')){
    bottomLogo.className = 'logo-grow';
  } else {
    bottomLogo.className = 'logo-shrink';
  }
}

hNav.addEventListener("mouseover", () => {
  hNav.classList.remove("h-navbar-pos");
  hNav.classList.add("h-navbar-slide");
  logoSize();
  // bottomLogo.classList.remove('logo-shrink');
  // bottomLogo.classList.add('logo-grow');
  // hNavLogo.classList.add("h-navbar-logo-grow");
});

hNav.addEventListener("mouseleave", () => {
  if (!searchbar.matches(":focus")) {
    setTimeout(() => {
      hNav.classList.add("h-navbar-pos");
      hNav.classList.remove("h-navbar-slide");
      logoSize();
      // bottomLogo.classList.add('logo-shrink')
      // bottomLogo.classList.remove('logo-grow')
      // hNavLogo.classList.remove("h-navbar-logo-grow");
    }, 1000);
  }
});



listTitle.forEach((title) => {
  title.addEventListener("mouseover", () => {
    const titleChild = title.firstElementChild;
    titleChild.classList.add("content-display");
    listContent.forEach((list) => {
      title.classList.add("orange-bg");
      list.addEventListener("mouseover", () => {
        list.classList.add("content-display");
      });
    });
  });
  title.addEventListener("mouseleave", () => {
    const titleChild = title.firstElementChild;
    titleChild.classList.remove("content-display");
    listContent.forEach((list) => {
      title.classList.remove("orange-bg");
      list.addEventListener("mouseleave", () => {
        list.classList.remove("content-display");
      });
    });
  });
});

searchbar.addEventListener("focus", () => {
  hNav.classList.add("h-navbar-slide");
  hNav.classList.remove("h-navbar-pos");
  logoSize();
});

searchbar.addEventListener("blur", () => {
  hNav.classList.remove("h-navbar-slide");
  hNav.classList.add("h-navbar-pos");
  logoSize();
});

// #endregion

// #region NAVBAR ACCORDION
const toggleBtn = document.querySelectorAll(".dropdown-title");
const toggleBtnParents = document.querySelectorAll(".dropdown");

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});

// #endregion

// #region HEADER PARALLAX
document.body.onscroll = function headerParallax() {
  let scrolling = document.scrollingElement.scrollTop;
  let headerIMG = document.getElementById("header-img");
  let xPos = "70%";
  let factor = 0.3;
  let yPos = (scrolling - 1400) * factor;
  headerIMG.style.backgroundPosition = xPos + " " + yPos + "px";
};
// #endregion
