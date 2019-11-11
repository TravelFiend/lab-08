import Component from '../Component.js';

class PetDetail extends Component {
    renderHTML() {
        const pet = this.props.pet;
        const json = JSON.stringify(pet, true, 4);
        return /*html*/`
            <pre>${json}</pre>
        `;
    }
}

export default PetDetail;