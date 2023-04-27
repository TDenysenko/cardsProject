import checkFields from './checkForRequiredFields.js';
import postRequest from '../api/postRequest.js';
const checkFieldAndPost = () => {
    const searchDoctor = document.querySelector('#select-doctor')?.value;
    const searchDoctorText = document.querySelector('#select-doctor');
    const doctorName = searchDoctorText.querySelector('[selected]').textContent;
    const doctor = searchDoctorText.querySelector('[selected]').value;
    const name = document.querySelector('.form-control')?.value;
    const purpose = document.querySelector('#inputWorriesDentist')?.value;
    const description = document.querySelector(
        '#inputDescriptionDentist'
    )?.value;
    const urgency = document.querySelector('#inputUrgencyDentist')?.value;
    const lastVisit = document.querySelector('#inputLastVisitDentist')?.value;
    const ageTherapist = document.querySelector('#inputAgeTherapist')?.value;
    const ageCardiologist = document.querySelector(
        '#inputAgeCardiologist'
    )?.value;
    const pressure = document.querySelector(
        '#inputPressureCardiologist'
    )?.value;
    const massIndex = document.querySelector('#inputIndexCardiologist')?.value;
    const diseases = document.querySelector(
        '#inputDiseasesCardiologist'
    )?.value;
    const status = 'Open';

    const checkInputs = checkFields(
        doctor,
        name,
        purpose,
        description,
        lastVisit,
        ageCardiologist,
        ageTherapist,
        pressure,
        massIndex,
        diseases
    );

    if (checkInputs) {
        postRequest(
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
        );
    } else {
        document.querySelector('.requiredFileds__error')?.remove();
        const errContainer = document.querySelector('.visit__modal').firstChild;
        errContainer.insertAdjacentHTML(
            'beforeend',
            `
      <div class="requiredFileds__error"> Please, complete all fields before submiting</div>
      `
        );
    }
};

export default checkFieldAndPost;
