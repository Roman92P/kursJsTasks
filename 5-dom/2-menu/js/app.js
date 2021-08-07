//Po kliknięciu na LI przełącz klasę `.nav-el-active` z obecnie zaznaczonego elementu na element kliknięty.
//
//Zwróć uwagę, że klasa `.nav-el-active` jest nadawana na element LI a nie na A. Postaraj się sprawić, by podczas takiego kliku strona nie była przeładowywana.
//

const currentNavElActive = document.querySelector('.nav-el-active');
const aList = document.querySelectorAll('.nav-link');



for(const a of aList){
    a.addEventListener("click", function(ev){
    ev.preventDefault();
    removeNavElActiveFromCurrentEl(aList);
    a.classList.add('nav-el-active');
    currentNavElActive.classList.remove('nav-el-active');
    currentNavElActive.style.backgroungcolor='red';

});
}

currentNavElActive.addEventListener("click", function(ev){
    ev.preventDefault();
    currentNavElActive.classList.add('nav-el-active');
});

function removeNavElActiveFromCurrentEl(list){
    for(const a of list){
        const classList = a.classList;
        for(const c of classList){
            if(c==='nav-el-active'){
                a.classList.remove('nav-el-active');
            }
        }
    }
}
