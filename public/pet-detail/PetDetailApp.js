import Component from '../Component.js';
import Header from '../common/Header.js';
import Loading from '../common/Loading.js';
import PetDetail from './PetDetail.js';
import { getPet } from '../services/pet-api.js';

class PetDetailApp extends Component {

    async onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');

        const loading = new Loading({ loading: true });
        main.appendChild(loading.renderDOM());

        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get('id');

        if (!id) {
            window.location = 'pet-list.html';
            return;
        }

        try {
            const pet = await getPet(id);
            
            const petDetail = new PetDetail({ pet });
            console.log(typeof petDetail);
            
            main.appendChild(petDetail.renderDOM());
        } catch (err) {
            console.log(err);
        } finally {
            loading.update({
                loading: false
            });
        }
    }

    renderHTML() {
        return /*html*/ `
            <div>
                <!-- header goes here -->
                <main>
                </main>
            </div>
        `;
    }
}

export default PetDetailApp;