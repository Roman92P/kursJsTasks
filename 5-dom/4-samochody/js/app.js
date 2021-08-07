const btn = document.querySelectorAll("button");

for(const b of btn){
    b.addEventListener("click", function(event){
        const val =  b.closest('.car-simple');
        if(val.parentElement.classList.contains('car-show-detail')){
            val.parentElement.classList.remove('car-show-detail');
            val.nextElementSibling.style.display='none';

        }else{
            val.parentElement.classList.add('car-show-detail');
            val.nextElementSibling.style.display='block';}

    });
}