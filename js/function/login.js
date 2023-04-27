import Modal from '../classes/modal-login.js';
import ModalEdit from '../classes/modal-visit.js';
const openLoginModal = () => {
    new Modal().render();
};
const openLoginModalEdit = () => {
    new ModalEdit().render();
};

export { openLoginModal, openLoginModalEdit };
