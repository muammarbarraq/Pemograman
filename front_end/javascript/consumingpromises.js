const stock = {
    coffeeBeans : 250,
    water : 1000,
}

const checkStock = new Promise((resolve, reject) => {
    if(stock.coffeeBeans >= 16 && stock.water >= 250){
        resolve("Stock cukup. Bisa membuat kopi");
    } else {
        reject ("Stock tidak cukup");
    }
});

const handleSucces = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailure = rejectionValue => {
    console.log(rejectionValue);
}

checkStock().then(handleSucces, handleFailure);