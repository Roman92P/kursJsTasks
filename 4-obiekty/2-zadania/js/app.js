const users = [
    //id, name, surname, email, age, value
    [  1, "Shauna", "Bradnocke", "sbradnocke0@altervista.org", 20, 108.28] ,
    [  2, "Mela", "Redman", "mredman1@nps.gov", 24, 267.37] ,
    [  3, "Othelia", "Lemon", "olemon2@slashdot.org", 15, 748.06] ,
    [  4, "Meier", "Cockell", "mcockell3@icio.us", 32, 1951.64] ,
    [  5, "Shellysheldon", "Gronowe", "sgronowe4@cnbc.com", 16, 1040.54] ,
    [  6, "Francisca", "Tofanini", "ftofanini5@gnu.org", 21, 1544.08] ,
    [  7, "Cliff", "Underwood", "cunderwood6@addtoany.com", 10, 451.21] ,
    [  8, "Caron", "Falshaw", "cfalshaw7@hugedomains.com", 27, 1968.72] ,
    [  9, "Anitra", "Warters", "awarters8@intel.com", 12, 380.68] ,
    [ 10, "Caitrin", "Baudrey", "cbaudrey9@ihg.com", 13, 1385.44] ,
    [ 11, "Reginald", "Beavers", "rbeaversa@elegantthemes.com", 15, 1205.52] ,
    [ 12, "Marleen", "Aickin", "maickinb@purevolume.com", 20, 1434.10] ,
    [ 13, "Lisa", "MacSorley", "lmacsorleyc@ocn.ne.jp", 17, 1567.07] ,
    [ 14, "Kimberli", "Berkeley", "kberkeleyd@merriam-webster.com", 19, 1994.97] ,
    [ 15, "Tawnya", "Illingworth", "tillingworthe@quantcast.com", 23, 1742.64]
]
//## Zadanie 1
//--------------------------
//W pliku app.js masz tablice użytkowników. Jest to zła forma danych. Czemu?
//
//Stwórz funkcję `fixData()`, która przyjmie tablicę ze
//złymi danymi i zwróci poprawioną tablicę obiektów
//gdzie każdy z nich będzie miał klucze:
//`id`, `name`, `surname`, `email`, `age`, `cash` pod które podstawisz kolejne dane z tablicy.
//Spróbuj wykorzystać tutaj destrukturyzację.

var s  = fixData(users);
console.log(s);
console.log(findSumCash(s));

function findSumCash(users){
    var sum;
    users.forEach(function(u){
    const{cash} = u;
    sum = sum+cash;
    })
    return sum;
}



function fixData(array){

function User(id,name,surname,email,age,cash){
        this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.age = age,
        this.cash = cash
}
var result = [];
    array.forEach(function(el){
    const{
            id = el[0],
            name = el[1],
            surname = el[2],
            email = el[3],
            age = el[4],
            cash = el[5]
        } = array;
       var x =  new User(id,name,surname,email,age,cash);
        result.push(x);
    })
    return result;

    var usersTwo = fixData(users);
    var sumCash=0;
    userTwo.forEach(function(user){
        sumCash = sumCash + user.cash;
    });

console.log(sumCash);
}
