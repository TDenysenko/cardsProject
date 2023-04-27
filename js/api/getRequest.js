import {
    VisitCardsDentist,
    VisitCardsCardiologist,
    VisitCardsTherapist
} from '../classes/renderVisitCards.js';
import visitsArray from '../index.js';

async function getRequest() {
    await fetch('https://ajax.test-danit.com/api/v2/cards', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${localStorage.getItem('Authorization')}`
        }
    })
        .then(response => response.json())
        .then(data => {
            visitsArray.length = 0;

            data.forEach(
                ({
                    name,
                    doctor,
                    description,
                    urgency,
                    purpose,
                    status,
                    id,
                    lastVisit,
                    age,
                    pressure,
                    massIndex,
                    diseases
                }) => {
                    const removeEmpty = () => {
                        if (visitsArray.length > 0) {
                            const err = document
                                .querySelector('.empty-card')
                                ?.remove();
                        }
                    };

                    if (doctor === 'Dentist') {
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

                        newElement.render();
                        visitsArray.push(newElement);
                        removeEmpty();
                    } else if (doctor === 'Cardiologist') {
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

                        newElement.render();
                        visitsArray.push(newElement);
                        removeEmpty();
                    } else if (doctor === 'Therapist') {
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

                        newElement.render();
                        visitsArray.push(newElement);
                        removeEmpty();
                    }
                }
            );
        });
}

export default getRequest;
