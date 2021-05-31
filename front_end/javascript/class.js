function mail(){
    this.from = 'pengirim@dicoding.com';
};

mail.prototype.sendMessage= function n(msg, to){
    console.log(`you send: ${to} from ${this.from}`);
};

// pemanggilan

const mail1 = new mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');