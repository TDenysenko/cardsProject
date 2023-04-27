import checkCard from '../function/checkAndRenderClass.js';
import visitsArray from '../index.js';

const postRequest = async (
    doctorName,
    searchDoctor,
    name,
    purpose,
    description,
    urgency,
    lastVisit,
    ageTherapist,
    ageCardiologist,
    pressure,
    massIndex,
    diseases,
    status
) => {
    if (doctorName === 'Dentist') {
        const recieveData = await fetch(
            'https://ajax.test-danit.com/api/v2/cards',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${localStorage.getItem('Authorization')}`
                },
                body: JSON.stringify({
                    doctor: `${doctorName}`,
                    name: `${name}`,
                    purpose: `${purpose}`,
                    description: `${description}`,
                    urgency: `${urgency}`,
                    lastVisit: `${lastVisit}`,
                    status: 'Open'
                })
            }
        ).then(response => response.json());
        console.log(recieveData);
        checkCard('Dentist', recieveData);
        if (visitsArray.length === 0) {
            document.querySelector(
                '.card_container'
            ).innerHTML = `<h2 class="empty-card">the visits is empty</h2>`;
        } else {
            const err = document.querySelector('.empty-card')?.remove();
        }
        document.querySelector('.visit__modal-background').remove();
    } else if (doctorName === 'Therapist') {
        console.log(ageTherapist);
        const recieveData = await fetch(
            'https://ajax.test-danit.com/api/v2/cards',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${localStorage.getItem('Authorization')}`
                },
                body: JSON.stringify({
                    doctor: `${doctorName}`,
                    name: `${name}`,
                    purpose: `${purpose}`,
                    description: `${description}`,
                    urgency: `${urgency}`,
                    ageTherapist: `${ageTherapist}`,
                    status: 'Open'
                })
            }
        ).then(response => response.json());
        console.log(recieveData);
        checkCard('Therapist', recieveData);
        if (visitsArray.length === 0) {
            document.querySelector(
                '.card_container'
            ).innerHTML = `<h2 class="empty-card">the visits is empty</h2>`;
        } else {
            const err = document.querySelector('.empty-card')?.remove();
        }
        document.querySelector('.visit__modal-background').remove();
    } else if (doctorName === 'Cardiologist') {
        const recieveData = await fetch(
            'https://ajax.test-danit.com/api/v2/cards',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${localStorage.getItem('Authorization')}`
                },
                body: JSON.stringify({
                    doctor: `${doctorName}`,
                    name: `${name}`,
                    purpose: `${purpose}`,
                    description: `${description}`,
                    urgency: `${urgency}`,
                    ageCardiologist: `${ageCardiologist}`,
                    pressure: `${pressure}`,
                    massIndex: `${massIndex}`,
                    diseases: `${diseases}`,
                    status: 'Open'
                })
            }
        ).then(response => response.json());
        document.querySelector('.visit__modal-background').remove();
        checkCard('Cardiologist', recieveData);
        if (visitsArray.length === 0) {
            document.querySelector(
                '.card_container'
            ).innerHTML = `<h2 class="empty-card">the visits is empty</h2>`;
        } else {
            const err = document.querySelector('.empty-card')?.remove();
        }
    } else {
        console.log('error post information');
    }
};
export default postRequest;
