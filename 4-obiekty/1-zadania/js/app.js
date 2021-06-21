class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    showArea(){
        return this.height * this.width;
    }
}

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    showArea(){
        return 3,14*this.radius*this.radius;
    }
}

var kwadrat = new Rectangle(2,3);
console.log(kwadrat.showArea());
var circle = new Circle(2);
console.log(circle.showArea());

class CurrentUser{
    constructor(name,surname,email,www,userType,isActice){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.www = www;
        this.userType = userType;
        this.isActive = isActice;
    }
    show(){
        console.log(this.constructor);
    }

    var user = new CurrentUser("Imie","Nazwisko", "email", "www.user.com","Admin",true);
    user.show();

    class Book{
        constructor(title,author,pageCount,publisher){
            this.title = title;
            this.author = author;
            this.pageCount = pageCount;
            this.publisher = publisher;
        }
        showDetails(){
            console.log(Object.keys(this));
        }
    }
    new Book("asdas","SADA", "100", "PWN").showDetails();

    var spaceShip ={
        name:"Enterprise",
        currentLocation:"Earth",
        flyDistance:0,
        flyTo(currentLocation){
            this.currentLocation = currentLocation;
            console.log(this.currentLocation);
        },
        showInfo(){
            console.log(
                `Informacje o statku:
                _______________________
                Statek ${this.name}
                doleciał do miejsca ${this.currentLocation}
                Statek przeleciał już całkowity dystans ${this.flyDistance}`
            )
        }
    }
    spaceShip.flyTo("Mars");
    spaceShip.showInfo();

    function meetClingon(SpaceShip){
        var arr1 = [];
        var arr0 = [];
        for(var i = 0; i<100; i++){
            var intVal = getRandomInt(0,2);
            if(intVal ===1) arr1.push(intVal);
            if(intVal ===0) arr0.push(intVal);
        }
        if(arr1.length>arr0.length)
            console.log(`Statek ${spaceShip.name} będący w okolicy ${spaceShip.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`)
        if(arr1.length<arr0.length)
            console.log(`Statek ${spaceShip.name} będący w okolicy ${spaceShip.currentLocation} został pokonany przez Klingonów`)
    }

    meetClingon(spaceShip);

    var book = {
        users:[],
        addUser(name,age, phone){
            function User(name,age,phone){
                this.name = name;
                this.age = age;
                this.phone = phone;
            }
            var user = new User(name,age, phone);
            this.users.push(user);
        },
        showUsers(){
            console.log(`Wszyscy użytkownicy książki: `);
            this.users.forEach(function(u){
                console.log(u);
            })
        },
        findByName(userName){
            userr = flase;
            this.users.forEach(function(user){
                if(user.name === userName) userr = user;
            })
            return userr;
        },
        getCount(){
            console.log(this.users.length)
        }
    }

    book.addUser("Roman","29","5555-1234");
    book.addUser("Roman","29","5555-1234");
    book.addUser("Roman","29","5555-1234");
    book.addUser("Roman","29","5555-1234");
    book.showUsers();
    book.getCount();

    var tableGenerator = {
        randomNumber(min,max){
            return getRandomInt(min,max);
        },
        generateIncTable(lng){
            var arr = [];
            for(var i = 0; i<lng;i++){
                arr.push(i);
            }
            return arr;
        },
        generateTableFromText(str){
            retur str.split("");
        },
        getMaxFromTable(arr){
            return Math.max.apply(null,arr);
        },
        getMinFromTable(arr){
            return Math.min.apply(null,arr);
        },
        delete(arr,index){
            var ind = arr.indexof(index);
            arr.splice(index,1);
            return arr;
        }
    }
    console.log(tableGenerator.generateIncTable(5));
    console.log(tableGenerator.generateTableFromText("ASasA"));
    console.log(tableGenerator.getMaxFromTable([1,2,4,5]));

    function getRandomInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max -min) + min);
    }

    var text = {
        check(txt,word){
            return txt.includes(word);
        },
        getCount(txt){
            return txt.length;
        },
        getWordCount(txt){
            return txt.split(" ").length;
        },
        setCapitalize(txt){
            var arr = txt.split(" ");
            var arr2 = [];
            arr.map(function(el){
                var str = el.substring(0,1).toUpperCase()+el.substring(1);
                arr2.puch(str);
            });
            return arr2.toString().replaceAll(",", " ");
        },
        setMix(txt){
            var arr = txt.split(" ");
            var arr2 = [];
            arr.forEach(function(el){
                var word = el.split("");
                var arr3  = [];
                word.map(function(lib,index){
                    if(index % 2 != 0){
                        arr3.push(lip.toUpperCase());
                    }if(index % 2 == 0){
                        arr3
                        .push(lip.toLowerCase());
                    }
                });
                arr2.push(arr3.toString().replaceAll(",",""));
            });
            return arr2.toString().replaceAll(","," ");
        },
        generateRandom(lng){
            var alphabet = "qwertyuiopasdfghjklzxcvbnm";
            var alphaArr = alphabet.split("");
            var size = alphaArr.length;
            var result = [];
            var index;
            for(var i = 0; i<lng; i++){
                var index = getRandomInt(0,5);
                var letter = alphaArr[index];
                result.push(letter);
            }
            return result.toString().replaceAll(",","");
        }
    }
}