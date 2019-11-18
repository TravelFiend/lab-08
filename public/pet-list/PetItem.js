import Component from '../Component.js';

class PetItem extends Component {
    onRender(el) {
        const pet = this.props.pet;

        const onRemove = this.props.onRemove;

        const del = el.querySelector('.del');
        del.addEventListener('click', event => {
            event.preventDefault();

            onRemove(pet);
        });
    }
    
    renderHTML() {
        const pet = this.props.pet;

        return /*html*/`
            <li>
                <a class="pet-item" href="pet-detail.html?id=${pet.id}">
                    <h2>${pet.name}</h2>
                    <p class="pet-type">${pet.type}</p>
                    <img class="pet-img" src="${pet.url}" alt="">
                    <p class="age">Age: ${pet.age}</p>
                    <p>Flies: ${pet.flies}</p>
                </a>
                <button class="del">Delete Pet</button>
            </li>
        `;
    }
}

export default PetItem;