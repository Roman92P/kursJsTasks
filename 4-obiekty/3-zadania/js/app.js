class User{
    constructor(nick,name,surname,email,role){
        this.nick = nick;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
    }
    logIn(){
        var currentDate = new Intl.DateTimeFormat('pl-PL', {dateStyle: 'full',
        timeStyle: 'long'}).format(new Date())
        this.loginDates.push(currentDate);
    }
    showLoginDates(){
        this.loginDates.forEach(function(date){
            console.log(date);
        });
    }
}

var test = new User("Testowy", "Oleg","test", "a@a.pl", "Admin");
test.logIn();
test.showLoginDates();

cont name = ["Baraka","Jax","Johnny Cage", "Kitana"];

const log = [];

function Fighter(name,live,power){
    this.name = name;
    this.live = live;
    this.power = power;
}

Fighter.prototype.attack = function(who){
    var result = Math.random() < 0.5
    if(who.live>0 && result == true){
        who.live = who.live - this.powe;
    }
    log.push(`${this.name} zaatakował ${who.name}. ${this.name} pozostało
    ${this.live} życia ${who.name} pozostało ${who.live} życia.`);
}

var fighter1 = new Fighter("Rembo", 100, 5);
var fighter = new Fighter("Ninja", 100, 4);

fighter1.attack(fighter2);

console.log(log);