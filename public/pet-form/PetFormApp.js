import Component from '../Component.js';
import Header from '../common/Header.js';
import PetForm from './PetForm.js';
import { getTypes } from '../services/pet-api.js';

class PetFormApp extends Component {
    async onRender(dom){
        const header = new Header();
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');

        const types = await getTypes();
        const petForm = new PetForm({ types });
        main.appendChild(petForm.renderDOM());
    }

    renderHTML(){
        return /*html*/`
            <div class="container">
                <main></main>
            </div>
        `;
    }
}

export default PetFormApp;