import Component from '../Component.js';
import Header from '../common/Header.js';
import PetForm from './PetForm.js';

class PetFormApp extends Component {
    onRender(dom){
        const header = new Header();
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');
        const petForm = new PetForm();
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