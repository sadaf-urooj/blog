import {Controller} from "stimulus"
export default class  extends Controller {


    static targets = ['quote', 'quote2', 'menu', 'input', 'content', 'quoteText', 'quoteHidden']


    connect(){
        this.menuTarget.classList.add('off')
    }

    showmenu(e){

        let menu = null;
        //stop the real right click menu
        e.preventDefault();
        //show the custom menu
        // set the menu box location same as mouse pointer location
        // this > means current controller instance
        this.menuTarget.style.top = `${e.clientY}px`;
        this.menuTarget.style.left = `${e.clientX}px`;
        this.menuTarget.classList.remove('off');
        this.selectedText = window.getSelection().toString()
    }

    hidemenu(e){
        console.log('abc')
        //add the listeners for the menu items
        this.menuTarget.classList.add('off');
        this.menuTarget.style.top = '-200%';
        this.menuTarget.style.left = '-200%';
    }


    quote(e){
        if (this.selectedText.length == 0){ return }

        // target hidden input field
        this.quoteHiddenTarget.value = '<i class="fas fa-quote-left fa-xs"></i> '+this.selectedText+' <i class="fas fa-quote-right fa-xs"></i><br>'
        // target div above the comment box
        this.quoteTextTarget.innerHTML = '<i class="fas fa-quote-left fa-xs"></i> '+this.selectedText+' <i class="fas fa-quote-right fa-xs"></i><br>'

    }

    quote2(e){

        // target hidden input field
        this.quoteHiddenTarget.value = '<i class="fas fa-quote-left fa-xs"></i> '+this.contentTarget.innerText+' <i class="fas fa-quote-right fa-xs"></i><br>'
        // target div above the comment box
        this.quoteTextTarget.innerHTML = '<i class="fas fa-quote-left fa-xs"></i> '+this.contentTarget.innerText+' <i class="fas fa-quote-right fa-xs"></i><br>'
        // this.inputTarget.focus();
    }
        // this.inputTarget.value = '<i class="fas fa-quote-left fa-xs"></i> '+this.contentTarget.innerText+' <i class="fas fa-quote-right fa-xs"></i><br>'
        // this.inputTarget.focus();


}







//add the right click listener to the box
//     let box = document.getElementById('box');
//     box.addEventListener('contextmenu', showmenu);

//     //add a listener for leaving the menu and hiding it
//     menu.addEventListener('mouseleave', hidemenu);

//     //add the listeners for the menu items
//     addMenuListeners();

//     function showmenu(ev){
//     //stop the real right click menu
//     ev.preventDefault();
//     //show the custom menu
//     console.log( ev.clientX, ev.clientY );
//     menu.style.top = `${ev.clientY - 20}px`;
//     menu.style.left = `${ev.clientX - 20}px`;
//     menu.classList.remove('off');
// }

// this.inputTarget.value = this.contentTarget.innerText