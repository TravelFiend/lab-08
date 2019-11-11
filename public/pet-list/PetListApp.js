import Component from '../Component.js';
import Header from '../common/Header.js';
import PetList from './PetList.js';
import Loading from '../common/Loading.js';
import { getPets } from '../services/pet-api.js';

class PetListApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'List of Pets' });
        dom.prepend(header.renderDOM());

        const list = new PetList({ pets: [] });
        const main = dom.querySelector('main');
        main.appendChild(list.renderDOM());

        const loading = new Loading({
            loading: true
        });
        main.appendChild(loading.renderDOM());

        try {
            getPets().then(pets => {
                setTimeout(() => list.update({
                    pets
                }), 2000);
            });
        } catch (err) {
            console.log('Load pets failed\n', err);
        } finally {
            setTimeout(() => loading.update({
                loading: false
            }), 2000);
        }
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