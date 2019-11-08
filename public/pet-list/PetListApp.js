import Component from '../Component.js';
import Header from '../common/Header.js';
import PetList from './PetList.js';
import { getPets } from '../services/pet-api.js';

class PetListApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'List of Pets' });
        dom.prepend(header.renderDOM());

        const list = new PetList({ pets: [] });
        const main = dom.querySelector('main');
        main.appendChild(list.renderDOM());

        getPets().then(pets => {
            list.update({ pets });
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <main></main>
            </div>
        `;
    }
}

export default PetListApp;