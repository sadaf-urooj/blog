import {Controller} from "stimulus";

export default class extends Controller {
    static targets = ['quote', 'quote2', 'menu', 'input', 'content', 'quoteText', 'quoteHidden', 'cross'];

    connect() {
        this.menuTarget.classList.add('off')
    }

    showmenu(e) {
        if (this.element.dataset.authenticated !== 'true') {
            return;
        }
        //stop the real right click menu
        e.preventDefault();
        //show the custom menu
        // set the menu box location same as mouse pointer location
        // this > means current controller instance
        this.menuTarget.style.top = `${e.clientY}px`;
        this.menuTarget.style.left = `${e.clientX}px`;
        this.menuTarget.classList.remove('off');
        this.selectedText = window.getSelection().toString();
    }

    hidemenu(e) {
        //add the listeners for the menu items
        this.menuTarget.classList.add('off');
        this.menuTarget.style.top = '-200%';
        this.menuTarget.style.left = '-200%';
    }

    quote(e) {
        if (this.selectedText.length == 0) {
            return
        }

        // target hidden input field
        this.quoteHiddenTarget.value = '<i class="fas fa-quote-left fa-xs"></i> ' + this.selectedText + ' <i class="fas fa-quote-right fa-xs"></i><br>'
        // target div above the comment box
        this.quoteTextTarget.innerHTML = '<i class="fas fa-quote-left fa-xs"></i> ' + this.selectedText + ' <i class="fas fa-quote-right fa-xs"></i><br>'
        this.crossTarget.classList.remove('d-none');
    }

    quote2(e) {

        // target hidden input field
        this.quoteHiddenTarget.value = '<i class="fas fa-quote-left fa-xs"></i> ' + this.contentTarget.innerText + ' <i class="fas fa-quote-right fa-xs"></i><br>'
        // target div above the comment box
        this.quoteTextTarget.innerHTML = '<i class="fas fa-quote-left fa-xs"></i> ' + this.contentTarget.innerText + ' <i class="fas fa-quote-right fa-xs"></i><br>'
        this.crossTarget.classList.remove('d-none');
    }

    cancel(e) {
        this.quoteTextTarget.innerHTML = '';
        this.quoteHiddenTarget.value = '';
        this.crossTarget.classList.add('d-none');

    }
}