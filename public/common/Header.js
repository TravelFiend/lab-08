import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <div class="head-left">
                    <img class="logo" src="./assets/logo.jpg" alt="logo">
                    <h1>Pete's Pets</h1>
                </div>
                <nav>
                    <a href="./">Home</a>
                    <a href="./pet-list.html">Pet List</a>
                    <a href="./pet-form.html">Add a Pet</a>
                    <a href="./pet-detail.html">Pet Details</a>
                </nav>
            </header>
        `;
    }
}

export default Header;