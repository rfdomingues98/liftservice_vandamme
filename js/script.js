const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
  }
}

toggle.addEventListener("click", toggleMenu, false);

const items = document.querySelectorAll(".item");

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
    item.addEventListener("keypress", toggleItem, false);
  }
}

function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}

/* Event listener */
document.addEventListener("click", closeSubmenu, false);

const modal = document.getElementById("priceRangeModal");
const img = document.getElementById("price-range");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    if (modal.style.display !== "none") {
      modal.style.display = "none";
    }
  }
});

modal.addEventListener("click", function (e) {
  if (modal.style.display !== "none") {
    if (e.target.className !== "modal-content") {
      modal.style.display = "none";
    }
  }
});
