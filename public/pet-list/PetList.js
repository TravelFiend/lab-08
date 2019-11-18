import Component from '../Component.js';
import PetItem from './PetItem.js';

class PetList extends Component {

    
    onRender(dom) {
        const pets = this.props.pets;
        
        const onRemove = this.props.onRemove;

        pets.forEach(pet => {
            const props = { pet, onRemove };
            
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