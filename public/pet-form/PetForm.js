import Component from '../Component.js';

class PetForm extends Component {
    onRender(form){
        form.addEventListener('submit', () => {
            event.preventDefault();

            const formData = new FormData(form);

            // const pet = {
            //     name: 
            // }
        });
    }

    renderHTML(){
        return /*html*/`
            <div class="form">
                <h2>Enter a pet!</h2>
                <form>
                    <div class="inputs">
                        <label for="name">Which animal?</label>
                        <input type="text" name="name">
                    </div>

                    <div class="inputs">
                        <label for="dropdown">What type of animal?</label>
                        <select name="dropdown"></select>
                    </div>

                    <div class="inputs">
                        <label for="flight">Link to image?</label>
                        <input type="text" name="flight" placeholder="'https://images.pexels.com/photos/417142/pexels-photo-417142.jpeg?    auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'">
                    </div>

                    <div class="inputs">
                        <label for="age">How old is your pet?</label>
                        <input type="number" name="age">
                    </div>

                    <div class="inputs">
                        <label for="flight">Does it fly?</label>
                        <input type="checkbox" name="flight">Yes
                    </div>
                    <button>Add your pet</button>
                </form>
            </div>
        `;
    }
}

export default PetForm;