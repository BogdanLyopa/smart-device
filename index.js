const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector(".modal__close"),
  modal: document.querySelector(".modal__backdrop"),
  showListBtn: document.querySelector("[data-show-list]"),
  showAddressBtn: document.querySelector("[data-show-address]"),
  address: document.querySelector(".footer__address"),
  list: document.querySelector(".footer__list"),
};
const onOpenModal = () => {
  refs.modal.classList.toggle("modal__hidden");
  window.addEventListener("keydown", onPressEscape);
};

const onCloseModal = () => {
  window.removeEventListener("keydown", onPressEscape);
  refs.modal.classList.toggle("modal__hidden");
};

const onOverlayClick = (event) => {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
};

const onPressEscape = (event) => {
  if (event.code === "Escape") {
    onCloseModal();
  }
};

const showList = () => {
  refs.showListBtn.classList.toggle("footer__show");
  refs.showListBtn.classList.toggle("footer__hide");
  refs.list.classList.toggle("visually-hidden");
};

const showAddress = () => {
  refs.showAddressBtn.classList.toggle("footer__hide");
  refs.showAddressBtn.classList.toggle("footer__show");
  refs.address.classList.toggle("visually-hidden");
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onOpenModal);
refs.modal.addEventListener("click", onOverlayClick);
refs.showListBtn.addEventListener("click", showList);
refs.showAddressBtn.addEventListener("click", showAddress);
