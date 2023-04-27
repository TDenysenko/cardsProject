import visitsArray from '../index.js';
import deleteCards from '../api/deleteCards.js';
import {
    CardiologistEdit,
    TherapistEdit,
    DentistEdit
} from './modal-change.js';

class VisitCards {
    constructor(name, doctor, description, urgency, purpose, status, id) {
        this.name = name;
        this.doctor = doctor;
        this.description = description;
        this.priority = urgency;
        this.visitPurpouse = purpose;
        this.status = status;
        this.cardWrapper = document.createElement('div');
        this.cardWrapper.classList.add('card__unit', 'col-3');
        this.moreInfo = document.createElement('div');
        this.id = id;
        this.display = 'none';
    }

    createElements() {
        this.cardWrapper.classList.add(`card-id__${this.id}`);

        this.moreInfo.style.display = 'none';

        this.showMoreBtn = document.createElement('button');
        this.showMoreBtn.classList.add('btn', 'btn-dark', 'btn-show-more');
        this.showMoreBtn.innerText = 'Show more';

        this.deleteBtn = document.createElement('button');
        this.deleteBtn.classList.add('btn', 'btn-danger', 'delete-card');
        this.deleteBtn.innerText = 'X';

        this.editBtn = document.createElement('button');
        this.editBtn.classList.add('btn', 'btn-dark', 'btn-edit');
        this.editBtn.innerText = 'edit';
        this.editBtn.addEventListener('click', () => {
            if (this.doctor === 'Dentist') {
                new DentistEdit(this).render();
            } else if (this.doctor === 'Therapist') {
                new TherapistEdit(this).render();
            } else if (this.doctor === 'Cardiologist') {
                new CardiologistEdit(this).render();
            } else {
                console.log('UNKNOWN DOCTOR');
            }
        });

        this.showMoreBtn.addEventListener('click', e => {
            if (this.display === 'none') {
                this.moreInfo.style.display = 'block';
                this.showMoreBtn.innerText = 'show less';
                this.cardWrapper.classList.add(`open`);
                this.display = 'block';
                visitsArray.find(el => {
                    if (el.id === this.id) {
                        el.display = 'block';
                        this.showMoreBtn.innerText = 'show less';
                    }
                });
            } else {
                this.moreInfo.style.display = 'none';
                this.showMoreBtn.innerText = 'show more';
                this.cardWrapper.classList.remove(`open`);
                this.display = 'none';
                visitsArray.find(el => {
                    if (el.id === this.id) {
                        el.display = 'none';
                        this.showMoreBtn.innerText = 'show more';
                    }
                });
            }
        });

        this.cardWrapper.insertAdjacentHTML(
            'beforeend',
            `
            <h2><span>NAME</span>: ${this.name}</h2>
            <h3><span>DOCTOR</span>: ${this.doctor}</h3>
            `
        );

        this.moreInfo.insertAdjacentHTML(
            'afterbegin',
            `
        <p><span>PRIORITY</span>: ${this.priority}</p>
        <p><span>STATUS</span>: ${this.status}</p>
        <p><span>DESCRIPTION</span>: ${this.description}</p>
        <p><span>VISIT PURPOUSE</span>:${this.visitPurpouse}</p>
        `
        );

        this.deleteBtn.addEventListener('click', e => {
            e.preventDefault();
            deleteCards(this.id)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`${response.status}`);
                    }

                    return console.log(
                        'The post has been deleted successfully'
                    );
                })
                .catch(err => console.log(err));
            visitsArray.length--;
            if (visitsArray.length === 0) {
                document.querySelector(
                    '.card_container'
                ).innerHTML = `<h2 class="empty-card">the visits is empty</h2>`;
            } else {
                const err = document.querySelector('.empty-card')?.remove();
            }
            this.cardWrapper.remove();
        });

        this.cardWrapper.append(
            this.moreInfo,
            this.showMoreBtn,
            this.editBtn,
            this.deleteBtn
        );
    }

    render(selector = document.querySelector('.card_container')) {
        this.createElements();
        selector.append(this.cardWrapper);
    }
}
export class VisitCardsCardiologist extends VisitCards {
    constructor(
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
    ) {
        super(name, doctor, description, urgency, purpose, status, id);
        this.age = age;
        this.pressure = pressure;
        this.massIndex = massIndex;
        this.diseases = diseases;
    }
    createElements() {
        super.createElements();
        this.moreInfo.insertAdjacentHTML(
            'afterbegin',
            `
                  <p>AGE: ${this.age}</p>
                  <p>PREASSURE: ${this.pressure}</p>
                  <p>MASS INDEX: ${this.massIndex}</p>
                  <p>DISEASES: ${this.diseases}</p>
              `
        );
    }
    render() {
        super.render();
    }
}
export class VisitCardsDentist extends VisitCards {
    constructor(
        name,
        doctor,
        description,
        urgency,
        purpose,
        status,
        id,
        lastVisit
    ) {
        super(name, doctor, description, urgency, purpose, status, id);
        this.lastVisit = lastVisit;
    }
    createElements() {
        super.createElements();
        this.moreInfo.insertAdjacentHTML(
            'afterbegin',
            `
      <p>LAST VISIT DATE: ${this.lastVisit}</p>
      `
        );
    }
    render() {
        super.render();
    }
}

export class VisitCardsTherapist extends VisitCards {
    constructor(name, doctor, description, urgency, purpose, status, id, age) {
        super(name, doctor, description, urgency, purpose, status, id);
        this.age = age;
    }
    createElements() {
        super.createElements();
        this.moreInfo.insertAdjacentHTML(
            'afterbegin',
            `
    <p>AGE: ${this.age}</p>
    `
        );
    }
    render() {
        super.render();
    }
}
export default VisitCards;
