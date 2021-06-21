let sum = 0;

users.forEach(user => {
    if(typeof user.payment !== "number"){
        var c = parseInt(user.payment);
        sum += c;
    }esle{sum += user.payment;
    }

})

console.log(`Zarobki wszystkich użytkowników: ${sum}`);