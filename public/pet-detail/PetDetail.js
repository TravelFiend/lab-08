import Component from '../Component.js';

class PetDetail extends Component {
    renderHTML() {
        const pet = this.props.pet;
        // const json = JSON.stringify(pet, true, 4);
        return /*html*/ `
            <div class="details">
                <p>ID: --------------- ${pet.id}</p>
                <p>Name: ---------- ${pet.name}</p>
                <p>Type: ----------- ${pet.type}</p>
                <p>Image Url: ---- ${pet.url}</p>
                <p>Age:------------ ${pet.age}</p>
                <p>Flies?: -------- ${pet.flies}</p>
            </div>
        `;
    }
}

export default PetDetail;