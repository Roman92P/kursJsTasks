//## Zadanie 1
//--------------------------
//Po kliknięciu w link w zakładkach:
//- przełącz aktywną zakładkę (zmieniając klasę `tab-el-active`)
//- pokaż treść zakładki na którą kieruje dany link, ukryj pozostałe treści

    const aList = document.querySelectorAll('a');
    const aList2 = document.querySelectorAll('.tab-content-active');
    const hTag = document.querySelectorAll('h2');

    for(const a of aList){
        a.addEventListener("click", function(event){
            const className = 'tab-el-active';
            removeClassIfExist(aList, className);
            removeClassIfExist(hTag, 'tab-content-active');
            a.parentElement.classList.add('tab-el-active');
            if(event.target.innerText==='PYTHON'){
               const p =  document.querySelector('#python');
               p.classList.add('tab-content-active');
            }
            if(event.target.innerText==='JAVASCRIPT'){
                const j =  document.querySelector('#js');
                j.classList.add('tab-content-active');
            }
            if(event.target.innerText==='TURBO PASCAL'){
                const t =  document.querySelector('#turbo-pascal');
                t.classList.add('tab-content-active');
            }
        });
    }

    function removeClassIfExist(list, className){
        for (const l of list){
            if(l.parentElement.classList.contains(className)){
                l.parentElement.classList.remove(className);
            }
        }
    }