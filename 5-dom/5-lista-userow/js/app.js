document.addEventListener("DOMContentLoaded", function(event) {
const val1 = document.querySelector('.user-list');
const val2 = document.querySelector('#name');
const val3 = document.querySelector('#phone');

document.addEventListener("submit", function(event){
    event.preventDefault();

    const userNameEl = document.createElement('div');
    userNameEl.innerText = val2.value;
    userNameEl.classList.add('user-name');
    const userPhoneEl = document.createElement('div');
    userPhoneEl.classList.add('user-phone');
    userPhoneEl.innerText = val3.value;
    const userDelButton = document.createElement('button');
    userDelButton.setAttribute('type', 'button');
    userDelButton.classList.add('btn');
    userDelButton.classList.add('user-delete');
    userDelButton.innerText = 'Usuń';
    const userDataEl = document.createElement('div');
    userDataEl.classList.add('user-data');
    userDataEl.appendChild(userNameEl);
    userDataEl.appendChild(userPhoneEl);
    const userLiEl = document.createElement('li');
    userLiEl.classList.add('user');
    userLiEl.appendChild(userDataEl);
    userLiEl.appendChild(userDelButton);


    val1.prepend(userLiEl);

    userDelButton.addEventListener('click', function(event){
        userLiEl.remove();
    });
    });
});
