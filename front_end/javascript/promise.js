const executorFunction =(resolve, reject) => {
    const isCoffeeMakerReady = true ;
    if(isCoffeeMakerReady){
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin Kopi Tidak Bisa Digunakan")
    }
}

const makeCoffee = () => {
    return new Promise(executorFunction);
}
const coffeePromise = makeCoffee();
console.log(coffeePromise);