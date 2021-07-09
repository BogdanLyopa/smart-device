const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector(".button--close"),
  modal: document.querySelector(".backdrop"),
  showListBtn: document.querySelector("[data-show-list]"),
  showAddressBtn: document.querySelector("[data-show-address]"),
  address: document.querySelector(".footer__address"),
  list: document.querySelector(".footer__list"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onOpenModal);
refs.modal.addEventListener("click", onOverlayClick);
refs.showListBtn.addEventListener("click", showList);
refs.showAddressBtn.addEventListener("click", showAddress);

function onOpenModal() {
  refs.modal.classList.toggle("backdrop__hidden");
  window.addEventListener("keydown", onPressEscape);
}

function onCloseModal() {
  window.removeEventListener("keydown", onPressEscape);
  refs.modal.classList.toggle("backdrop__hidden");
}

function onOverlayClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onPressEscape(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}

function showList() {
  refs.showListBtn.classList.toggle("button--plus");
  refs.showListBtn.classList.toggle("button--minus");
  refs.list.classList.toggle("visually-hidden");
}

function showAddress() {
  refs.showAddressBtn.classList.toggle("button--minus");
  refs.showAddressBtn.classList.toggle("button--plus");
  refs.address.classList.toggle("visually-hidden");
}
