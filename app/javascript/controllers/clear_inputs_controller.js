import {Controller} from "stimulus"

export default class extends Controller {

    connect() {
        console.log('clear input controller')
    }

    static targets = ['input', 'quote', 'cross'];

    clear() {
        this.inputTarget.value = ' ';
        this.quoteTarget.innerHTML = ' ';
        this.crossTarget.classList.add('d-none');
        // this.inputTarget.setAttribute('placeholder','Type your comment here...');
        // this.inputTarget.placeholder = 'Type your comment here...';
    }

}