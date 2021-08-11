//## Zadanie 1
//--------------------------
//Po kliknięciu na A przełącz klasę `.nav-li-active` z obecnie zaznaczonego elementu na kliknięty element.
//
//Po kliknięciu na A przewiń stronę do odpowiedniego elementu na który wskazuje link
//
//Zwróć uwagę że klasa `.nav-li-active` jest nadawana na element LI a nie na A.
//
//Dla przewinięcia skorzystaj z:
//https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
//
//Jak pobrać element na który wskazuje link?
//Wystarczy pobrać atrybut href linka i wykorzystać go w querySelector.
//Dla przykładu gdy link ma `<a href="#section1"></a>` to by pobrać element na który wskazuje link trzeba użyć instrukcji `document.querySelector("#section1")`
document.addEventListener("DOMContentLoaded", function(){
   const allNavLinkEl = document.querySelectorAll('.nav-link');
   for(const el of allNavLinkEl){
       el.addEventListener('click', function(e){
           removeCurrentActive(allNavLinkEl);
           el.parentElement.classList.add('nav-el-active');
           const forScrollEl = document.querySelector(`${el.getAttribute('href')}`);
           forScrollEl.scrollIntoView();

       });
   }

   function removeCurrentActive(list){
   for(const el of list){
       if(el.parentElement.classList.contains('nav-el-active')){
       el.parentElement.classList.remove('nav-el-active');}
          };
   }
});
