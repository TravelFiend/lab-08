import Component from '../Component.js';
import PetItem from './PetItem.js';

class PetList extends Component {

    onRender(dom) {
        const pets = this.props.pets;
        
        pets.forEach(pet => {
            const props = { pet: pet };
            
            const petItem = new PetItem(props);
            dom.appendChild(petItem.renderDOM());
        });
    }

    renderHTML() {
        return /*html*/`
            <ul class="pets"></ul>
        `;
    }
}

export default PetList;