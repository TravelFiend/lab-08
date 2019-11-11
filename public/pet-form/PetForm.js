import Component from '../Component.js';
import { addPets } from '../services/pet-api.js';

class PetForm extends Component {
    onRender(form){
        form.addEventListener('submit', async event => {
            event.preventDefault();

            const formData = new FormData(form);

            const pet = {
                name: formData.get('name'),
                typeId: formData.get('dropdown'),
                url: formData.get('pic'),
                age: parseInt(formData.get('age')),
                flies: formData.get('flight') === 'on'
            };

            try {
                const saved = await addPets(pet);
                console.log(saved);
                window.location = `pet-list.html?id=${saved.id}`;
            }
            catch (err) {
                console.log('pet not saved :(', err);
            }
        });
    }

    renderHTML(){
        const types = this.props.types;
        const dropList = types.map(type => {
            return `<option value="${type.id}">${type.name}</option>`;
        });

        const joinedDropList = dropList.join('');

        return /*html*/`
                <form>
                    <h2>Enter a pet!</h2>
                    <div class="inputs">
                        <label for="name">Which animal?</label>
                        <input type="text" id="name" name="name">
                    </div>

                    <div class="inputs">
                        <label for="dropdown">What type of animal?</label>
                        <select id="dropdown" name="dropdown">
                            ${joinedDropList}
                        </select>
                    </div>

                    <div class="inputs">
                        <label for="flight">Link to image?</label>
                        <input type="text" id="pic" name="pic" placeholder="'https://images.pexels.com/photos/417142/pexels-photo-417142.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'">
                    </div>

                    <div class="inputs">
                        <label for="age">How old is your pet?</label>
                        <input type="number" id="age" name="age">
                    </div>

                    <div class="inputs">
                        <label for="flight">Does it fly?</label>
                        <input type="checkbox" id="flight" name="flight">Yes
                    </div>
                    <button>Add your pet</button>
                </form>
        `;
    }
}

export default PetForm;