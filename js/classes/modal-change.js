import putRequest from '../api/putRequest.js';
import checkFields from '../function/checkForRequiredFields.js';

class ModalEdit {
    constructor({
        name,
        doctor,
        visitPurpouse,
        description,
        priority,
        status,
        lastVisit,
        age,
        pressure,
        massIndex,
        diseases,
        id
    }) {
        this.name = name;
        this.purpose = visitPurpouse;
        this.description = description;
        this.priority = priority;
        this.doctor = doctor;
        this.status = status;
        this.lastVisit = lastVisit;
        this.age = age;
        this.pressure = pressure;
        this.massIndex = massIndex;
        this.diseases = diseases;
        this.id = id;
        this.modalBackground = document.createElement('div');
        this.container = document.createElement('div');
        this.divButton = document.createElement('div');
        this.closeButton = document.createElement('button');
        this.submitButton = document.createElement('button');
        this.p = document.createElement('p');
        this.select = document.createElement('select');
        this.optionDefault = document.createElement('option');
        this.optionDentist = document.createElement('option');
        this.optionTherapist = document.createElement('option');
        this.optionCardiologist = document.createElement('option');
        this.wrapperDiv = document.createElement('div');
        this.chooseDoctorP = document.createElement('p');
        this.optionDoctorSelect = document.createElement('select');
        this.optionSelectLow = document.createElement('Low');
        this.optionSelectNormal = document.createElement('Normal');
        this.optionSelectHigh = document.createElement('High');
        this.options = this.checkForDoubleSelect(
            this.priority,
            'Low',
            'Normal',
            'High'
        );
        this.optionsStatus = this.checkForPrioritySelect(
            this.status,
            'Open',
            'Done'
        );
    }
    deleteModal() {
        this.modalBackground.remove();
    }
    checkForPrioritySelect(currentSelector, ...args) {
        return [...args].filter(el => el !== currentSelector);
    }
    checkForDoubleSelect(currentSelector, ...args) {
        return [...args].filter(el => el !== currentSelector);
    }
    createElement() {
        this.optionDoctorSelect.id = 'inputUrgencyDentist';
        this.optionDoctorSelect.classList.add('form-select');
        this.chooseDoctorP.innerText =
            'Select the doctor you would like to visit:';
        this.chooseDoctorP.classList.add('choose-doctor');
        this.optionDefault.innerText = 'choose doctor:';
        this.select.id = 'select-doctor';
        this.select.classList.add('form-select');
        this.select.setAttribute('disabled', 'disabled');
        this.optionDentist.innerText = 'Dentist';
        this.optionTherapist.innerText = 'Therapist';
        this.optionCardiologist.innerText = 'Cardiologist';
        this.optionDentist.value = '1';
        this.optionTherapist.value = '2';
        this.optionCardiologist.value = '3';
        this.optionDefault.selected = true;
        this.select.append(
            this.optionDefault,
            this.optionDentist,
            this.optionTherapist,
            this.optionCardiologist
        );
        this.modalBackground.classList.add('visit__modal-background');
        this.modalBackground.append(this.container);
        this.container.classList.add('visit__modal');
        this.closeButton.innerText = 'CANCEL';
        this.closeButton.classList.add('btn', 'btn-outline-danger');
        this.submitButton.classList.add('btn', 'btn-success');
        this.submitButton.type = 'submit';
        this.submitButton.setAttribute('disabled', true);
        this.closeButton.addEventListener('click', e => {
            this.container.innerHTML = '';
            this.container.classList.remove('visit__modal');
            this.modalBackground.classList.remove('visit__modal-background');
        });
        this.submitButton.addEventListener('click', e => {
            const name = document.querySelector('#inputNameDentist')?.value;
            const doctor = document.querySelector('#select-doctor')?.value;
            const purpose = document.querySelector(
                '#inputWorriesDentist'
            ).value;
            const description = document.querySelector(
                '#inputDescriptionDentist'
            ).value;
            const priority = document.querySelector(
                '#inputUrgencyDentist'
            )?.value;
            const lastVisit = document.querySelector(
                '#inputLastVisitDentist'
            )?.value;
            const ageCardiologist = document.querySelector(
                '#inputAgeCardiologist'
            )?.value;
            const ageTherapist =
                document.querySelector('#inputAgeTherapist')?.value;
            const pressure = document.querySelector(
                '#inputPressureCardiologist'
            )?.value;
            const massIndex = document.querySelector(
                '#inputIndexCardiologist'
            )?.value;
            const diseases = document.querySelector(
                '#inputDiseasesCardiologist'
            )?.value;
            const status = document.querySelector('#visitStatus')?.value;

            const checkRequiredFields = checkFields(
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
            console.log(doctor);
            if (checkRequiredFields) {
                putRequest(
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
                    this.id,
                    status
                );
                this.deleteModal();
            } else {
                document.querySelector('.requiredFileds__error')?.remove();
                const errContainer =
                    document.querySelector('.visit__modal').firstChild;
                errContainer.insertAdjacentHTML(
                    'beforeend',
                    `
        <div class="requiredFileds__error"> Please, complete all fields before submiting</div>
        `
                );
            }
        });
        this.submitButton.innerText = 'Submit changes';
        this.wrapperDiv.append(this.chooseDoctorP, this.select);
        this.wrapperDiv.insertAdjacentHTML(
            'beforeend',
            `
  <form class=" ">
  <div class="">
      <label for="inputNameDentist" class="form-label">Name</label>
      <input type="email" class="form-control" id="inputNameDentist" value="${this.name}" >
  </div>
  <div class="">
      <label for="inputWorriesDentist" class="form-label">Purpose of visit</label>
      <input type="text" class="form-control" id="inputWorriesDentist" value="${this.purpose}" >
  </div>
  <div class="">
      <label for="inputDescriptionDentist" class="form-label">description of the visit</label>
      <input type="text" class="form-control" id="inputDescriptionDentist" value="${this.description}" >
  </div>
  <div class="">
      <label for="inputUrgencyDentist" class="form-label">Urgency</label>
      <select id="inputUrgencyDentist" class="form-select">
      <option selected>${this.priority}</option>
      <option>${this.options[0]}</option>
      <option>${this.options[1]}</option>
      </select>  
  </div>
  <div class="">
  <label class="">Status</label>
  <select id="visitStatus" class="form-select">
  <option selected>${this.status}</option>
  <option>${this.optionsStatus}</option>
  </select>  
</div>
  `
        );

        this.modalBackground.addEventListener('click', e => {
            if (e.target === this.modalBackground) {
                this.modalBackground.remove();
            }
        });
        this.divButton.classList.add('divButton');
        this.divButton.append(this.submitButton);
        this.divButton.append(this.closeButton);
        this.container.append(this.wrapperDiv);
        this.container.append(this.divButton);
    }
    render(selector) {
        this.createElement();
        document.querySelector('body').append(this.modalBackground);
    }
}

export class CardiologistEdit extends ModalEdit {
    constructor(
        name,
        doctor,
        visitPurpouse,
        description,
        priority,
        status,
        pressure,
        massIndex,
        diseases,
        age,
        id
    ) {
        super(
            name,
            doctor,
            visitPurpouse,
            description,
            priority,
            status,
            pressure,
            massIndex,
            diseases,
            age,
            id
        );
        this.cardiologistContainer = document.createElement('div');
    }
    createElement() {
        super.createElement();
        this.submitButton.removeAttribute('disabled');
        this.optionCardiologist.setAttribute('selected', 'value');
        this.cardiologistContainer.classList.add('.cardiologistContainer');
        this.cardiologistContainer.insertAdjacentHTML(
            'afterbegin',
            `
             <div class="">
                    <div class="">
                        <label for="inputPressureCardiologist" class="form-label">Normal pressure</label>
                        <input type="text" class="form-control" id="inputPressureCardiologist" value="${this.pressure}" >
                    </div>
                    <div class="">
                        <label for="inputIndexCardiologist" class="form-label">Body mass index</label>
                        <input type="text" class="form-control" id="inputIndexCardiologist" value="${this.massIndex}" >
                    </div>
                    <div class="">
                        <label for="inputDiseasesCardiologist" class="form-label">if you have any previous diseases of the cardiovascular system, describe them:</label>
                        <input type="text" class="form-control" id="inputDiseasesCardiologist" value="${this.diseases}" >
                    </div>
                </div>
                <div class="">
                    <div class="">
                        <label for="inputAgeCardiologist" class="form-label">Your Age</label>
                        <input type="text" class="form-control" id="inputAgeCardiologist" value="${this.age}" >
                    </div>
            `
        );
        this.wrapperDiv.append(this.cardiologistContainer);
    }
    render(selector) {
        super.render();
    }
}
export class TherapistEdit extends ModalEdit {
    constructor(
        name,
        doctor,
        visitPurpouse,
        description,
        priority,
        status,
        age,
        id
    ) {
        super(
            name,
            doctor,
            visitPurpouse,
            description,
            priority,
            status,
            age,
            id
        );
    }
    createElement() {
        super.createElement();
        this.submitButton.removeAttribute('disabled');
        this.therapistContainer = document.createElement('div');
        this.optionTherapist.setAttribute('selected', 'value');
        this.therapistContainer.classList.add('.therapistContainer');
        this.therapistContainer.insertAdjacentHTML(
            'afterbegin',
            `
         <div class="">
                <label for="inputAgeTherapist" class="form-label">Your age:</label>
                <input type="text" class="form-control" id="inputAgeTherapist" value="${this.age}" >
            </div>
        `
        );
        this.wrapperDiv.append(this.therapistContainer);
    }
    render(selector) {
        super.render();
    }
}

export class DentistEdit extends ModalEdit {
    constructor(
        name,
        doctor,
        visitPurpouse,
        description,
        priority,
        status,
        lastVisit,
        id
    ) {
        super(
            name,
            doctor,
            visitPurpouse,
            description,
            priority,
            status,
            lastVisit,
            id
        );
        this.dentistContainer = document.createElement('div');
    }

    createElement() {
        super.createElement();
        this.submitButton.removeAttribute('disabled');
        this.optionDentist.setAttribute('selected', 'value');
        this.dentistContainer.classList.add('.dentistContainer');
        this.dentistContainer.insertAdjacentHTML(
            'beforeend',
            `
         <div id="dentist" class=" ">
                <label for="inputLastVisitDentist" class="form-label">Your last visit to doctor:</label>
                <input type="text" class="form-control" id="inputLastVisitDentist" value="${this.lastVisit}" ">
  
          </div>
        `
        );

        this.wrapperDiv.append(this.dentistContainer);
    }
    render() {
        super.render();
    }
}

export default ModalEdit;
