import Component from '../Component.js';
import Header from '../common/Header.js';
import PetForm from './PetForm.js';
import Loading from '../common/Loading.js';
import { getTypes } from '../services/pet-api.js';

class PetFormApp extends Component {
    async onRender(dom){
        const header = new Header();
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');

        const loading = new Loading({
            loading: true
        });
        main.appendChild(loading.renderDOM());

        try {
            const types = await getTypes();
            const petForm = new PetForm({ types });
            setTimeout(() => main.appendChild(petForm.renderDOM()), 2000);
        } catch (err) {
            console.log('Load pets failed\n', err);
        } finally {
            setTimeout(() => loading.update({ loading: false }), 2000);
        }
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