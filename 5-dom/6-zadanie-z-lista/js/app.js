//Po kliknięciu w "dodaj element" do listy dodaj nowy element podobny do tego już istniejącego na liście
//
//  Po dodaniu powinien mieć kolejny numer który wylicz na podstawie ilości elementów + 1
//
//  Po kliknięciu w ikonę kosza usuń dany element
//  Po kliknięciu w ikonę klonowania sklonuj na koniec listy dany element

const btnDodaj = document.querySelector('#add');
const lista = document.querySelector('.list');
const elements = document.querySelectorAll('.element');
const elNumber = elements.length;

btnDodaj.addEventListener("click", function(event){
    const elements = document.querySelectorAll('.element');
    const elNumber = elements.length +1;

    const newDiv =  document.createElement('div');
    newDiv.classList.add('element');

    const newH = document.createElement('h3');
    newH.classList.add('element-title');
    newH.innerText= 'Element numer';

    const newSpan = document.createElement('span');
    newSpan.classList.add('nr');
    newSpan.innerText = " " + elNumber;

    newH.appendChild(newSpan);

    const cloneBtn = document.createElement('button');
    cloneBtn.classList.add('clone');
    cloneBtn.innerText = 'Clone';

    const delBtn = document.createElement('button');
    delBtn.classList.add('delete');
    delBtn.innerText = 'Delete';

    newDiv.appendChild(newH);
    newDiv.appendChild(cloneBtn);
    newDiv.appendChild(delBtn);

    lista.appendChild(newDiv);

    delBtn.addEventListener('click',()=>{
        delBtn.parentElement.remove();
    });

    cloneBtn.addEventListener('click',()=>{
       const toCloneOne = cloneBtn.parentElement;
       const sameOneEl = toCloneOne.cloneNode(true);
       lista.append(sameOneEl);
    })
});

const delBtns = document.querySelectorAll('.delete');

for(const del of delBtns){
    del.addEventListener('click', function(event){
        const parentForDelBtn = del.parentElement;
        parentForDelBtn.remove();
    });
}
//
//      const cloneBtns = document.querySelectorAll('.clone');
//     for(const clon of cloneBtns){
//        clon.addEventListener('click', function(event){
//           const parentForClonBtn = clon.parentElement;
//           lista.append(parentForClonBtn.cloneNode(true));
//        });
//     }