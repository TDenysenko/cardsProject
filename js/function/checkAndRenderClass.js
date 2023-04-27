import visitsArray from '../index.js';

import {
    VisitCardsDentist,
    VisitCardsCardiologist,
    VisitCardsTherapist
} from '../classes/renderVisitCards.js';
const checkCard = (doctor, element) => {
    if (doctor === 'Cardiologist') {
        const {
            name,
            doctor,
            description,
            urgency,
            purpose,
            status,
            id,
            ageCardiologist: age,
            pressure,
            massIndex,
            diseases
        } = element;
        const newElement = new VisitCardsCardiologist(
            name,
            doctor,
            description,
            urgency,
            purpose,
            status,
            id,

            age,
            pressure,
            massIndex,
            diseases
        );

        visitsArray.push(newElement);
        newElement.render();
    } else if (doctor === 'Dentist') {
        const {
            name,
            doctor,
            description,
            urgency,
            purpose,
            status,
            id,
            lastVisit
        } = element;
        const newElement = new VisitCardsDentist(
            name,
            doctor,
            description,
            urgency,
            purpose,
            status,
            id,

            lastVisit
        );

        visitsArray.push(newElement);
        newElement.render();
    } else {
        const {
            name,
            doctor,
            description,
            urgency,
            purpose,
            status,
            id,
            ageTherapist: age
        } = element;
        const newElement = new VisitCardsTherapist(
            name,
            doctor,
            description,
            urgency,
            purpose,
            status,
            id,

            age
        );

        visitsArray.push(newElement);
        newElement.render();
    }
};

export default checkCard;
