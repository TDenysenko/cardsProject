import {
    VisitDentist,
    VisitCardiologist,
    VisitTherapist
} from '../classes/modal-visit.js';
import ModalEdit from '../classes/modal-visit.js';

const chooseDoctorListener = (targetValue, currentModal) => {
    if (targetValue === '1') {
        currentModal.deleteModal();
        new VisitDentist().render();
    } else if (targetValue === '2') {
        currentModal.deleteModal();
        new VisitTherapist().render();
    } else if (targetValue === '3') {
        currentModal.deleteModal();
        new VisitCardiologist().render();
    } else {
        currentModal.deleteModal();
        new ModalEdit().render();
    }
};
export default chooseDoctorListener;
