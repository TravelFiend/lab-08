import Component from '../Component.js';

class PetItem extends Component {
    renderHTML() {
        const pet = this.props.pet;

        return /*html*/`
            <li class="pet-item">
                <h2>${pet.name}</h2>
                <p class="pet-type">${pet.type}</p>
                <img class="pet-img" src="${pet.url}" alt="">
                <p class="age">Age: ${pet.age}</p>
                <p>Flies: ${pet.flies}</p>
            </li>
        `;
    }
}

export default PetItem;