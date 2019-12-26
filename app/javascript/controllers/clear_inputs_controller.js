import {Controller} from "stimulus"
export default class  extends Controller {

    connect(){
        console.log('clear input controller')
    }

    static targets = ['input', 'quote']

    clear(){
        this.inputTarget.value = ' '
        this.quoteTarget.innerHTML = ' '
    }

}


