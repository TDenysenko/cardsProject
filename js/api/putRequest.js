import visitsArray from '../index.js';
import checkCard from '../function/checkAndRenderClass.js';

const putRequest = async (...args) => {
    console.log(args);

    const [
        name,
        doctor,
        purpose,
        description,
        priority,
        lastVisit,
        ageCardiologist,
        ageTherapist,
        pressure,
        massIndex,
        diseases,
        id,
        status
    ] = args;
    console.log(doctor);
    if (doctor === '1') {
        const request = await fetch(
            `https://ajax.test-danit.com/api/v2/cards/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${localStorage.getItem('Authorization')}`
                },
                body: JSON.stringify({
                    id: `${id}`,
                    doctor: `Dentist`,
                    name: `${name}`,
                    purpose: `${purpose}`,
                    description: `${description}`,
                    urgency: `${priority}`,
                    lastVisit: `${lastVisit}`,
                    status: `${status}`
                })
            }
        ).then(response => response.json());
        console.log(doctor);
        let oldValue;
        visitsArray.find((el, index) => {
            if (el.id === id) {
                return (oldValue = index);
            }
        });
        visitsArray.splice(oldValue, 1);

        const oldNodeElement = document.querySelector(`.card-id__${id}`);
        console.log(oldNodeElement);
        oldNodeElement.remove();
        checkCard('Dentist', request);
    } else if (doctor === '2') {
        const request = await fetch(
            `https://ajax.test-danit.com/api/v2/cards/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${localStorage.getItem('Authorization')}`
                },
                body: JSON.stringify({
                    id: `${id}`,
                    doctor: `Therapist`,
                    name: `${name}`,
                    purpose: `${purpose}`,
                    description: `${description}`,
                    urgency: `${priority}`,
                    ageTherapist: `${ageTherapist}`,
                    status: `${status}`
                })
            }
        ).then(response => response.json());
        let oldValue;
        visitsArray.find((el, index) => {
            if (el.id === id) {
                return (oldValue = index);
            }
        });
        visitsArray.splice(oldValue, 1);
        console.log(visitsArray);
        const oldNodeElement = document.querySelector(`.card-id__${id}`);
        console.log(oldNodeElement);
        oldNodeElement.remove();
        checkCard('Therapist', request);
    } else if (doctor === '3') {
        const request = await fetch(
            `https://ajax.test-danit.com/api/v2/cards/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${localStorage.getItem('Authorization')}`
                },
                body: JSON.stringify({
                    id: `${id}`,
                    doctor: `Cardiologist`,
                    name: `${name}`,
                    purpose: `${purpose}`,
                    description: `${description}`,
                    urgency: `${priority}`,
                    ageCardiologist: `${ageCardiologist}`,
                    status: `${status}`,
                    pressure: `${pressure}`,
                    massIndex: `${massIndex}`,
                    diseases: `${diseases}`
                })
            }
        ).then(response => response.json());
        let oldValue;
        visitsArray.find((el, index) => {
            if (el.id === id) {
                return (oldValue = index);
            }
        });
        visitsArray.splice(oldValue, 1);
        const oldNodeElement = document.querySelector(`.card-id__${id}`);
        console.log(oldNodeElement);
        oldNodeElement.remove();
        checkCard('Cardiologist', request);
    }
};

export default putRequest;
