import Component from '../Component.js';

class PetItem extends Component {
    renderHTML() {
        const pet = this.props.pet;

        return /*html*/`
            <li class="pet-item">
                <div class="info-container">
                    <h2>${pet.name}</h2>
                    <p class="pet-type">${pet.type}</p>
                </div>
                <div class="image-container">
                    <img src="${pet.url}" alt="${pet.name} image">
                </div>
                <p class="age">${pet.age}</p>
            </li>
        `;
    }
}

export default PetItem;