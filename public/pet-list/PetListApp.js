import Component from '../Component.js';
import Header from '../common/Header.js';
import PetList from './PetList.js';
import Loading from '../common/Loading.js';
import { getPets, removePet } from '../services/pet-api.js';

class PetListApp extends Component {

    async onRender(dom) {
        const header = new Header({ title: 'List of Pets' });
        dom.prepend(header.renderDOM());

        const loading = new Loading({ loading: true });
        dom.appendChild(loading.renderDOM());
        
        const main = dom.querySelector('main');

        const list = new PetList({ 
            pets: [],
            onRemove: async pet => {
                // this was disabled because it works but without JS before the try/cath it gives a linting error.  The only way around this seems to be to make an unnecessary variable so diasabling was the best option.
                // eslint-disable-next-line no-useless-catch
                try {
                    await removePet(pet.id);
                    const petState = this.state.pets;
                    const ind = petState.indexOf(pet);
                    petState.splice(ind, 1);
                    list.update({ petState });
                } catch (err) {
                    throw err;
                }
            }
        });
        main.appendChild(list.renderDOM());

        try {
            const pets = await getPets();
            list.update({ pets });
            this.state.pets = pets;
            // .then(pets => {
            //     setTimeout(() => list.update({ pets }), 2000);
            // });
        } catch (err) {
            console.log('Load pets failed\n', err);
        } finally {
            setTimeout(() => loading.update({ loading: false }), 2000);
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