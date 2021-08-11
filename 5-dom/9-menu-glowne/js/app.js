//## Zadanie 1
//--------------------------
//1) pobierz ze strony element `#menu` i dodaj do niego klasę `.menu`
//2) Pobierz z tego menu wszystkie elementy A i LI
//3) Po wjechaniu kursorem na każde LI dodaj temu LI klasę `.active`, a wszystkim pozostałym LI usuń klasę `.active`
//4) Po kliknięciu na każdy link w menu zrób następujące czynności:
//    - zatrzymaj domyślną akcję
//    - wszystkim LI poza tym w którym znajduje się kliknięty link dodaj klasę `.collased`
//    - rodzicowi klikniętego linka (LI) dodaj klasę `.expand` (nie powinien mieć klasy `.collapsed`)
//    - rodzicowi klikniętego linka dodaj event "transitionend", w którym podepniesz funkcję przez nazwę (nie anonimową). Funkcja ta może się dla przykładu nazywać elementTransitionEnd.
//
//    W funkcji tej:
//    - usuń zdarzenie "transitionend" który właśnie dodałeś http://kursjs.pl/kurs/events/events.php#addEventListener
//    - wypisz w konsoli href linka w tym LI (alternatywnie użyj `location.href = pobranyHref`)
//
//5) Dla chętnych:
//    W powyższej funkcji:
//    - stwórz dodatkowo nowy element który jest buttononem z klasą `.close` i tekstem "Zamknij"
//    - element ten dodaj do tego LI
//
//    Po kliknięciu na przycisk `.close` wszystkim LI usuń klasę `.expand` oraz klasę `.collapsed`
//    Usuń kliknięty przycisk `.close`

const menuEl = document.querySelector('#menu');
menuEl.classList.add('menu');

const allLiEl = document.querySelectorAll('li');
const allAEl = document.querySelectorAll('a');

for(const li of allLiEl){
    li.addEventListener('mouseover', function(event){
        removeActiveIfHave(allLiEl);
        li.classList.add('active');
    })
}

function removeActiveIfHave(allLiEl){
allLiEl.forEach(function(el){
    if(el.classList.contains('active')){
        el.classList.remove('active');
    }
});

for(const a of allAEl){
    a.addEventListener('click',function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        const targetA = e.currentTarget.getAttribute('href');
        for(const li of allLiEl){
            if(li.firstChild.getAttribute('href')!==targetA){
                li.classList.add('collased');
            }else{
                if(li.classList.contains('collased')){
                li.classList.remove('collased');
                }
            }
        }
        e.currentTarget.parentElement.classList.add('expand');
    })
}
}
