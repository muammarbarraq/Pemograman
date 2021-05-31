//cara 
class mail {
    constructor(){
        this.from = "pengirim@dicoding.com";
        this.contact = [];
        this.yourOtherProperty = 'the values';
    }
    sendMessage(msg, to){
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this.contact.push(to); // menyimpan kontak baru
    };
}

//pemanggilan
const mail1 =new mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');
